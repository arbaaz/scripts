define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Models.UpdateStatusModel = Backbone.RelationalModel.extend({

    urlRoot: 'restaurants',

    url: function(){
        return "restaurants/"+this.id+"/status_update";
    },

    initialize: function(options) {
      this.id = options.id;
    },

    defaults: {
    },

    validate: function(attrs, options) {
      console.log("validating the restaurant..");
    },   

    buildObj: function(obj){
      obj.status_change = (obj.status_change == "null")?null:obj.status_change;      
      if (obj.schedule_date && obj.schedule_time ) {
        obj.scheduled_update = {};
        var update = {};
        update.new_status = (obj.new_status == "null")?null:obj.new_status;
        update.automatic = (obj.automatic=='on')?true:false;
        update.keep_notifying = (obj.keep_notifying=='on')?true:false;
        update.scheduled_at = (Date.parse(obj.schedule_date+" "+obj.schedule_time))/1000;
        obj.scheduled_update = update;        
      }
      var statusEnum = window.collections.status;
      if(obj.new_status == statusEnum.ACTIVE && obj.status_change == statusEnum.ACTIVE){
        obj.reason_id = null;
      }

      obj.new_status = null;
      obj.automatic = null;
      obj.keep_notifying = null;
      obj.schedule_date = null;
      obj.schedule_time = null;
      return obj;        
    },

    parse: function(response, options) {
      //if (options == undefined) return response;
      //return response.payload;
    }
  });

});
