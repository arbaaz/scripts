define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
     //Promotion view to add or update a promotion.
     dataEntryClient.Views.PositionView = Backbone.View.extend({
        
          template: JST['app/scripts/templates/position.ejs'],
          initialize: function() {
          },
    
          el: '#page',
 
          render: function(options) {
               var that=this;
               this.mainview =new dataEntryClient.Views.AbsolutePositionView();
               start_loading();
               close_sidebar();
               if(options.delivery_area){
                    var temp = that.template({

                         delivery_area: options.delivery_area,
                         restaurants: options.restaurants,
                         locality_id: null
                    })
                    that.$el.html(temp);
                    $(document).ready(function() { $("#restaurant_id").select2(); });
                    stop_loading();
               }

               else{
                    

                    var temp = that.template({
                         restaurants: options.restaurants,
                         delivery_area: null,
                         locality_id: options.locality_id
                    });
                    that.$el.html(temp);
                    $(document).ready(function() { $("#restaurant_id").select2(); });
                              
                    stop_loading();

               }

          },


      
         events: {
               'submit #position_form' : 'add_update_position',
               'click #back_to_home' :'route_to_home'
         },

         route_to_home: function(){
          this.mainview.render();
         },
  
         add_update_position:function(e) {
               var that = this;

               e.preventDefault();
               start_loading();
          
               var datastr = $('#position_form').serializeObject();

               if(datastr.id) {
                // update position event
                    $.ajax({
                         type: "PUT",
                         data: datastr,
                         url: "update_delivery_area?area_id=" + datastr.id,
                         skip_url_prefix:false,
                         success:function(position) {
                              stop_loading();
                              that.mainview.render();
                         },
                         error: function(data, response, error) {
                              
                              stop_loading();
                              generate_alert(false,$.parseJSON(data.responseText).message);
                              return false;
                         }
                    })
               }
               else {
                     // add position event
                    $.ajax({
                         type: "GET",
                         data: datastr,
                         url: "add_new_delivery_area",
                         success:function(promotion) {
                              stop_loading();
                              that.mainview.render();
                         },
                         error: function(data, response, error) {
                              
                              stop_loading();
                              generate_alert(false,$.parseJSON(data.responseText).message);
                              return false;
                         }
                    })
               }
           
         }

     });

});