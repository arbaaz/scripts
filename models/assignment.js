define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var AssignmentModel = Backbone.Model.extend({

      urlRoot: 'lead/restaurants',

      initialize: function () {
      },

      defaults: {},

      validate: function (attrs, options) {
      },

      parse: function (response, options) {
        if (options.collection) return response;
        return response.assignment;
      }
    });
    return AssignmentModel;
  });