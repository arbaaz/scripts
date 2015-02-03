define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.RestaurantClosingReasonView = Backbone.View.extend({
        el: '#page',
        template: JST['app/scripts/templates/restaurant_closing_reason.ejs'],
        initialize: function(options) {
            this.options = options;

        },

        render: function() {
            this.$el.html(this.template({
              reasons:[]
            }));
        },
        events: {

        },
        loadPlugins: function() {},
        funcName: function() {

        },

    });
});
