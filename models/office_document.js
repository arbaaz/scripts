define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var OfficeDocumentModel = Backbone.RelationalModel.extend({

      url: function () {
        return "restaurants/office_doc/" + this.restaurant_id;
      },

      initialize: function (options) {
        this.restaurant_id = options.id;
      },

      defaults: {},

      validate: function (attrs, options) {
      },

      buildOfficeDocObj: function (obj) {
        /*var payload = new FormData();
         console.log(obj);
         payload.append("block_info",obj.block_info);
         payload.append("building",obj.building);
         payload.append("jain_food_available",obj.jain_food_available);
         payload.append("locality_id",obj.locality_id);
         payload.append("latitude",obj.latitude);
         payload.append("longitude",obj.longitude);
         payload.append("pin_code",obj.pin_code);
         payload.append("veg_type",obj.veg_type);
         payload.append("automatically_confirm_after_place",obj.automatically_confirm_after_place == "on"?true:false);
         payload.append("call_as_user",obj.call_as_user == "on"?true:false);
         payload.append("has_delivery", obj.has_delivery == "on"?true:false);
         payload.append("tied_up", obj.tied_up == "on"?true:false);*/
        obj.automatically_confirm_after_place = obj.automatically_confirm_after_place == "on" ? true : false;
        obj.call_as_user = obj.call_as_user == "on" ? true : false;
        obj.has_delivery = obj.has_delivery == "on" ? true : false;
        obj.tied_up = obj.tied_up == "on" ? true : false;
        obj.phone_numbers = [];
        var count = parseInt(obj['phone_numbers_count']);
        for (var i = 0; i < count; i++) {
          var contact = {};
          contact.id = obj['phone_numbers_' + i + '_id'];
          contact.number_type = obj['phone_numbers_' + i + '_number_type'];
          contact.number = obj['phone_numbers_' + i + '_number'];
          contact.to_delete = obj['phone_numbers_' + i + '_delete'];
          obj.phone_numbers.push(contact);
          //payload.append("phone_numbers["+i+"]",$.parseJSON(contact));
        }
        ;
        console.log(obj);
        //payload.append("phone_numbers[]",obj.phone_numbers);
        //(obj.delete_logo=="true")?payload.append("delete_logo",true):payload.append("delete_logo",false);
        return obj;
      },

      parse: function (response, options) {
        return response.payload;
      }
    });
    return OfficeDocumentModel;
  });