define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Views.RestaurantformView = Backbone.View.extend({

    initialize: function(attrs) {
      this.options = attrs;
      //this.collections = get_collections();
    },
    el: '#page',
    template: JST['app/scripts/templates/restaurantForm.ejs'],
    render: function(options) {
      var that = this;
      that.success = options.success;
      if (options.id) {
        
        dataEntryClient.restaurant_id = options.id;
        that.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id});
        global_observer.trigger("header_changed", {'restaurant_id' : that.restaurant.id, 'user_type':"restaurants", 'active_tab' : 'profile'});
        start_loading();
        that.restaurant.fetch({
          success: function(data,response) {
            // pass all the possible data
            var template = that.template({
              restaurant: data,
              collections: window.collections,
              sidebar_active_tab: "profile"
            });
            that.$el.html(template);
            compile_sidebar({
              id: data.get("id"),
              sidebar_active_tab: "profile"
            });

            that.topNavigation=new dataEntryClient.Views.RestaurantTopNavigationView();
            that.topNavigation.render(data,response.meta.menu_stash);

            stop_loading();
            that.loadPlugins();
            
            if (that.success) {
              generate_alert(true,"Saved successfully");
            }
            
            return that;
          },
          error: function(data,response,error){
            stop_loading();
            generate_alert(false,$.parseJSON(response.responseText).message);
          }
        });
      }
    },
    events: {
      //'click #save_changes': 'submit_form',
      'submit .form-horizontal': 'submit_form',
      'click .to_delete': 'delete_contact_number',
      // 'click .delete_email': 'delete_email',
      // 'click .add_new_email': 'add_new_email',
      'click .add_new_btn': 'add_new_contact_number',
      'click .add_new_dsgn': 'add_new_designation',
      'click .row_delete': 'delete_row',
      'click .add_new_number_sms': 'add_new_contact_number_sms',
      'change .designation': 'input_designation',
      'click .additional_info_add': 'add_additional_info',
      'click .additional_info_delete': 'delete_additional_info'
    },
    loadPlugins: function() {


      this.$("#closed_timing_ids").select2({
        width: "100%"
      });
      this.$("#locality_id").select2({
        width: "100%"
      });
      this.$("#cuisine_ids").select2({
        width: "100%"
      });
      this.$("#delivery_boys_vehicle").select2({
        width: "100%"
      });
      initialize_sidebars();
      console.log($(window).width());
    },
    submit_form: function(e) {
      e.preventDefault();
      start_loading();
      var restaurantDetails = $(".form-horizontal").serializeObject();
      // build the profile object

      var len = 0;
      if ($("#row_counter").val() != undefined) {
        len = parseInt($("#row_counter").val());
      }
      else {
        len = parseInt($("#rows").val());
      }

      restaurantDetails = this.restaurant.buildObj(restaurantDetails, len);

      restaurantDetails.is_bill_attached=restaurantDetails.is_bill_attached == "on" ? true : false
      restaurantDetails.is_sodexo_accepted=restaurantDetails.is_sodexo_accepted == "on" ? true : false


      $("html, body").animate({ scrollTop: 0 }, "fast");
      var that = this;
      this.restaurant.save(restaurantDetails, {
        success: function(data) {
          stop_loading();
          that.render({
            id: data.id,
            success: true
          });
          //generate_alert(false,"Could not reload");
        },
        error: function(data,response,error){
          stop_loading();
          generate_alert(false,$.parseJSON(response.responseText).message);
        }
      });
    },
    delete_contact_number: function(e) {
      e.preventDefault();
      var target = $(e.currentTarget);
      var i = e.currentTarget.dataset.deleteName.split("_")[6];
      //console.log(target.data());
      var hidden_el = $('[name="' + target.data('deleteName') + '"]');
      var hidden_text_el = $('[name="' + target.data('deleteInput') + '"]');
      if (hidden_el.val() == "false") {
        hidden_el.val("true");
        hidden_text_el.remove();
        $("#sms_checks_" + i).remove();
        hidden_el.parent().parent().hide();
      }
      return false;
    },
    add_new_contact_number: function(e) {
      e.preventDefault();
      var target = $(e.currentTarget);
      var count = $('[name="' + target.data("whois") + '_contact_numbers_count"]');
      var i = count.val();
      var html = partial("partials_contactNumber", {
        id: "new",
        markup_hidden_name: target.data("whois") + "_contact_numbers_attributes_" + i + "_id",
        markup_hidden_index: target.data("whois") + "_contact_numbers_attributes_" + i,
        markup_select_name: target.data("whois") + "_contact_numbers_attributes_" + i + "_number_type",
        markup_input_name: target.data("whois") + "_contact_numbers_attributes_" + i + "_number",
        markup_to_delete: target.data("whois") + "_contact_numbers_attributes_" + i + "_delete",
        i: i,
        number: "",
        contact_number_types: window.collections.contact_number_types,
        number_type: "",
        sms: false,
        is_present_on_counter: false,
        is_smartphone: false,
        is_verified: false
      });
      //console.log(html);
      count.val(parseInt(i) + 1);
      target.before(html);
      $("[name='" + target.data("whois") + "_contact_numbers_attributes_" + i + "_number'").focus();
    },

    add_new_designation: function(e) {
      e.preventDefault();
      var target = $(e.currentTarget);
      var counter = parseInt($("#rows").val());
      
      $("#rows").val(counter + 1);
      
      var newRow = partial("partials_designation", {
        index: counter,
        who: "undefined",
        designations: window.collections.designations,
        contact_number_types: window.collections.contact_number_types
      });
      
      $(".contact_person").append(newRow);
    },

    delete_row: function(e) {
      e.preventDefault();
      var target = $(e.currentTarget);
      var index = target.data('delete');
      if ($("#contacts_" + index + "_delete").val() == "false") {
        $("#contacts_" + index + "_delete").val("true");
        $("#designation_row_" + index).hide();
      }
    },

    // delete_email: function (e) {
    //   e.preventDefault();
    //   var i = e.currentTarget.dataset.index;

    //   if ($("#order_email_id_" + i).val() == "new") {
    //     $("#email_field_" + i).remove();
    //   } else {
    //     $("#delete_email_" + i).val("true");
    //     $("#email_field_" + i).hide();
    //   }
    // },

    // add_new_email: function (e) {
    //   e.preventDefault();
    //   var count = parseInt($("#total_emails").val());
    //   var row = partial('partials_order_forwarding_email', {
    //     i: count,
    //     id: "new",
    //     email: "",
    //     owner: false,
    //     general_manager: false,
    //     manager: false,
    //     verified: false
    //   });
    //   $(".email_template").append(row);
    //   $("#total_emails").val(count + 1);
    // },

    input_designation: function(e) {
      e.preventDefault();
      var target = $(e.currentTarget);
      if (target.val() == "other") {
        $("#" + target[0].id + "_text").removeClass("hidden");
        $("#" + target[0].id + "_text").val("");
      }
      else {
        $("#" + target[0].id + "_text").addClass("hidden");
        $("#" + target[0].id + "_text").val(target.val());
      }
    },
    add_new_contact_number_sms: function(e) {
      e.preventDefault();
      var target = $(e.currentTarget);
      var count = $('[name="phone_numbers_for_sms_contact_numbers_count"]');
      var i = count.val();
      var html = partial("partials_contactNumber", {
        id: "new",
        markup_hidden_name: "phone_numbers_for_sms_contact_numbers_" + i + "_id",
        markup_hidden_index: "phone_numbers_for_sms_contact_numbers_" + i,
        markup_select_name: "phone_numbers_for_sms_contact_numbers_" + i + "_number_type",
        markup_input_name: "phone_numbers_for_sms_contact_numbers_" + i + "_number",
        markup_to_delete: "phone_numbers_for_sms_contact_numbers_" + i + "_delete",
        i: i,
        number: "",
        contact_number_types: window.collections.contact_number_types,
        number_type: "",
        sms:true,
        is_present_on_counter: false,
        is_smartphone: false,
        is_verified: false
      });
      count.val(parseInt(i) + 1);
      //target.before(html);
      $(".add_new_contact_number_sms").append(html)
      $("[name='phone_numbers_for_sms_contact_numbers_" + i + "_number'").focus();
    },
    
    add_additional_info: function (e) {
      e.preventDefault();
      var info = e.currentTarget.dataset.info;
      var count = $("#" + info + "_count").val();
      var html = partial('partials_additional_name_locality', {
        markup_row: info + '_' + count + '_row',
        markup_id: info + '_' + count + '_id',
        markup_to_delete: info + '_' + count + '_to_delete',
        markup_delete: info,
        markup_name: info + '_' + count + '_name',
        markup_locality: info + '_' + count + '_locality',
        markup_placeholder: e.currentTarget.dataset.placeholder,
        i: count,
        id: "new",
        name: "",
        locality: ""
      });
      $("." + info).append(html);
      $("#" + info + "_count").val(count + 1);
    },

    delete_additional_info: function (e) {
      e.preventDefault();
      var i = e.currentTarget.dataset.index;
      var info = e.currentTarget.dataset.info;
      if ($("#" + info + "_" + i + "_id").val() == "new") {
        $("#" + info + "_" + i + "_row").remove();
      } else {
        $("#" + info + "_" + i + "_to_delete").val("true");
        $("#" + info + "_" + i + "_row").hide();
      }
    }
  });

});
