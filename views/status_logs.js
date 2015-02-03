define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    var StatusLogsView = Backbone.View.extend({

        el: '#status_logs',
        template: JST['app/scripts/templates/status_logs.ejs'],

        initialize: function () {
        },

        render: function (options) {
            var that = this;
            that.options = options;
            
            var status_logs_collection = new dataEntryClient.Collections.StatusLogsCollection({id:options.id});
            status_logs_collection.fetch({
                success: function(data){
                    //console.log(data.models);
                    var temp = that.template({
                        status_logs: data.models
                    });
                    that.$el.html(temp);
                    that.loadPlugins(options);
                },
                error: function(data, response, error){
                    stop_loading();
                    generate_alert(false, $.parseJSON(response.responseText).message);
                }
            });
            
        },
        loadPlugins: function(options){
            var that = this;
            $('#myTab a').click(function (e) {
              e.preventDefault();
              $(this).tab('show');
            });
            $(".js_cancel_schedule").click(function(){
                start_loading();
                // var id = $("#schedule_id").val();
                var id = $(this).attr("data-id") ;
                console.log(id);
                $.ajax({
                    type: 'put',
                    url: 'restaurants/'+id+'/cancel_scheduled_update',
                    data: {id:id},
                    success: function(){
                        stop_loading();
                        that.render({id:options.id});
                    },
                    error: function(response, status, error){
                        stop_loading();
                        generate_alert(false, $.parseJSON(response.responseText).message);
                    }
                });
            });
        },
        events: {
            
        },
        save_changes: function(e){
            
        }

    });
    return StatusLogsView;
});