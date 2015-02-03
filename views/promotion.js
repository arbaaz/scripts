define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    //Promotion view to add or update a promotion.
    var PromotionView = Backbone.View.extend({

      template: JST['app/scripts/templates/promotion.ejs'],
      initialize: function (attrs) {
        this.options = attrs;
        this.set_flag(false);
      },

      el: '#page',

      set_flag: function (val) {
        this.flag = val;
      },

      get_flag: function () {
        return this.flag;
      },

      render: function (options) {
        var that = this;

        start_loading();
        if (options.id) { // update a promotion
          this.promotion = new dataEntryClient.Models.PromotionModel({id: options.id});
          this.promotion.fetch({
            skip_url_prefix: true,
            success: function (promotion) {
              stop_loading();
              var temp = that.template({
                promotion: promotion.get("promotion")[0],
                virtual_restaurants: promotion.get("restaurants")
              });
              that.$el.html(temp);
              $('#virtual-restaurants').select2();
              var restaurant_id = $('#virtual-restaurants').val();
              var current_item = promotion.get("promotion")[0].items;
              if ($('#type').val() == 3) {
                start_loading();
                $.ajax({
                  skip_url_prefix: true,
                  url: "/restaurant/global_promotions/get_items?restaurant_id=" + restaurant_id,
                  type: "GET",
                  success: function (data) {
                    that.items_view = new dataEntryClient.Views.PromotionItemView();
                    that.items_view.render({
                      items: data,
                      current_item: current_item
                    });
                    stop_loading();
                  },
                  error: function (data, response, error) {
                    stop_loading();
                    generate_alert(false, $.parseJSON(response.responseText).message);
                    return false;
                  }
                });
              }
              else if ($('#type').val() == 4) {
                $('#restaurants').hide();
              }
              ;
              that.loadPlugins();
            },
            error: function (data, response, error) {
              stop_loading();
              generate_alert(false, $.parseJSON(response.responseText).message);
              return false;
            }

          })
        }
        else {  // add a promotion
          $.ajax({
            skip_url_prefix: true,
            url: "/restaurant/global_promotions/new",
            type: "GET",
            dataType: "json",
            success: function (data) {
              stop_loading();
              var virtual_restaurants = data.virtual_restaurants;
              var temp = that.template({
                promotion: null,
                virtual_restaurants: virtual_restaurants,
                promotion_type: data.promotion_type
              });
              that.$el.html(temp);
              $('#virtual-restaurants').select2();
              that.loadPlugins();
            },
            error: function (data, response, error) {
              stop_loading();
              generate_alert(false, $.parseJSON(response.responseText).message);
              return false;
            }
          });
        }
      },


      loadPlugins: function () {
        close_sidebar();

        var nowTemp = new Date();     // load datepicker
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
        this.$(".schedule_time").timepicker({'timeFormat': 'H:i'});
        this.$(".schedule_date").datepicker({
          format: 'dd/mm/yyyy',
          onRender: function (date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
          }
        }).on('changeDate', function (e) {
          $(this).datepicker('hide');
        }).data('datepicker');

        //   making promotion_banner_url field readonly
      },

      events: {
        'click .submit-form': 'add_update_promotion',
        'change #type': 'allowed_number_of_restaurants',
        'click #delete_banner_button': "delete_banner"
      },

      delete_banner: function (e) {
        e.preventDefault();
        if (this.promotion) {
          this.promotion.get("promotion")[0]['promotion_banner_url'] = null;
        }
        ;
        $('#promo_image').attr("src", '');
        $('#banner').val(null);
        this.set_flag(true);
      },


      allowed_number_of_restaurants: function (e) {
        var that = this;
        e.preventDefault();
        var type = $('#type').val();
        if (type == 1) {
          $('#virtual-restaurants').off('change');
          $('#restaurants').val('').show();
          $('#items').select2('data', null);
          $('#item_space').hide();
          $('#virtual-restaurants').select2('data', null);
          $('#virtual-restaurants').select2({
            maximumSelectionSize: 1
          });
        }
        else if (type == 2) {
          $('#virtual-restaurants').off('change');
          $('#restaurants').val('').show();
          $('#items').select2('data', null);
          $('#item_space').hide();
          $('#virtual-restaurants').select2('data', null);
          $('#virtual-restaurants').select2({
            maximumSelectionSize: 0
          });
        }
        else if (type == 3) {
          $('#virtual-restaurants').off('change');
          $('#restaurants').val('').show();
          $('#items').select2('data', null);
          $('#item_space').show();
          $('#virtual-restaurants').select2('data', null);
          $('#virtual-restaurants').select2({
            maximumSelectionSize: 1
          });
          $('#virtual-restaurants').on('change', function () {
            var restaurant_id = $('#virtual-restaurants').val();
            if (restaurant_id) {
              start_loading();
              $.ajax({
                skip_url_prefix: true,
                url: "/restaurant/global_promotions/get_items?restaurant_id=" + restaurant_id,
                type: "GET",
                success: function (data) {
                  that.items_view = new dataEntryClient.Views.PromotionItemView();
                  that.items_view.render({items: data});
                  stop_loading();
                },
                error: function (data, response, error) {
                  stop_loading();
                  generate_alert(false, $.parseJSON(response.responseText).message);
                  return false;
                }
              });
            }
          });
        }
        else if (type == 4) {
          $('#virtual-restaurants').off('change');
          $('#restaurants').val('').hide();
          $('#items').select2('data', null);
          $('#item_space').hide();
          $('#virtual-restaurants').select2('data', null);
        }
      },

      add_update_promotion: function (e) {
        e.preventDefault();
        start_loading();
        if (this.$("#status").val() == "-1") {
          stop_loading();
          generate_alert(false, "Please select status type.");
          return;
        }

        if (this.$(type).val() != 4 && this.$("#virtual-restaurants").val() == null) {
          stop_loading();
          generate_alert(false, "Please select a restuarant.");
          return;
        }

        if (this.$('type') == 3 && this.$('items').val() == null) {
          stop_loading();
          generate_alert(false, "Please select an item.");
          return;
        }
        ;

        var datastr = $('#promotion_form').serializeObject();
        datastr.valid_from = this.$("#start_date").val() + " " + this.$("#start_time").val();
        datastr.valid_till = this.$("#end_date").val() + " " + this.$("#end_time").val();
        datastr.valid_from = getReverseTimestamp(datastr.valid_from);
        datastr.valid_till = getReverseTimestamp(datastr.valid_till);

        if (datastr.valid_from >= datastr.valid_till) {
          stop_loading();
          generate_alert(false, "Please enter valid dates.");
          return;
        }

        datastr.id = this.id;
        //file
        var formData = new FormData();
        formData.append('banner', document.getElementById("banner").files[0]);
        for (var key in datastr) {
          formData.append(key, datastr[key]);
        }
        if (this.id) { // update promotion event
          if (this.get_flag() || document.getElementById("banner").files.length > 0) {
            formData.append('image_updated', true);
          }
          else {
            formData.append('image_updated', false);
          }
          var promotion = new dataEntryClient.Models.PromotionModel({id: this.id});
          promotion.save(null, {

            skip_url_prefix: true,
            type: "PUT",
            data: formData,
            contentType: false,
            processData: false,
            success: function (promotion) {
              stop_loading();
              Backbone.history.navigate('promotions', true);
            },
            error: function (data, response, error) {
              stop_loading();
              generate_alert(false, $.parseJSON(response.responseText).message);
              return false;
            }
          })
        }
        else { // add promotion event
          var promotion = new dataEntryClient.Models.PromotionModel();
          promotion.save(null, {
            skip_url_prefix: true,
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function (promotion) {
              stop_loading();
              Backbone.history.navigate('promotions', true);
            },
            error: function (data, response, error) {
              stop_loading();
              generate_alert(false, $.parseJSON(response.responseText).message);
              return false;
            }
          })
        }

      }

    });
    return PromotionView;
  });