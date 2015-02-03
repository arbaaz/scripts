define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Views.ChangeLogsView = Backbone.View.extend({

    el: '#page',
    template: JST['app/scripts/templates/change_logs.ejs'],

    initialize: function () {
            //this.collections = get_collections();
    },

    render: function (options) {
      var that = this;
      that.options = options;  
      var change_logs_collection = new dataEntryClient.Collections.ChangeLogsCollection({id:options.id});
      change_logs_collection.fetch({
        success: function(data){
          console.log(data);
          var temp = that.template({
            change_logs: data.models
          });
          that.$el.html(temp);
          that.loadPlugins(options);
          },
          error: function(data, response, error){
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });
      
    },
    loadPlugins: function(options){
      
    },
    events: {

    }

  });

});
