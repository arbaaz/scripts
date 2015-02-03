define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Collections.ChangeLogsCollection = Backbone.Collection.extend({

    //model: dataEntryClient.Models.StatusLogsModel,
    url: function(){
      return 'restaurants/change_logs/'+this.id; 
    },

    initialize: function(options) {
      this.id = options.id;
      console.log("initializing change logs Collections!");
    },

    parse: function(response) {
      return response;
    }

  });

});