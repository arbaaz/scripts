define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
	dataEntryClient.Models.FulfilmentModel = Backbone.Model.extend({
		url: function() {
			return "restaurants/fulfilment/"+this.restaurant_id;
		},
		defaults: {
			status_messages: {"inactive":"INACTIVE", "deleted":"DELETED", "invisible":"INVISIBLE"},
			limit_of_orders: 15
		},
		initialize: function(options) {
			//debugger
			this.restaurant_id = options.id;
		}
	});
});
