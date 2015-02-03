define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var RestaurantClosingReasonCollection = Backbone.Collection.extend({

      model: dataEntryClient.Models.RestaurantClosingReasonModel,
      url: function () {
        return 'restaurant-closing-reason';
      },

      initialize: function (options) {
        this.options = options;

      },

      parse: function (response) {
        return response;

      }

    });
    return RestaurantClosingReasonCollection;
  });