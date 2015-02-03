define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.AlertsView = Backbone.View.extend({

        el: '#alerts',
        template: JST['app/scripts/templates/alerts.ejs'],

        initialize: function () {
            
        },

        render: function (options) {
            if(options != undefined){
                var that = this;
                that.options = options;
                var temp = that.template(options);
                that.$el.html(temp);
                that.$el.trigger("alerted");
                that.loadPlugins();         
            }
        },
        /*cleanup: function(){
            this.cleanup();
        },*/

        loadPlugins: function(){
            var that = this;
            $("[data-dismiss='alert']").click(function(){
                that.cleanup();
            });
        },
        events: {
            
        },

    });

});