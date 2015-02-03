define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var AccountDetailsModel = Backbone.RelationalModel.extend({

      url: function () {
        return "restaurants/account_details/" + this.restaurant_id;
      },

      initialize: function (options) {
        this.restaurant_id = options.id;
      },

      defaults: {},

      validate: function (attrs, options) {
      },

      buildObj: function (obj) {
        var new_obj = obj;
        // checkbox data sanitization

        new_obj.online_payment = new_obj.online_payment == "on" ? true : false;
        new_obj.permission_for_offers = new_obj.permission_for_offers == "on" ? true : false;
        new_obj.bank_account = {};
        var bank_account_temp = {};
        bank_account_temp.bank_id = obj.bank_id;
        bank_account_temp.branch = obj.branch;
        bank_account_temp.account_number = obj.account_number;
        bank_account_temp.account_name = obj.account_name;
        bank_account_temp.ifsc = obj.ifsc;
        bank_account_temp.account_type = obj.account_type;
        bank_account_temp.verified = obj.verified == "on" ? true : false;
        bank_account_temp.bearer_cheque_name = obj.bearer_cheque_name;
        new_obj.bank_account = bank_account_temp;
        new_obj.permission_for_weekly_settlement_of_offers = new_obj.permission_for_weekly_settlement_of_offers == "on" ? true : false;
        new_obj.permission_for_weekly_settlement_of_card_payments = new_obj.permission_for_weekly_settlement_of_card_payments == "on" ? true : false;

        var online_settlement_detail_temp = {};
        online_settlement_detail_temp.online_settlement_receipt_name = obj.online_settlement_receipt_name;
        online_settlement_detail_temp.online_settlement_receipt_address = obj.online_settlement_receipt_address;
        online_settlement_detail_temp.online_settlement_receipt_address_landmark = obj.online_settlement_receipt_address_landmark;
        online_settlement_detail_temp.online_settlement_receipt_address_pincode = obj.online_settlement_receipt_address_pincode;


        obj['phone_numbers_for_confirmation_sms_count'] = parseInt(obj['phone_numbers_for_confirmation_sms_count']);
        obj['phone_numbers_for_confirmation_sms'] = [];
        for (var i = 0; i < obj['phone_numbers_for_confirmation_sms_count']; i++) {
          var contact = {};
          contact.id = obj['phone_numbers_for_confirmation_sms_' + i + '_id'];
          contact.number_type = obj['phone_numbers_for_confirmation_sms_' + i + '_number_type'];
          contact.number = obj['phone_numbers_for_confirmation_sms_' + i + '_number'];
          contact.to_delete = obj['phone_numbers_for_confirmation_sms_' + i + '_delete'];
          obj['phone_numbers_for_confirmation_sms'].push(contact);
        }
        new_obj.bank_account.online_settlement_detail = {};
        new_obj.bank_account.online_settlement_detail = online_settlement_detail_temp;
        new_obj.bank_account.online_settlement_detail.phone_numbers_for_confirmation_sms = obj['phone_numbers_for_confirmation_sms'];

        return new_obj;
      },

      parse: function (response, options) {
        return response.payload;
      }
    });
    return AccountDetailsModel;
  });