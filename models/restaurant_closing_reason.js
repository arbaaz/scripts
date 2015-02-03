define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Models.RestaurantClosingReasonModel = Backbone.Model.extend({

        urlRoot: 'restaurant-closing-reason',

        initialize: function() {

        }
    });

});