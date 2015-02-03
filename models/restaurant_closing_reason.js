define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var RestaurantClosingReasonModel = Backbone.Model.extend({

      urlRoot: 'restaurant-closing-reason',

      initialize: function () {

      }
    });
    return RestaurantClosingReasonModel;
  });