define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  var PointOfSaleModel = Backbone.Model.extend({

        url:function(){
            return "/restaurant/restaurant_product/point_of_sale/"+this.restaurant_id;
        },

        
        initialize: function(options) {
         this.restaurant_id = options.restaurant_id;
        },


         defaults: {
          'has_restaurant_app' : false,
          'is_app_service_on' : false,
          'is_tinyowls_device' : false,
          'imei_no' : null,
          'sim_no' : null,
          'username' : null,
          'person_name' : null,
          'allocation_date' : null,
          'phone_model' : null,
        },

        parse:function(response){
          return response.payload;
        },

    });
  return PointOfSaleModel;
)();