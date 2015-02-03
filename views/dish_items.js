define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.DishItemsView = Backbone.View.extend({  // View to display logs 

        el: '#page',
        template: JST['app/scripts/templates/dish_items.ejs'],

        initialize: function () {
            
        },
        render: function (options) {
            this.dish_items = new dataEntryClient.Collections.DishItemCollection();
            var that = this;  
            that.options = options;                  
            start_loading();
            global_observer.trigger("header_changed", {'active_tab' : "dashboard", 'user_type':"restaurants"});
            this.dish_items.fetch({
                skip_url_prefix : false,
                success: function(data, colllection){  
                    var temp = that.template({
                        dish_items: data.models[0].get('payload'),
                    });
                    that.$el.html(temp);
                    stop_loading();               
                    that.loadPlugins();                                                                        
                },
                error: function(data, response, error){
                    stop_loading();
                    if (data.status == 401) {
                        close_sidebar(); 
                        Backbone.history.navigate('404', true);
                        generate_alert(true,"Access denied. You dont have permissions to view logs.");
                        return false;
                    } else {
                    generate_alert(false,$.parseJSON(response.responseText).message);
                    return false;
                    }
                }
            })
           
        },
        loadPlugins: function(){
            close_sidebar();  
            $('#dynamic-table').dataTable(
            );
            this.$("#available_on").select2({
                placeholder:"Avaliable on"
            });


        },
        events: {
             'click .push_menu': 'push_menu',
        },

        push_menu: function(e){
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
                    that.render({
                        success: true,
                        message: "Updated menu pushed successfully."
                    });
                },
                error: function(response,status,error){
                    stop_loading();
                    generate_alert(false,$.parseJSON(response.responseText).message);
                    setTimeout(function(){$(e.currentTarget).removeProp("disabled");},10000);
                }
            });
        }
    });

});