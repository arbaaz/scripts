define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.CopyRestaurantView = Backbone.View.extend({

      initialize: function() {
      },
      el: '#page',
      template: JST['app/scripts/templates/copy_restaurant.ejs'],
      render: function(options) {
        var that = this;
        var template = that.template({
          id:options.id
        });
        this.$el.html(template);
        close_sidebar();
      },
      events: {
        "submit #copy": "copy"
      },
      copy: function(e) {
        $("#copy_restaurant").prop("disabled","disabled");
        start_loading();
        e.preventDefault();
        var obj = $("#copy").serializeObject();
        obj.copy_profile = (obj.copy_profile == "on")?true:false;
        obj.copy_logo = (obj.copy_logo == "on")?true:false;
        obj.is_override=(obj.is_override == "on")?true:false;
        $.ajax({
          url: "restaurants/copy",
          type: "POST",
          data: obj,
          success: function(data) {
            stop_loading();
            generate_alert(true,"Restaurant copied successfully.", "center");
            //window.created_new = true;
            window.location.hash = "restaurants";
            return true;
          },
          error: function(response, status, error) {
            var message = response.responseText?$.parseJSON(response.responseText).message:"Failed to copy the restaurant. Please try again or contact the admin";
            generate_alert(false,message, "center");
            stop_loading();
            $("#copy_restaurant").removeProp("disabled");
            //alert(data.responseText);
            return false;
          }
        });
      }

    });

});