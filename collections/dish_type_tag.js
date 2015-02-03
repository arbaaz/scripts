define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Collections.DishTypeTagCollection = Backbone.Collection.extend({
    model: dataEntryClient.Models.DishTypeTagModel,
    url: 'items/items_dish_type_tags',
    initialize: function() {
        
    },
    
    comparator: function( collection ) {
      return( collection.get( 'tag' ) );
    }

   
  });

});