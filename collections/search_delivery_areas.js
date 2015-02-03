define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
      dataEntryClient.Collections.SearchDeliveryAreasCollection = Backbone.Collection.extend({

        // model: dataEntryClient.Models.NameModel,
        url: function() {
            return 'search-restaurant-delivery-areas';
        },

        initialize: function(options) {
            this.options = options;
        },

        parse: function(response) {
            return response.payload;     
        }
        
    });

});