define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var AccountDetailsView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/account_details.ejs'],

      initialize: function () {
      },

      render: function (options) {
        var that = this;
        that.options = options;
        if (options.id) {
          dataEntryClient.restaurant_id = options.id;
          that.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id});
          if (!that.restaurant.get("form_id")) {
            that.restaurant.fetch({async: false});
          }
          that.account_details = dataEntryClient.Models.AccountDetailsModel.findOrCreate({id: options.id});
          global_observer.trigger("header_changed", {'restaurant_id': options.id, 'active_tab': 'profile'});
          start_loading();
          that.account_details.fetch({
            success: function (data, response) {
              //console.log(data);
              var temp = that.template({
                restaurant: that.restaurant,
                account_details: data,
                online_settlement_detail: data.get("online_settlement_detail"),
                phone_numbers_for_confirmation_sms: data.get("phone_numbers_for_confirmation_sms"),
                sidebar_active_tab: "account_details"
              });
              that.$el.html(temp);
              compile_sidebar({
                id: that.restaurant.get("id"),
                sidebar_active_tab: "account_details"
              });

              that.topNavigation = new dataEntryClient.Views.RestaurantTopNavigationView();
              that.topNavigation.render(that.restaurant, response.meta.menu_stash);

              stop_loading();
              if (that.options.success) {
                generate_alert(true, "Saved Successfully");
              }
              ;
              that.loadPlugins();
              initialize_select2($('#payment_modes'), data.get('payment_modes'));
              return that;
            },
            error: function (data, response, error) {
              stop_loading();
              generate_alert(false, $.parseJSON(response.responseText).message);
            }
          });
        }
        ;
      },
      loadPlugins: function () {
        initialize_sidebars();
        this.branch_autocomplete();
      },
      events: {
        //'click #save_changes_accounts': 'save_changes'
        'submit #account_details_form': 'save_changes',
        'change #bank_id': 'branch_autocomplete',
        'click .add_new_number_sms': 'add_new_contact_number_sms',
        'click .to_delete': 'delete_contact_number',
        'change input[name="permission_for_weekly_settlement_of_card_payments"]': "settlement_card_change",
        'change input[name="online_payment"]': "settlement_card_change",
        'change #payment_modes': "select2_change",
      },

      select2_change: function (e) {
        var status = window.collections.payment_mode.ONLINE.toString();
        var value = $('#payment_modes').select2('val');
        var required_status = [window.collections.payment_mode.COD.toString(), window.collections.payment_mode.ONLINE.toString()]
        if (!_.chain(value).intersection([status]).isEmpty().value()) {
          //has online mode
          setCheckbox(true);
        } else {
          setCheckbox(false);
          if (_.chain(value).intersection(required_status).isEmpty().value()) {
            generate_alert(false, 'Please Select COD/ONLINE as one of payment mode');
          }
        }
        function setCheckbox(status) {
          $('input[name="online_payment"]').prop('checked', status);
          $('input[name="permission_for_weekly_settlement_of_card_payments"]').prop('checked', status);
        }
      },


      settlement_card_change: function (e) {
        var result = []
        var value = $('#payment_modes').select2('val')
        var online = [window.collections.payment_mode.ONLINE.toString()];
        if ($(e.currentTarget).is(':checked')) {
          var result = _.union(value, online);
        } else {
          var result = _.difference(value, online);
        }
        $('#payment_modes').select2('val', result).trigger('change');
      },


      save_changes: function (e) {
        e.preventDefault();
        start_loading();
        if ($('#payment_modes').val() == null) {
          generate_alert(false, 'Payment mode can\'t be empty');
          return;
        }
        var raw_obj = $(".form-horizontal").serializeObject();
        var accountModel = dataEntryClient.Models.AccountDetailsModel.findOrCreate({id: raw_obj.id});
        var account_details = accountModel.buildObj(raw_obj);
        var that = this;
        $("html, body").animate({scrollTop: 0}, "fast");
        accountModel.save(account_details, {
          type: 'put',
          success: function (data) {
            stop_loading();
            that.render({
              id: data.id,
              success: true
            });
          },
          error: function (data, response, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        })
      },
      branch_autocomplete: function () {
        var BankBranches = window.collections.bank_branches;
        var bank_id = ($('#bank_id').val() == "-1") ? null : $('#bank_id').val();

        var bankbranches = [];
        for (var i = 0; i < BankBranches.length; i++) {

          if (BankBranches[i][3] == bank_id) {
            bankbranches.push(BankBranches[i]);
          }
        }
        var fill_ifsc = function () {
          var name = $("#branch").val();
          for (var i = 0; i < bankbranches.length; i++) {
            if (bankbranches[i][1] == name) {
              var ifsc = bankbranches[i][2];
              break;
            }
          }
          $("#ifsc").val(ifsc);
        }
        var branch_name = new Bloodhound({
          limit: 100,
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: $.map(bankbranches, function (branch) {
            return {value: branch[1], key: branch[0]};
          })
        });
        branch_name.initialize();

        $('#branch').typeahead('destroy');

        $('#branch').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
          },
          {
            name: 'branch_name',
            displayKey: 'value',
            // `ttAdapter` wraps the suggestion engine in an adapter that
            // is compatible with the typeahead jQuery plugin
            source: branch_name.ttAdapter()
          }).on("typeahead:autocompleted", fill_ifsc)
          .on("typeahead:selected", fill_ifsc);
        $('.tt-hint .tt-suggestion').addClass('form-control');
        $('.typeahead.input-sm').siblings('input.tt-hint').addClass('hint-small');
      },
      add_new_contact_number_sms: function (e) {
        e.preventDefault();
        var target = $(e.currentTarget);
        var count = $('[name="phone_numbers_for_confirmation_sms_count"]');
        var i = count.val();
        var html = partial("partials_contactNumber", {
          id: "new",
          markup_hidden_name: "phone_numbers_for_confirmation_sms_" + i + "_id",
          markup_hidden_index: "phone_numbers_for_confirmation_sms_" + i,
          markup_select_name: "phone_numbers_for_confirmation_sms_" + i + "_number_type",
          markup_input_name: "phone_numbers_for_confirmation_sms_" + i + "_number",
          markup_to_delete: "phone_numbers_for_confirmation_sms_" + i + "_delete",
          i: i,
          number: "",
          contact_number_types: window.collections.contact_number_types,
          number_type: "",
          sms: false,
          is_present_on_counter: false,
          is_smartphone: false,
          is_verified: false
        });
        count.val(parseInt(i) + 1);
        target.before(html);
        $("[name='phone_numbers_for_confirmation_sms_" + i + "_number'").focus();

      },
      delete_contact_number: function (e) {
        e.preventDefault();
        var target = $(e.currentTarget);
        //console.log(target.data());
        var hidden_el = $('[name="' + target.data('deleteName') + '"]');
        var hidden_text_el = $('[name="' + target.data('deleteInput') + '"]');
        if (hidden_el.val() == "false") {
          hidden_el.val("true");
          hidden_text_el.remove();
          hidden_el.parent().parent().hide();
        }
        return false;
      },
    });
    return AccountDetailsView;
  });