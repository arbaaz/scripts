define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';

    var TimingCollection = Backbone.Collection.extend({

      url: function () {
        return "timings/" + this.id;
      },

      model: dataEntryClient.Models.TimingModel,

      initialize: function (options) {
        this.id = options.id
        console.log("intializing timing collections");
      },
      comparator: function (collection) {
        return ( collection.get('name') );
      },
      parse: function (response) {
        return response.payload;
      }

    });
    return TimingCollection;
  });