define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    var AndroidReleasesView = Backbone.View.extend({  // View to display promotions 

        el: '#page',
        template: JST['app/scripts/templates/releases.ejs'],

        initialize: function () {
        },

        render: function (options) {
            this.releases = new dataEntryClient.Collections.AndroidReleaseCollection();
            var that = this;  
            that.options = options;  
            global_observer.trigger("header_changed", {'active_tab' : null});                    
            start_loading();

            this.releases.fetch({
                skip_url_prefix : true,
                success: function(data, colllection){  
                    var temp = that.template({
                        releases: data.models,
                        releaseType: "android"
                    });
                    that.$el.html(temp);
                    stop_loading();               
                    that.loadPlugins();                                                                        
                },
                error: function(data, response, error){
                    stop_loading();
                    generate_alert(false,$.parseJSON(response.responseText).message);
                }
            })
            
        },
        loadPlugins: function(){
            close_sidebar();   
        },
        events: {
          "click .delete":"delete"
        },
        delete:function(e){ // delete a release
            e.preventDefault();
            start_loading();
            var that = this;
            var id = e.currentTarget.id;
            $.ajax({
                skip_url_prefix :true,
                url: "/user/admin/android_releases/"+id, 
                type:"DELETE",
                data: {
                    id: id
                },
                dataType: "json",
                success: function(data) {
                    that.render();
                    generate_alert(true,"Android release was deleted successfully.");
                    return true;
                },
                error: function(response, status, error) {
                    stop_loading();
                    return false;
                }
            });
            return true;
        }

    });
    return AndroidReleasesView;
});