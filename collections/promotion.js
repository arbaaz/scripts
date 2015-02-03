define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var PromotionCollection = Backbone.Collection.extend({
      model: dataEntryClient.Models.PromotionModel,
      url: '/restaurant/global_promotions/index',
      initialize: function () {
        console.log("initializing promotion Collections!");
      },
      comparator: function (collection) {
        return ( collection.get('valid_from') );
      }

    });
    return PromotionCollection;
  });