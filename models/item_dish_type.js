define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict'; 
  var ItemDishTypeModel = Backbone.Model.extend({
    urlRoot: 'items',
    initialize: function() {
    },
    defaults: {
    },
    validate: function(attrs, options) {
     
    },
  });
  return ItemDishTypeModel;
});