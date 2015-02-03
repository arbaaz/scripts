define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  var DeliveryareaCollection = Backbone.Collection.extend({

    url: 'delivery_areas',
    model: dataEntryClient.Models.DeliveryareaModel,

    initialize: function() {
      console.log("initializing delivery_areas Collections!");
    },

    parse: function(response) {
      return response.payload;
    }

  });
  return DeliveryareaCollection;
});