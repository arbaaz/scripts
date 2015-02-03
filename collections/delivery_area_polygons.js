define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var DeliveryAreaPolygonsCollection = Backbone.Collection.extend({

      //model: dataEntryClient.Models.StatusLogsModel,
      url: function () {
        return 'delivery_areas/' + this.id + '/map';
      },

      initialize: function (options) {
        this.id = options.id;
        this.polygons_not_shown = null;
        console.log("initializing delivery area polygons Collections!");
      },

      parse: function (response) {
        this.restaurant_coordinates = response.payload.restaurant_coordinates;
        this.polygons_not_shown = response.payload.groups_not_shown;
        return response.payload.polygons;
      }

    });
    return DeliveryAreaPolygonsCollection;
  });