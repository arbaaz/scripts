define([       

    'underscore',
    'jquery', 
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    var NotAuthorizedView = Backbone.View.extend({

        el: '#page',
        template: JST['app/scripts/templates/401.ejs'],

        initialize: function () {
            
        },

        render: function (options) {
            var that = this;
            var temp = that.template(options);
            that.$el.html(temp);
            close_sidebar();           
        },
        /*cleanup: function(){
            this.cleanup();
        },*/

        loadPlugins: function(){
            
        },
        events: {
            
        },

    });
    return NotAuthorizedView;
});