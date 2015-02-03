define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  var DishItemCollection = Backbone.Collection.extend({
    model: dataEntryClient.Models.DishItemModel,
    url: 'dishes',
    initialize: function() {
        
    },
  });
  return DishItemCollection;
});