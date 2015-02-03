define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict'; 
   dataEntryClient.Models.DishItemModel = Backbone.Model.extend({
    urlRoot: 'dishes',
    initialize: function() {
    },
    defaults: {
    },
    validate: function(attrs, options) {
      
    },
  });
});
