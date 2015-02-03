define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    var AbsolutePositionSubView = Backbone.View.extend({

    el: '#ranked_rest_list',
    template: JST['app/scripts/templates/absolute_position_subview.ejs'],

    initialize: function () {
    },

    render: function(options){
        
    	var that = this ;
        this.locality_id = options.locality_id;
    	this.$el.html(this.template({restaurants: options.response,locality_id: options.locality_id}));
    	close_sidebar();
        this.main_view = new dataEntryClient.Views.AbsolutePositionView();
        this.pos_view =  new dataEntryClient.Views.PositionView();
    },

    events: {
        'click #add_new': 'position_view',
        'click .edit_position': 'edit_position_view' ,
        'click .delete-position' : 'delete_position'
    },

    position_view: function(){
        
        var that = this;
        $.ajax({
            url: "/get_restaurants_in_locality?locality_id=" + that.locality_id,
            type: "GET",
            success: function(response){
                
                that.pos_view.render({
                    restaurants: response,
                    locality_id: that.locality_id
                });
            },
            error: function(data, response, error) {
                  
              stop_loading();
              generate_alert(false,$.parseJSON(data.responseText).message);
              return false;
            }

        })
    },

    edit_position_view: function(e){
        e.preventDefault();
        var data = e.currentTarget.dataset;
        var that = this;
        var delivery_area_id = data.delareaid;
        var locality_id = this.locality_id
        $.ajax({
            url: "get_delivery_area_info?locality_id="+locality_id+"&delivery_area_id="+delivery_area_id,
            type: "GET",
            success: function(response){
                that.pos_view.render({
                    restaurants: response.restaurants,
                    delivery_area: response.delivery_area,
                    locality_id: locality_id
                })
                Backbone.history.navigate('position')
            },
            error: function(data, response, error) {
                  
              stop_loading();
              generate_alert(false,$.parseJSON(data.responseText).message);
              return false;
            }
        })


    },

    delete_position: function(e){
        e.preventDefault();
        var data = e.currentTarget.dataset;
        var that = this;
        var delivery_area_id = data.delareaid;
        $.ajax({
            url: "set_absolute_position_to_nil?delivery_area_id="+delivery_area_id,
            type: "PUT",
            success: function(response){
                generate_alert(true,response.message);
                that.main_view.render();

            },
            error: function(data, response, error) {
                  
              stop_loading();
              generate_alert(false,$.parseJSON(data.responseText).message);
              return false;
            }
        })
    }
  });
    return AbsolutePositionSubView;
});