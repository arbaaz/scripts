define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
	dataEntryClient.Models.CampaignTagsModel = Backbone.Model.extend({
		url: function() {
			return "restaurants/campaign_tags/"+this.restaurant_id;
		},
		initialize: function(options) {
			//debugger
			this.restaurant_id = options.id;
		}
	});
});