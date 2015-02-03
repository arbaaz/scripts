define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict'; 
   dataEntryClient.Models.DishTypeTagModel = Backbone.Model.extend({

    urlRoot: 'items/items_dish_type_tags',
    
    initialize: function() {
    },
    defaults: {
    },
    validate: function(attrs, options) {
     
    },
  });
});
