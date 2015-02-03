define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.DeliveryAreaView = Backbone.View.extend({  // View to display logs 

        el: '#page',
        template: JST['app/scripts/templates/delivery_area.ejs'],

        initialize: function () {
          window.delivery_area_map = [];
          window.delivery_area_values = {};
            
        },
        render: function(options) {
          var that = this;
          that.options = options;
          if (options.id) {
            dataEntryClient.restaurant_id = options.id;
            global_observer.trigger("header_changed", {'restaurant_id' : options.id, 'active_tab' : 'profile'});
            that.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id});
            if (!that.restaurant.get("form_id")){
              that.restaurant.fetch({async:false});
            }
            that.deliveryAreas = new dataEntryClient.Collections.DeliveryareaCollection({id: options.id});
            that.deliveryAreas.url += "/" + options.id;
            start_loading();
            that.deliveryAreas.fetch({
              success: function(data,response) {
                that.operational_timings = response.meta.timings;
                var tags = {};
                var group_map = {};
                $.each(data.models, function(i, d) { 
                  var gid = d.get("locality_group_id_delivery_type").locality_group_id;
                  var key = d.get("key");
                  delivery_area_map[i] = { "group_id" : gid };
                  delivery_area_values[key] = {};
                  delivery_area_values[key].min_delivery_amount = d.get("min_delivery_amount");
                  delivery_area_values[key].rush_hour_delivery_time = d.get("rush_hour_delivery_time");
                  delivery_area_values[key].delivery_time = d.get("delivery_time");
                  delivery_area_values[key].delivery_charges = d.get("delivery_charges");
                  delivery_area_values[key].delivery_type = d.get("locality_group_id_delivery_type").delivery_type;
                  delivery_area_values[key].locality_group_id = d.get("locality_group_id_delivery_type").locality_group_id;
                  delivery_area_values['index_' + i] = key;
                  group_map[gid] = "selected";
                  $.each(window.collections.groups, function(j, group) {
                   if (gid == group.id) {
                     delivery_area_map[i].group_name = group.name;
                     delivery_area_map[i].locality_id = group.locality_id;
                     if (tags[group.locality_id] == undefined) {
                       tags[group.locality_id] = 1;
                     } else {
                       tags[group.locality_id] += 1;
                     }
                   }
                  }) 
                }) 
                var template = that.template({
                  restaurant: that.restaurant,
                  deliveryAreas: data.models,
                  collections: window.collections,
                  sidebar_active_tab: "delivery_area",
                  tags: tags,
                  total: 0,
                  group_map: group_map
                });
                that.$el.html(template);
                compile_sidebar({
                  id: that.restaurant.get("id"),
                  sidebar_active_tab: "delivery_area"
                });

                that.topNavigation=new dataEntryClient.Views.RestaurantTopNavigationView();
                that.topNavigation.render(that.restaurant,response.meta.menu_stash);
                
                stop_loading();
                that.loadPlugins();
                if (that.options.success) {
                  generate_alert(true, "Saved Successfully.");
                }
                return that;
              },
              error: function(data, response, error){
                stop_loading();
                generate_alert(false, $.parseJSON(response.responseText).message);
              }
            });
      }
    },
    loadPlugins: function() {
      this.$(".locality_select").select2({});
      this.$(".locality_select").select2("enable",false)
      this.$(".delivery_type_select").prop('disabled', true);
      this.$("#locality_filter").select2({});
      this.$(".timing_start_input").timepicker({'timeFormat': 'H:i'});
      this.$(".timing_end_input").timepicker({'timeFormat': 'H:i'});

      this.$("#clear_filter").click(function(){
        $("#locality_filter").select2("val", "");
        var existing_delivery_areas = $(".delivery_area");

        $("#locality_filter").select2("val", "");
        var existing_delivery_areas = $(".delivery_area");
        $.each(existing_delivery_areas, function(i, existing_delivery_area) {
          if (delivery_area_map[i] == "undefined") {
            $("[name='delete_" + i + "']").val("true");
            delivery_area_map[i] = "deleted";
            $(this).hide();
          } else if (delivery_area_map[i] != "deleted") {
            $(this).show(600);
            $('#add_timing_' + i).show();
            var timing_count = parseInt($('#timing_count_' + i).val());
            for (var j = 0; j < timing_count; j++) {
              var row = $('#timing_row_' + i + '_' + j);
              if (row != undefined) {
                row.show();
              }
            }
          }
        });
      });
      this.$("#locality_filter").on("change", function(e){
        $("tr[data-locality='']").remove();
        var filter_locality = $(this).val();
        var existing_delivery_areas = $(".delivery_area");
        $(".delivery_area").hide(600);
        $.each(existing_delivery_areas, function(i, existing_delivery_area) {
          var parent_locality_id = get_parent_locality_id(existing_delivery_area.dataset.locality);
          if ((filter_locality == parent_locality_id) && (delivery_area_map[i] != "deleted")) {
            $(this).show(1000);
          } else {
            $('#add_timing_' + i).hide();
            var timing_count = parseInt($('#timing_count_' + i).val());
            for (var j = 0; j < timing_count; j++) {
              var row = $('#timing_row_' + i + '_' + j);
              if (row != undefined) {
                row.hide();
              }
            }
          }
        });
      })

      $('.preview_locality_group').removeAttr('disabled');
    },
    
    events: {
      "click .delete" : "delete",
      'click .add_delivery_area': 'add_delivery_area',
      'click #save_changes_locality': 'save_changes',
      'change .locality_select' : 'new_tag',
      'click .add_timing': 'add_timing',
      'click .delete_timing': 'delete_timing'
    },

    new_tag: function(e) {
      
      e.preventDefault();
      var currentEl = $(e.currentTarget);
      var index = parseInt(currentEl[0].id.split("_")[2]);
      // selects
      var option = "";
      var prev_g = delivery_area_map[index];
      var curr_g = _.filter(window.collections.groups, function(g) { if (g.id == parseInt(currentEl.val())) { return g }})[0];
      
      currentEl.parent().parent()[0].dataset.locality = curr_g.id;
      // tags
      if (prev_g.locality_id != curr_g.locality_id) {
        var selected_l = $("#selected_locality_" + curr_g.locality_id);
        var selected_b = $("#selected_badge_" + curr_g.locality_id);
        var total = $("#total_badge");
        
        if (prev_g != "undefined") {
          var previous_l = $("#selected_locality_" + prev_g.locality_id);
          var previous_b = $("#selected_badge_" + prev_g.locality_id);
          
          if (parseInt(previous_b.html()) == 1) {
            previous_b.remove();
            previous_l.remove();
          } else {
            previous_b.html(parseInt(previous_b.html()) - 1);
          }
          total.html(parseInt(total.html()) - 1);
        }

        if (selected_l.length != 0) {
          selected_b.html(parseInt(selected_b.html()) + 1);
        } else {
          // create
          var tag = document.createElement("span");
          $(tag).addClass("label label-primary");
          $(tag).css("background", "#1fb5ad");
          $(tag).css("margin-right", "2px");
          tag.id = "selected_locality_" + curr_g.locality_id;

          var element = document.getElementById("locality_tags");
          element.appendChild(tag);

          $("#selected_locality_" + curr_g.locality_id).html(curr_g.name.split(",")[1] + ": " + '<span class="badge" id="selected_badge_' + curr_g.locality_id + '" style="background: #1fb5ad; padding-top: 2px; margin-left: 2px;">' + 1 + '</span>').show();
        }

        total.html(parseInt(total.html()) + 1);
      }

      if (prev_g != "undefined") {
        option = ('<option value="' + prev_g.group_id + '">' + prev_g.group_name + '</option>');
      }

      delivery_area_map[index] = { "group_id" : curr_g.id };
      delivery_area_map[index].locality_id = curr_g.locality_id;
      delivery_area_map[index].group_name = curr_g.name;
    },

    save_changes: function(e) {
      e.preventDefault();
      var that = this;
      start_loading();
      var raw_obj = $(".form-horizontal").serializeObject();
      var deliveryAreaModel = new dataEntryClient.Models.DeliveryareaModel();
      var deliveryAreas = deliveryAreaModel.buildObj(raw_obj);

      // var live_delivery_areas = _.filter(deliveryAreas, function (deliveryArea) { return deliveryArea.id != undefined })
      var live_delivery_areas = _.filter(deliveryAreas, function (deliveryArea) { return deliveryArea.to_delete != "true" })
      // var changed_areas = [];

      if (deliveryAreas.length == 0) {
        generate_alert(false, 'Nothing to save');
        stop_loading();
        return false;
      }
      
      if (!this.check_empty_locality(deliveryAreas)) {
        generate_alert(false, 'Locality cannot be left blank');
        stop_loading();
        return false;
      }

      if (!this.check_empty_timings(live_delivery_areas)) {
        generate_alert(false, 'Timings cannot be left blank');
        stop_loading();
        return false;
      }

      if (!this.check_empty_start_end(live_delivery_areas)) {
        generate_alert(false, 'Start timing and end timing cannot be left blank');
        stop_loading();
        return false;
      }

      if (!this.check_duplicate_entries(live_delivery_areas)) {
        generate_alert(false, 'Overlapping timings for same delivery type and same locality is not allowed.');
        stop_loading();
        return false;
      }

      // check if timing is subset of OPERATIONAL
      var subset_operational = this.is_subset_operational(live_delivery_areas);
      if (!subset_operational['status']){
        stop_loading();
        generate_alert(false,subset_operational['message']);
        return false;
      }

      var data = {
        "delivery_areas": deliveryAreas,
        "id": raw_obj.id
      };

      deliveryAreaModel.save(data, {
        type: 'put',
        success: function(data) {
          stop_loading();
          that.render({
            id: data.id,
            success: true
          });
        },
        error: function(data, response,error){
          stop_loading();
          var message = $.parseJSON(response.responseText).message?$.parseJSON(response.responseText).message:"Failed to save/ Incomplete information";
          generate_alert(false,$.parseJSON(response.responseText).message);
          return false;
        }
      });
    },

    add_delivery_area: function(e) {
      e.preventDefault();
      var count = $('[name="delivery_area_count"]');
      var i = count.val();
      var data = {
        id: "new"
      };
      var group_map = {};
      
      $.each(delivery_area_map, function(j, d) {
        if (typeof(d) == "object") {
          group_map[d.group_id] = false;
        }
      });
      
      /* Locality filter */
      var loc = [];
      if ($("#locality_filter").val() != ""){
        $.each(window.collections.groups, function(i,l){
          if ((l.locality_id == $("#locality_filter").val())) {
            loc.push(l);
          }
        });
      } else {
        $.each(window.collections.groups, function(i, g) {
            loc.push(g);
        });
      }

      delivery_area_map[parseInt(i)] = "undefined";
      var new_area=new Backbone.Model(data)
      var html = partial("partials_deliveryArea", {
        i: i,
        deliveryArea: new_area,
        localities: loc
      });

      count.val(parseInt(i) + 1);
      $('.delivery_area_table tr:last').after(html);
      $("#locality_id_" + i).select2({});
      $("#time_select_" + i).select2({});
    },
    
    delete: function(e) {
      e.preventDefault();
      var currentEl = $(e.currentTarget);
      var index = currentEl.data("index");
      var group = delivery_area_map[currentEl.data("index")];
      var hiddenEl = $("[name='delete_" + currentEl.data("index") + "']");
      
      if (hiddenEl.val() == "false") {
        hiddenEl.val("true");
        hiddenEl.parent().parent().hide();
      }
      if (group != "undefined") {
        var option = ('<option value="' + group.group_id + '">' + group.group_name + '</option>');
        var tag = $("#selected_locality_" + group.locality_id);
        var badge = $("#selected_badge_" + group.locality_id);
        var total = $("#total_badge");

        for (var i = 0; i < delivery_area_map.length; i++) {
          if (i != index) {
            $("#locality_id_" + i).append(option);
          }
        };

        if (badge.html() == 1) {
          tag.remove();
        } else {
          badge.html(parseInt(badge.html()) - 1);
        }

        total.html(parseInt(total.html()) - 1);
      }
      delivery_area_map[index] = "deleted";

      // removing timing rows
      $('#add_timing_' + index).remove();
      var timing_count = parseInt($('#timing_count_' + index).val());
      for (var j = 0; j < timing_count; j++) {
        var row = $('#timing_row_' + index + '_' + j);
        if (row != undefined) {
          row.remove();
        }
      }
    },

    check_empty_locality: function(deliveryAreas) {
      var locations = _.pluck(deliveryAreas, 'locality_group_id');
      if(_.contains(locations,"")){
        return false;
      }
      return true;
    },

    check_empty_timings: function(deliveryAreas) {
      var is_success = true
      var timings = _.pluck(deliveryAreas, 'timings');
      _.each(timings,function(timing){
        if(timing.length == 0){
          is_success = false;
          return false;
        }
      })
      return is_success;
    },

    check_empty_start_end: function(deliveryAreas) {
      var is_success = true
      _.each(deliveryAreas,function(area){
        _.each(area.timings,function(time){
          if(time.start == "" || time.end == ""){
            is_success = false;
            return false;
          }
        })
      })
      return is_success;
    },

    check_duplicate_entries: function(deliveryAreas) {
      var is_success = true
      var that = this;
      var uniq_obj = [];
      var grouped = _.groupBy(deliveryAreas, 'locality_group_id');

      _.each(Object.keys(grouped), function (key) { 
        uniq_obj.push(_.groupBy(grouped[key], 'delivery_type')) 
      });

      _.each(uniq_obj, function (obj) {
        var timings = _.flatten(_.pluck(obj[1], 'timings'));
        var is_overlapping = that.validate_overlap(timings)
        if(is_overlapping){
          is_success = false;
          return false;
        }
       
        var timings = _.flatten(_.pluck(obj[2], 'timings'));
        var is_overlapping = that.validate_overlap(timings)
        if(is_overlapping){
          is_success = false;
          return false;
        }
      });
      return is_success;
    },

    add_timing: function (e) {
      e.preventDefault();
      var i = e.currentTarget.dataset.index;
      var timing_count = parseInt($('#timing_count_' + i).val());

      var html = partial("partials_delivery_timings", {
        i: i,
        j: timing_count,
        id: "new_" + i + '_' + timing_count,
        start_time: "",
        end_time: ""
      });

      $('#add_timing_' + i).before(html);
      $('#timing_count_' + i).val(timing_count + 1);
      this.bind_to_timing_plugin(i, timing_count);
    },

    delete_timing: function (e) {
      e.preventDefault();
      var index = e.currentTarget.dataset.index;
      $('#timing_row_' + index).remove();
    },

    validate_overlap: function (timings) {
      var intervals = [];
      var overlap = false;
      _.each(timings, function (timing) {
        // if start > end then split at midnight
        if (timing.start_in_secs > timing.end_in_secs) {
          intervals.push([timing.start_in_secs, 86400]);
          intervals.push([0, timing.end_in_secs]);
        } else if (timing.start_in_secs == timing.end_in_secs) {
          overlap = true;
        } else {
          intervals.push([timing.start_in_secs, timing.end_in_secs]);
        }
      })

      if (!overlap) {
        _.each(intervals, function (timing, i) {
          _.each(intervals, function (interval, j) {
            if (i != j) {
              if ((interval[0] < timing[0] && timing[0] < interval[1]) || (interval[0] < timing[1] && timing[1] < interval[1]) || (_.isEqual(timing, interval))) {
                overlap = true;
              }
            }
          })
        })
      }
      return overlap
    },

    is_subset_operational: function(deliveryAreas) {
      var is_success = true ;
      var message = "";
      var that = this;
      var operational_time = _.sortBy(that.operational_timings,'end');
      var operational_object = [];

      _.each(operational_time, function (o) {
        if (o.end < o.start) {
          o.end += 86400;
        }
        operational_object.push(o.start, o.end);
      });
      var timings = _.flatten(_.pluck(deliveryAreas, 'timings'));
      _.each(timings, function(time) {
        if (!that.is_include_timing(time.start_in_secs, time.end_in_secs, operational_object)) {
          is_success = false;
          message = "All timings should be sub set of Operational timings."
          return false;
        }
      })
      return {'status':is_success, 'message': message}
    },

    is_include_timing:function(start_time, end_time, operational_time) {
      if (end_time < start_time) {
        end_time += 86400;
      }
      var i = 0;
      var j = 0;
      var flag = false
      var length = operational_time.length;
      for(i = 0; i < length - 1; i += 2) {
        j = i + 1;
        if((start_time >= operational_time[i] && end_time <= operational_time[j]) || (start_time + 86400  >= operational_time[i] && end_time + 86400 <= operational_time[j])) {
          flag = true;
          break;
        }
      }   
      return flag;
    },

    bind_to_timing_plugin: function(i, j) {
      this.$("#timing_start_" + i + '_' + j).timepicker({'timeFormat': 'H:i'});
      this.$("#timing_end_" + i + '_' + j).timepicker({'timeFormat': 'H:i'});
    }
  });
});
