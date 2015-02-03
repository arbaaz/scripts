define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';

    var MenuCategorizationCollection = Backbone.Collection.extend({

      //url: '/word_dictionaries/verify',
      url: '/fetch_tags',

      initialize: function () {
        console.log("initializing Categorization Collections!");
      },

      parse: function (response) {
        return response.payload;
      }

    });
    return MenuCategorizationCollection;
  });