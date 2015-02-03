define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';

  var RestaurantCollection = Backbone.Collection.extend({

    model: dataEntryClient.Models.RestaurantModel,
    url: 'restaurants',

    initialize: function() {
      console.log("initializing restaurants Collections!");
    },

    parse: function(response) {       
      this.meta = response.meta;   
      return response.payload;
    }

  });
  return RestaurantCollection;
});