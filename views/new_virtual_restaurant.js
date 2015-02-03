define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  var NewVirtualRestaurantView = Backbone.View.extend({

      initialize: function() {
      },
      el: '#page',
      template: JST['app/scripts/templates/new_virtual_restaurant.ejs'],
      render: function(options) {
        var template = this.template();
        this.$el.html(template);
      },
      events: {
        "submit #create_new": "create_new"
      },
      create_new: function(e) {
        e.preventDefault();
        start_loading();
        $.ajax({
          url: "restaurants/new",
          type: "POST",
          data: {
            "restaurant_name": this.$("#name").val(),
            "form_id": this.$("#form_id").val(),
            "virtual" : true
          },
          success: function(data) {
            stop_loading();
            window.created_new = true;
            generate_alert(true,"Restaurant created successfully");
            window.location.hash = "restaurants";
            return true;
          },
          error: function(response, status, error) {
            stop_loading();
            var message = response.responseText?$.parseJSON(response.responseText).message:"Failed to create restaurant. Please contact the admin or try later";
            generate_alert(false,message);
            return false;
          }
        });
      }

    });
  return NewVirtualRestaurantView;
});