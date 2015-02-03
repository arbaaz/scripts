define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Models.RestaurantModel = Backbone.RelationalModel.extend({

    urlRoot: 'restaurants',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
      console.log("validating the restaurant..");
    },

    buildObj: function(payload, len) {
      payload['restaurant_commissions'] = [];
      var commission_obj_default = {};
      commission_obj_default.commission=parseFloat(payload["commission_charges_default"]);
      commission_obj_default.commission_type=window.collections.commission_type.DEFAULT;
      payload['restaurant_commissions'].push(commission_obj_default);
      var commission_obj_express = {};
      commission_obj_express.commission=parseFloat(payload["commission_charges_express"]);
      commission_obj_express.commission_type=window.collections.commission_type.EXPRESS;
      payload['restaurant_commissions'].push(commission_obj_express);

      payload["contact_persons"] = [];
      for (var j = 0; j < len; j++) {
        if (payload["designation_" + j] != undefined) {
          var person = {};
          person.id = payload["id_" + j];
          person.name = payload["name_" + j];
          person.email = payload["email_" + j];
          person.verified = payload["designation_is_verified_" + j];
          person.is_poc = payload["designation_is_poc_" + j];
          person.order_forwarding = payload["designation_order_forwarding_" + j];
          person.designation = payload["designation_text_" + j];
          person.contact_numbers_count = parseInt(payload["contacts_" + j + "_contact_numbers_count"]);
          person.delete_status = payload["contacts_" + j + "_delete"];
          person.contact_numbers = [];
          for (var i = 0; i < person.contact_numbers_count; i++) {
            var contact = {};
            contact.id = payload["contacts_" + j + '_contact_numbers_attributes_' + i + '_id'];
            contact.number_type = payload["contacts_" + j + '_contact_numbers_attributes_' + i + '_number_type'];
            contact.number = payload["contacts_" + j + '_contact_numbers_attributes_' + i + '_number'];
            contact.to_delete = payload["contacts_" + j + '_contact_numbers_attributes_' + i + '_delete'];
            person.contact_numbers.push(contact);
          };
          payload["contact_persons"].push(person);
        }
      };
      if (typeof payload.closed_timing_ids === "string") {
        payload.closed_timing_ids = [payload.closed_timing_ids];
      }else if(typeof payload.closed_timing_ids === "undefined") {
        payload.closed_timing_ids = [];
      }
      payload['phone_numbers_for_sms_contact_numbers_count'] = parseInt(payload['phone_numbers_for_sms_contact_numbers_count']);
      payload['phone_numbers_for_sms'] = [];
      for (var i = 0; i < payload['phone_numbers_for_sms_contact_numbers_count']; i++) {
        var contact = {};
        contact.id = payload['phone_numbers_for_sms_contact_numbers_' + i + '_id'];
        contact.number_type = payload['phone_numbers_for_sms_contact_numbers_' + i + '_number_type'];
        contact.number = payload['phone_numbers_for_sms_contact_numbers_' + i + '_number'];
        contact.to_delete = payload['phone_numbers_for_sms_contact_numbers_' + i + '_delete'];
        if (payload['phone_numbers_for_sms_contact_numbers_' + i + '_is_smart_phone'] != undefined) {
          contact.smart_phone = "true";
        }
        if (payload['phone_numbers_for_sms_contact_numbers_' + i + '_is_present_on_counter'] != undefined) {
          contact.present_on_counter = "true";
        }
        if (payload['phone_numbers_for_sms_contact_numbers_' + i + '_is_verified'] != undefined) {
          contact.verified = "true";
        }
        payload['phone_numbers_for_sms'].push(contact);
      };

      // payload['order_forwarding_email_count'] = parseInt(payload['order_forwarding_email_count']);
      // payload['order_forwarding_emails'] = [];

      // // order forwarding emails
      // for (var i = 0; i < payload['order_forwarding_email_count']; i++) {
      //   var email = {};
      //   if (payload['order_forward_email_' + i + '_email_id'] != undefined) {
      //     email.id = payload['order_forward_email_' + i + '_email_id'];
      //     email.email = payload['order_forward_email_' + i + '_email'];
      //     email.owner = payload['order_forward_email_' + i + '_is_owner'];
      //     email.general_manager = payload['order_forward_email_' + i + '_is_general_manager'];
      //     email.manager = payload['order_forward_email_' + i + '_is_manager'];
      //     email.verified = payload['order_forward_email_' + i + '_is_verified'];
      //     email.to_delete = payload['order_forward_email_' + i + '_to_delete'];
      //     payload['order_forwarding_emails'].push(email);
      //   }
      // }

      if (payload.delivery_boys_vehicle != "" || payload.delivery_boys_vehicle != []) {
        var tmp = [];
        _.each(payload.delivery_boys_vehicle, function(i){
          tmp.push(parseInt(i));
        });
        payload.delivery_boys_vehicle = tmp;
      }

      // ADDITIONAL INFORMATION
      // Restaurants with same owner
      payload['restaurants_of_same_owner_count'] = parseInt(payload['restaurants_of_same_owner_count']);
      payload['restaurants_of_same_owner'] = [];

      for (var i = 0; i < payload['restaurants_of_same_owner_count']; i++) {
        var restaurants = {};
        if (payload['restaurants_of_same_owner_' + i + '_id'] != undefined) {
          restaurants.id = payload['restaurants_of_same_owner_' + i + '_id'];
          restaurants.name = payload['restaurants_of_same_owner_' + i + '_name'];
          restaurants.locality = payload['restaurants_of_same_owner_' + i + '_locality'];
          restaurants.to_delete = payload['restaurants_of_same_owner_' + i + '_to_delete'];
          payload['restaurants_of_same_owner'].push(restaurants);
        }
      }

      // Societies with most orders
      payload['societies_with_most_orders_count'] = parseInt(payload['societies_with_most_orders_count']);
      payload['societies_with_most_orders'] = [];

      for (var i = 0; i < payload['societies_with_most_orders_count']; i++) {
        var restaurants = {};
        if (payload['societies_with_most_orders_' + i + '_id'] != undefined) {
          restaurants.id = payload['societies_with_most_orders_' + i + '_id'];
          restaurants.name = payload['societies_with_most_orders_' + i + '_name'];
          restaurants.locality = payload['societies_with_most_orders_' + i + '_locality'];
          restaurants.to_delete = payload['societies_with_most_orders_' + i + '_to_delete'];
          payload['societies_with_most_orders'].push(restaurants);
        }
      }

      // Officies with most orders
      payload['officies_with_most_orders_count'] = parseInt(payload['officies_with_most_orders_count']);
      payload['officies_with_most_orders'] = [];

      for (var i = 0; i < payload['officies_with_most_orders_count']; i++) {
        var restaurants = {};
        if (payload['officies_with_most_orders_' + i + '_id'] != undefined) {
          restaurants.id = payload['officies_with_most_orders_' + i + '_id'];
          restaurants.name = payload['officies_with_most_orders_' + i + '_name'];
          restaurants.locality = payload['officies_with_most_orders_' + i + '_locality'];
          restaurants.to_delete = payload['officies_with_most_orders_' + i + '_to_delete'];
          payload['officies_with_most_orders'].push(restaurants);
        }
      }

      return payload;
    },

    buildOfficeDocObj: function(payload) {
      payload.phone_numbers = [];
      var count = parseInt(payload['phone_numbers_count']);
      for (var i = 0; i < count; i++) {
        var contact = {};
        contact.id = payload['phone_numbers_' + i + '_id'];
        contact.number_type = payload['phone_numbers_' + i + '_number_type'];
        contact.number = payload['phone_numbers_' + i + '_number'];
        contact.to_delete = payload['phone_numbers_' + i + '_delete'];
        payload.phone_numbers.push(contact);
      };
      return payload;
    },

    parse: function(response, options) {
      if (options == undefined) return response;
      return response.payload;
    }
  });

});