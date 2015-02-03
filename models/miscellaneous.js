define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Models.MiscellaneousModel = Backbone.RelationalModel.extend({

        url: function(){
            return "restaurants/miscellaneous/"+this.restaurant_id;
        },

        initialize: function(options) {
            this.restaurant_id = options.id;
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        buildObj: function(obj) {
          var payload = new FormData();          
          //(obj.online_payment == "on")?payload.append("online_payment",true):payload.append("online_payment",false);
          payload.append("cost_for_two",obj.cost_for_two);
          console.log(obj);
          if(obj.cuisine_ids){            
            payload.append("cuisine_ids",obj.cuisine_ids);
          }else{
            payload.append("cuisine_ids","");
          }
          if(obj.restaurant_suggestion_ids){            
            payload.append("restaurant_suggestion_ids",obj.restaurant_suggestion_ids);
          }else{
            payload.append("restaurant_suggestion_ids","");
          }
          // payload.append("breakfast_rating",obj.breakfast_rating);
          // payload.append("lunch_rating" ,obj.lunch_rating);
          // payload.append("snacks_rating", obj.snacks_rating);
          // payload.append("dinner_rating",obj.dinner_rating);
          payload.append("delivery_status", obj.delivery_status);
          payload.append("spot_payment_type", obj.spot_payment_type);
          payload.append("comments",obj.comments);
          payload.append("reason_id",obj.reason_id);
          (obj.delete_logo=="true")?payload.append("delete_logo",true):payload.append("delete_logo",false);      
          return payload;
        },

        parse: function(response, options)  {
            return response.payload;
        }
    });

});