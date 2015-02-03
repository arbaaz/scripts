define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var StatusLogsModel = Backbone.RelationalModel.extend({

      url: function () {
        return "restaurants/" + this.id + "/status_update_logs";
      },

      initialize: function (options) {
        this.id = options.id;
      },

      defaults: {},

      validate: function (attrs, options) {
      },

      buildObj: function (obj) {
        var newObj = obj;
        newObj.bank_account = {};
        var bank_account_temp = {};
        bank_account_temp.bank_id = obj.bank_id;
        bank_account_temp.branch = obj.branch;
        bank_account_temp.account_number = obj.account_number;
        bank_account_temp.account_name = obj.account_name;
        bank_account_temp.ifsc = obj.ifsc;
        newObj.bank_account = bank_account_temp;
        //newObj.id = obj.restaurant_id;
        console.log(newObj);
        return newObj;
      },

      parse: function (response, options) {
        if (options == undefined) return response;
        return response.payload;
      }
    });
    return StatusLogsModel;
  });