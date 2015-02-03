define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.MenuProgressBarView = Backbone.View.extend({  // View for menu progress bar 
        
        initialize: function (data) {
            
        },

        el: '#top_navigation',
        template: JST['app/scripts/templates/menu_progress_bar.ejs'],

        render: function (data,restaurant_id) {
            this.loadPlugins();
            var temp = this.template({
                progress:data,
                restaurant_id:restaurant_id
            });
            this.$el.html(temp);
            this.loadPlugins(); 
            return this;
        },
        loadPlugins: function(){
            // close_sidebar();
        },
        events: {
            
        },
        
        
    });

});