define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var DishItemModel = Backbone.Model.extend({
      urlRoot: 'dishes',
      initialize: function () {
      },
      defaults: {},
      validate: function (attrs, options) {

      },
    });
    return DishItemModel;
  });