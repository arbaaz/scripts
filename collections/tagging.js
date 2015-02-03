define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var TaggingCollection = Backbone.Collection.extend({
      initialize: function (options) {
        this.options = options;
      },

      model: dataEntryClient.Models.TaggingModel,

      url: function () {
        return 'tagging/' + this.options.restaurant_id;
      },
      parse: function (response) {
        return response.payload;
      },
      createAll: function (callback) {
        var collection = this;
        var options = {
          success: function (model, resp, xhr) {
            callback(model.payload);
          },
          error: function (model, resp, xhr) {

          }
        };
        return Backbone.sync('update', this, options);
      }
    });
    return TaggingCollection;
  });