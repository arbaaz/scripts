define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Collections.DishItemCollection = Backbone.Collection.extend({
    model: dataEntryClient.Models.DishItemModel,
    url: 'dishes',
    initialize: function() {
        
    },
  });

});