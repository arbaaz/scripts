define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.TimingView = Backbone.View.extend({

        el: '#page',
        template: JST['app/scripts/templates/timing.ejs'],
        render: function(options) {
          var that = this;
          that.options = options;
          if (options.id) {
            dataEntryClient.restaurant_id = options.id;
            global_observer.trigger("header_changed", {'restaurant_id' : options.id, 'active_tab' : 'profile'});
            that.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id});
            if(!that.restaurant.get("form_id")){
              that.restaurant.fetch({async:false});
            }
            that.timings = new dataEntryClient.Collections.TimingCollection({id: options.id});
            start_loading();
            that.timings.fetch({
              success: function(data,response) {
                //var restaurant = new Backbone.Model(options);
                var template = that.template({
                  restaurant: that.restaurant,
                  timings: data.models,
                  sidebar_active_tab: "timings"
                });
                that.$el.html(template);
                compile_sidebar({
                  id: that.restaurant.get("id"),
                  sidebar_active_tab: "timings"
                });
                
                that.topNavigation=new dataEntryClient.Views.RestaurantTopNavigationView();
                that.topNavigation.render(that.restaurant,response.meta.menu_stash);

                stop_loading();
                if (that.options.success) {
                  var alert=generate_alert(true,"Saved Successfully");
                }
                that.loadPlugins();
                return that;
              },
              error: function(data, response, error){
                stop_loading();
                var alert=generate_alert(false,$.parseJSON(response.responseText).message);
              }
            });
          }
        },
        loadPlugins: function() {
          this.$(".timing_start_input").timepicker({'timeFormat': 'H:i'});
          this.$(".timing_end_input").timepicker({'timeFormat': 'H:i'});

          this.$(".timing_type_select").prop('disabled', true);

          this.$(".timing_start_input").on('changeTime',  function(e) {
            var currentEl = $(e.currentTarget);
            var index = currentEl.data("i");
            $("#timing_end_"+ index).timepicker({'timeFormat': 'H:i', 'minTime': currentEl.val()});
          });
          initialize_sidebars();
        },
        bind_to_timing_plugin: function(i) {
          this.$("#timing_start_" + i).timepicker({'timeFormat': 'H:i'});
          this.$("#timing_end_" + i).timepicker({'timeFormat': 'H:i'});

          this.$("#timing_start_" + i).on('changeTime',  function(e) {
            var currentEl = $(e.currentTarget);
            var index = currentEl.data("i");
            $("#timing_end_"+ index).timepicker({
              'timeFormat': 'H:i',
              'minTime': currentEl.val()
            });
          });
        },
        events: {
          'click .delete_timing': 'delete_timing',
          'submit #timing_form': 'save_changes',
          'click .add_timing': 'add_timing'
        },
        save_changes: function(e) {
          e.preventDefault();
          
          var raw_obj = $(".form-inline").serializeObject();
          var timingModel = dataEntryClient.Models.TimingModel.findOrCreate({"id" : raw_obj.id});
          var timings = timingModel.buildObj(raw_obj);
          if(!timings)return false
          var timings_list =  _.pluck(timings.timings,'name')
          var unique_timings_list = _.uniq(timings_list)

          if(timings.timings.length != 0){
            start_loading();
            if(timings_list.length != unique_timings_list.length){
              stop_loading();
              generate_alert(false,"Timings cannot have same name");
              return false;
            }

            // checking overlapping timings
            var default_timings = timings.timings.filter(function(timing) { return parseInt(timing.timing_type) == window.collections.timing_type.DEFAULT });
            var dish_timings = timings.timings.filter(function(timing) { return parseInt(timing.timing_type) == window.collections.timing_type.DISHES });
            var operational_timings = timings.timings.filter(function(timing) { return parseInt(timing.timing_type) == window.collections.timing_type.OPERATIONAL });
            
            if (timingModel.validate_overlap(default_timings)) {
              stop_loading();
              generate_alert(false, "Overlapping timings for DEFAULT type");
              return false;
            } else if (timingModel.validate_overlap(dish_timings)) {
              stop_loading();
              generate_alert(false, "Overlapping timings for DISH type");
              return false;
            } else if (timingModel.validate_overlap(operational_timings)) {
              stop_loading();
              generate_alert(false, "Overlapping timings for OPERATIONAL type");
              return false;
            } 
            //check if timing is subset of OPERATIONAL
            var subset_operational = this.is_subset_operational(timings.timings)
            if(!subset_operational['status']){
              stop_loading();
              generate_alert(false,subset_operational['message']);
              return false;
            }


            $("html, body").animate({ scrollTop: 0 }, "fast");
            var that = this;
            timingModel.save(timings, {
              success: function(data) {
                stop_loading();
                that.render({
                  id: data.id,
                  success: true
                });
              },
              error: function(data, response, error){
                stop_loading();
                generate_alert(false,$.parseJSON(response.responseText).message, 'right');
              }
            });
          }
        },

        is_subset_operational: function(timing_obj){
          var is_success = true ;
          var message = "";
          var that=this;
          var operational_time = _.sortBy(_.where(timing_obj,{'timing_type' : window.collections.timing_type.OPERATIONAL}),'end_in_secs')
          var operational_object = []
          _.each(operational_time,function(o){
            if(o.end_in_secs < o.start_in_secs){o.end_in_secs+= 86400}
            operational_object.push(o.start_in_secs,o.end_in_secs)
          })
            
          if(operational_object.length != _.uniq(operational_object).length){
            is_success = false;
            message = "No need to break Operational timing since entered timings are continous."
            return {'status':is_success, 'message': message}
          } 
          
          var default_object = _.where(timing_obj,{'timing_type':window.collections.timing_type.DEFAULT})
          _.each(default_object,function(default_time){
            if(!that.is_include_timing(default_time.start_in_secs,default_time.end_in_secs, operational_object)){
              is_success = false;
              message = "Default timings should be sub set of Operational timings."
              return false;
            }
          })
          if(!is_success)
            return {'status':is_success, 'message': message}
          //checking if dishes timings are subset of operational
          var dishes_object = _.where(timing_obj,{'timing_type':window.collections.timing_type.DISHES})
          _.each(dishes_object,function(dishes_time){
            if(!that.is_include_timing(dishes_time.start_in_secs,dishes_time.end_in_secs, operational_object)){
              is_success = false;
              message = "Dishes timings should be sub set of Operational timings."
              return false;
            }
          })
          return {'status':is_success, 'message': message}
        },

        is_include_timing:function(start_time,end_time,operational_time){
          if(end_time < start_time){ end_time += 86400 }
          var i = 0;
          var j = 0;
          var flag = false
          var length = operational_time.length
          for(i = 0;i < length-1;i += 2){
            j = i+1
            if((start_time >= operational_time[i] && end_time <= operational_time[j]) || (start_time + 86400  >= operational_time[i] && end_time + 86400 <= operational_time[j])){
              flag = true;
              break;
            }
          }
          return flag;

        },
        is_overlapping_operational: function(id){
          var that = this ;
          var is_overlapping = false;
          var raw_obj = $(".form-inline").serializeObject();
          var timingModel = dataEntryClient.Models.TimingModel.findOrCreate({"id" : raw_obj.id});
          var timings = timingModel.buildObj(raw_obj);
          if(!timings)return false
          var timing = _.where(timings.timings,{'id':id})
          var operational_object = []
          if(timing[0].end_in_secs < timing[0].start_in_secs){timing[0].end_in_secs+= 86400}
          operational_object.push(timing[0].start_in_secs,timing[0].end_in_secs)
          var remaining_timings = _.reject(timings.timings, function(time){ return time.timing_type == window.collections.timing_type.OPERATIONAL });
          _.each(remaining_timings,function(t){
            if(that.is_include_timing(t.start_in_secs,t.end_in_secs, operational_object)){
              is_overlapping = true;
              return false;
            }
          })
          return is_overlapping;

        },
        delete_timing: function(e) {
          start_loading();
          e.preventDefault();
          var that = this;
          var currentEl = $(e.currentTarget);
          var hiddenEl = $("[name='delete_" + currentEl.data("index") + "']");
          var id = $("[name='timing_" + currentEl.data("index") + "']").val();
          var restaurant_id = $("#restaurant_id").val();
          if (id == "new") {
            stop_loading();
            hiddenEl.val("true");
            hiddenEl.parent().remove();
          } else if (id != "") {
              if(parseInt(e.currentTarget.dataset.type) == window.collections.timing_type.OPERATIONAL){
                var overlapping_operational = this.is_overlapping_operational(id)
                if(overlapping_operational){
                  stop_loading();
                  generate_alert(false,"Timing cannot be deleted since other timings are its sub-sets");
                  return false;
                }
              }
              $.ajax({
                type: 'put',
                data: {timing_id: id},
                url: '/timings/delete/'+restaurant_id,
                success: function(data){
                  stop_loading();
                  that.render({
                    id: restaurant_id
                  });
                },
                error: function(response, status, error){
                  stop_loading();
                  generate_alert(false,$.parseJSON(response.responseText).message);
                  return false;
                }
              });
            };
        },
        add_timing: function(e) {
          e.preventDefault();
          var currentEl = $(e.currentTarget);
          var count = $('[name="timing_count"]');
          var i = count.val();
          var data = {
            id: "new",
            name: ""
          };
          var html = partial("partials_timing", {
            i: i,
            timing: new Backbone.Model(data),
          });
          $('#timing-table').append(html);

          count.val(parseInt(i) + 1);
          // currentEl.before(html);
          // bind the timing to plugin
          this.bind_to_timing_plugin(i);
          
        }

    });

});