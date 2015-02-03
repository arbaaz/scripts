define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    var RestaurantTopNavigationView = Backbone.View.extend({  // View to display logs 
        
        initialize: function (data) {
            
        },

        el: '#top_navigation',
        template: JST['app/scripts/templates/restaurant_top_navigation.ejs'],

        render: function (data,menu_stash_bit) {
            var temp = this.template({
                restaurant: data,   
                menu_stash:menu_stash_bit  
            });
            this.$el.html(temp);
            this.loadPlugins(); 
        },
        loadPlugins: function(){
            
        },
        events: {
            'click .push_menu': 'push_menu'
        },
        push_menu: function(e) {
            start_loading();

            e.preventDefault();
            $(e.currentTarget).prop("disabled","disabled");
            var id = $(e.currentTarget).siblings(".push_menu_id").val();
            var that = this;
            $.ajax({
                type: 'post',
                url: 'restaurants/push_menu_stash',
                data: {id:id},
                success: function(message){
                    stop_loading();
                    that.$(".push_menu").hide();
                    generate_alert(true,"Your changes have been pushed successfully.");
                },
                error: function(response,status,error){
                    stop_loading();
                    generate_alert(false,$.parseJSON(response.responseText).message);
                    setTimeout(function(){$(e.currentTarget).removeProp("disabled");},10000);
                }
            });
        }
        
    });
    return RestaurantTopNavigationView;
});