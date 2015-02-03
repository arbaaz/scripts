define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';

  dataEntryClient.Collections.StatusLogsCollection = Backbone.Collection.extend({

    model: dataEntryClient.Models.StatusLogsModel,
    url: function(){
      return 'restaurants/'+this.id+'/status_update_logs'; 
    },

    initialize: function(options) {
      this.id = options.id;
      console.log("initializing status logs Collections!");
    },

    parse: function(response) {
      console.log(response);
      return response.payload;
    }

  });

});