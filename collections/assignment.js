define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
    'use strict';
    dataEntryClient.Collections.AssignmentCollection = Backbone.Collection.extend({

        model: dataEntryClient.Models.AssignmentModel,
        url: 'lead/restaurants',

        parse: function(payload) {
        	this.total = payload.total;
        	this.query = payload.query;
          return payload.assignments;
        }

    });

});