define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Views.DeliveryAreaView = Backbone.View.extend({


    initialize: function(options) {
      this.options = options;
      window.map = null;
      window.polygons = null;
      window.polygons_not_shown = null;
      window.restaurant_coordinates = null;
      window.delivery_time_mapping = null;
      window.min_delivery_amount_mapping = null;
      window.initialize_maps = this.initialize_maps;
      window.map_polygons = [];
      window.markers = [];
      window.delivery_area_map = [];
      window.delivery_area_values = {};
    },
    el: '#page',
    template: JST['app/scripts/templates/deliveryArea.ejs'],
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
        that.deliveryAreas = new dataEntryClient.Collections.DeliveryareaCollection({id: options.id});
        that.deliveryAreas.url += "/" + options.id;
        start_loading();
        that.deliveryAreas.fetch({
          success: function(data,response) {
            //console.log(data);
            //var restaurant = new Backbone.Model(options);
            var tags = {};
            var group_map = {};
            $.each(data.models, function(i, d) { 
              var gid = d.get("locality_group_id");
              delivery_area_map[i] = { "group_id" : gid };
              delivery_area_values[gid] = {};
              delivery_area_values[gid].min_delivery_amount = d.get("min_delivery_amount");
              delivery_area_values[gid].rush_hour_delivery_time = d.get("rush_hour_delivery_time");
              delivery_area_values[gid].delivery_time = d.get("delivery_time");
              delivery_area_values[gid].delivery_charges = d.get("delivery_charges");
              delivery_area_values['index_' + i] = gid.toString();
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

          
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            // do nothing
             }  
            else{
            _.defer(function(){
              window.delivery_time_mapping = [];
              window.min_delivery_amount_mapping = [];
              _.each(data.models, function(delivery_area){
                window.delivery_time_mapping.push({
                  id: delivery_area.get("locality_group_id"),
                  delivery_time: delivery_area.get("delivery_time")/60
                });

                window.min_delivery_amount_mapping.push({
                  id: delivery_area.get("locality_group_id"),
                  min_delivery_amount: delivery_area.get("min_delivery_amount")
                });
              });
            });

            _.defer(function(){
              that.fetch_polygons(function(map_object){
                window.polygons = map_object.polygons; //temporarily storing it globally
                window.restaurant_coordinates = map_object.restaurant_coordinates;
                window.polygons_not_shown = map_object.polygons_not_shown;
                that.load_maps_api();
              });
            });
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
      $('#map-canvas').hide();
      var that = this;
      this.$(".locality_select").select2({
        width: "100%"
      });
      this.$("#locality_filter").select2({
        width: "100%"
      });
      initialize_sidebars();
      /*this.$("#lock").click(function(){
        $("#locality_filter").prop("disabled","disabled");
      });
      this.$("#unlock").click(function(){
        $("#locality_filter").prop("disabled","");
      });*/
      this.$("#clear_filter").click(function(){
        $("#locality_filter").select2("val", "");
        var existing_delivery_areas = $(".delivery_area");
        $.each(existing_delivery_areas, function(i, existing_delivery_area) {
          if (delivery_area_map[i] == "undefined") {
            $("[name='delete_" + i + "']").val("true");
            delivery_area_map[i] = "deleted";
            $(this).hide();
          } else if (delivery_area_map[i] != "deleted") {
            $(this).show(600);
          }
        });
        // $(".delivery_area").show(600);
      });
      this.$("#locality_filter").on("change", function(){
        var filter_locality = $(this).val();
        var existing_delivery_areas = $(".delivery_area");
        $(".delivery_area").hide(600);
        $.each(existing_delivery_areas, function(i, existing_delivery_area){
          var parent_locality_id = get_parent_locality_id(existing_delivery_area.dataset.locality);
          if ((filter_locality == parent_locality_id) && (delivery_area_map[i] != "deleted")) {
            $(this).show(1000);
          }
        });
      })
    },
    events: {
      'click .delete_this_locality': 'delete_this_locality',
      'click #save_changes_locality': 'save_changes_locality',
      // 'submit #delivery_area_form': 'save_changes_locality',
      'click .add_delivery_area': 'add_delivery_area',
      'click .preview_locality_group': 'load_map_preview',
      'click #close_locality_group_preview': 'close_map_preview',
      'click #delivery_time': 'sort_delivery_time',
      'click #minimum_order': 'sort_minimum_order',
      'click #normal_view': 'back_to_normal_view',
      'click .show_all' : 'show_hide_all_polygons',
      'click .add-single-locality-btn' : 'show_locality_options',
      'click #add-btn' : 'add_single_locality',
      'change .locality_select' : 'new_tag'
    },

    back_to_normal_view:function(){
      _.each(window.polygons,function(polygon){
        var stroke_color = get_random_color();
        window.map_polygons[polygon.get('id')].setOptions({strokeColor : stroke_color,strokeOpacity : 0.9,strokeWeight  : 3,fillOpacity : 0.3,zIndex : 1000, fillColor : stroke_color});
      });
      $('#normal_view').addClass('hidden');
    },

    sort_delivery_time:function(){
      $('#normal_view').removeClass('hidden');
      this.display_heat_map(window.delivery_time_mapping, "delivery_time");
    },

    sort_minimum_order:function(){
      $('#normal_view').removeClass('hidden');
      this.display_heat_map(window.min_delivery_amount_mapping ,"min_delivery_amount");
    },   

    display_heat_map:function(min_del_amt_mapping, category)
    {


      var sorted_minimum_amount = _.sortBy(min_del_amt_mapping,function(da){return da[category];});
      var unique =1;
      for(var i=1;i<sorted_minimum_amount.length;i++)
      {
        if(sorted_minimum_amount[i][category] != sorted_minimum_amount[i-1][category])unique++;
      }
      var color_slots = this.get_colors(unique);
      var slot = 0;var i=0;
      for(i=0;i<sorted_minimum_amount.length-1;i++)
      {
        window.map_polygons[sorted_minimum_amount[i].id].setOptions({strokeColor : color_slots[slot],strokeOpacity : 0.9,strokeWeight  : 3,fillOpacity : 0.3,zIndex : 1000, fillColor : color_slots[slot]});
        if(sorted_minimum_amount[i][category] != sorted_minimum_amount[i+1][category])
          slot++;
      }
      window.map_polygons[sorted_minimum_amount[i].id].setOptions({strokeColor : color_slots[slot],strokeOpacity : 0.9,strokeWeight  : 3,fillOpacity : 0.3,zIndex : 1000, fillColor : color_slots[slot]});

    },

    get_colors:function(slots){
      var colors = {"7":["#026320","#127C04","#539507","#A6AE09","#C6810D","#E03C10","#F91544"],
                    "6":["#026320","#1C8104","#719F07","#BC990B","#DB4C0F","#F91543"],
                    "5":["#026320","#2E8804","#A5AE09","#D3610E","#F91543"],
                    "4":["#026320","#519506","#C6820C","#F91543"],
                    "3":["#026320","#A5AE09","#F91543"],
                    "2":["#026320","#F91543"],
                    "1":["#026320"]};
      return colors[slots];
    },

    delete_this_locality: function(e) {
      e.preventDefault();
      var currentEl = $(e.currentTarget);
      var hiddenEl = $("[name='delete_" + currentEl.data("index") + "']");
      var group = delivery_area_map[currentEl.data("index")];

      if (hiddenEl.val() == "false") {
        hiddenEl.val("true");
        hiddenEl.parent().parent().hide();
      }
      $("#locality_filter").prop("disabled","");

      if (group != "undefined") {
        var option = ('<option value="' + group.group_id + '">' + group.group_name + '</option>');
        var tag = $("#selected_locality_" + group.locality_id);
        var badge = $("#selected_badge_" + group.locality_id);
        var total = $("#total_badge");

        for (var i = 0; i < delivery_area_map.length; i++) {
          if (i != currentEl.data("index")) {
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
      delivery_area_map[currentEl.data("index")] = "deleted";
    },

    save_changes_locality: function(e) {
      start_loading();
      e.preventDefault();
      var raw_obj = $(".form-horizontal").serializeObject();
      var deliveryAreaModel = new dataEntryClient.Models.DeliveryareaModel();
      var deliveryAreas = deliveryAreaModel.buildObj(raw_obj);
      var changed_areas = [];
      var that = this;

      deliveryAreaModel.url += "/" + raw_obj.id;

      $.each(deliveryAreas, function (i, d) {
        var value_obj = delivery_area_values[d.locality_group_id];
        if (d.locality_group_id != "") {
          if (d.to_delete != "true") {
            if (value_obj != undefined) {
              if ((value_obj.min_delivery_amount != d.min_delivery_amount) ||
                (value_obj.rush_hour_delivery_time != d.rush_hour_delivery_time) ||
                (value_obj.delivery_time != d.delivery_time) ||
                (value_obj.delivery_charges != d.delivery_charges)) {
                changed_areas.push(d);
              }
            } else if (d.id == "new") {
              changed_areas.push(d);
            } else {
              var prev_a = JSON.parse(JSON.stringify(d));
              prev_a.locality_group_id = delivery_area_values['index_' + i];
              prev_a.to_delete = "true";
              changed_areas.push(prev_a);
              changed_areas.push(d);
              //delivery_area_values['index_' + i] = d.locality_group_id;
              delete delivery_area_values[prev_a.locality_group_id];
            }
          } else if (d.id == "") {
            delete delivery_area_values[d.locality_group_id];
            changed_areas.push(d);
          }
        }
      });

      var data = {
        "delivery_areas": changed_areas,
        "id": raw_obj.id
      };
      // $("html, body").animate({ scrollTop: 0 }, "fast");
      // var empty_locality = false;
      // var duplicate_locality = false;
      // var temp = [];
      // for (var i = 0; i < raw_obj.delivery_area_count; i++) {
      //   if (deliveryAreas[i].locality_group_id == "" && deliveryAreas[i].to_delete == "false") {
      //     empty_locality = true;
      //   }
      //   if (deliveryAreas[i].to_delete == "false") {
      //     temp.push(deliveryAreas[i].locality_group_id);
      //   }
      // }
      // for (var i = 0; i < temp.length; i++) {
      //   if (_.indexOf(temp,temp[i]) != _.lastIndexOf(temp, temp[i])){
      //     duplicate_locality = true;
      //   }
      // }
      $("html, body").animate({ scrollTop: 0 }, "fast");
      if (changed_areas.length != 0) {
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
      } else {
        stop_loading();
        generate_alert(false,"No changes to save");
      }
    },

    add_delivery_area: function(e) {
      e.preventDefault();
      var currentEl = $(e.currentTarget);
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
          if ((l.locality_id == $("#locality_filter").val()) && (group_map[l.id] != false)) {
            loc.push(l);
          }
        });
      } else {
        $.each(window.collections.groups, function(i, g) {
          if (group_map[g.id] != false) {
            loc.push(g);
          }
        });
      }

      delivery_area_map[parseInt(i)] = "undefined";
      var html = partial("partials_deliveryArea", {
        i: i,
        deliveryArea: new Backbone.Model(data),
        localities: loc,
        group_map: {}
      });

      count.val(parseInt(i) + 1);
      // currentEl.before(html);
      $('.delivery_area_table tr:last').after(html);
        $("#locality_id_" + i).select2({
          width: "100%"
      });
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

      for (var i = 0; i < delivery_area_map.length; i++) {
        if (i != index) {
          if (option != "") {
            $("#locality_id_" + i).append(option);
          }
          $("#locality_id_" + i + " option[value='" + curr_g.id + "']").remove();
        }
      };

      delivery_area_map[index] = { "group_id" : curr_g.id };
      delivery_area_map[index].locality_id = curr_g.locality_id;
      delivery_area_map[index].group_name = curr_g.name;
    },

    fetch_polygons: function(callback){
      var that = this;
      this.delivery_area_polygons = new dataEntryClient.Collections.DeliveryAreaPolygonsCollection({id: this.options.id});
      this.delivery_area_polygons.fetch({
        success: function(data, collection){
          callback({polygons:data.models,restaurant_coordinates:data.restaurant_coordinates,polygons_not_shown: collection.payload.groups_not_shown});
        },
        error: function(data, response, error){
          generate_alert(false,"Error loading the map view. Please try again later");
          return false;
        }
      });
    },

    load_map_preview: function(e){
      e.preventDefault();
      var currentEl = $(e.currentTarget);
      $("#delivery_area_list").addClass("hidden");
      //$("#map_loader").removeClass("hidden");
      $("#map_loader").css({opacity: 1, zoom: 1},0);
      $('#map-canvas').show();
      google.maps.event.trigger(map, "resize");
    },

    close_map_preview: function(e){
      e.preventDefault();
      var currentEl = $(e.currentTarget);
      $("#delivery_area_list").removeClass("hidden");
      //$("#map_loader").addClass("hidden");
      $("#map_loader").css({opacity: 0, zoom: 0},0);
       $('#map-canvas').hide();
    },

    initialize_maps: function(){
      var map_center = [];
      if (window.restaurant_coordinates[0] == 0 || window.restaurant_coordinates[0] == null) {
        map_center = new google.maps.LatLng(19.1154315,72.8822285);
      }else {
        map_center = new google.maps.LatLng(window.restaurant_coordinates[0],window.restaurant_coordinates[1]);
      }
      var map_options = {
        zoom: 13,
        panControl: true,
        center: map_center,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        minZoom: 3,
        scaleControl: true
      };

      window.map = new google.maps.Map(document.getElementById('map-canvas'),map_options);
      map_polygons = [];
      if (window.restaurant_coordinates[0] == 0 || window.restaurant_coordinates[0] == null) { }else {
        var restaurant_marker = new google.maps.Marker({
          position: new google.maps.LatLng(window.restaurant_coordinates[0],window.restaurant_coordinates[1]),
          map: window.map,
          icon: "/rest.svg",
          title: "Restaurant",
          animation: google.maps.Animation.BOUNCE,
        });
        var infowindow = new google.maps.InfoWindow({ 
          content: "Restaurant",
          size: new google.maps.Size(50,50)
        });
        google.maps.event.addListener(restaurant_marker, 'mouseover', function(e) {
          infowindow.open(window.map,restaurant_marker);
          e.stop();
        });
        google.maps.event.addListener(restaurant_marker, 'mouseout', function(e) {
          infowindow.close(window.map,restaurant_marker);
          e.stop();
        });
        google.maps.event.addListener(restaurant_marker, 'click', function(e) {
          if (restaurant_marker.getAnimation() != null) {
            restaurant_marker.setAnimation(null);
          } else {
            restaurant_marker.setAnimation(google.maps.Animation.BOUNCE);
          }
          e.stop();
        });
      }
      //concentric circles
      var firstCircleOptions = {
        strokeColor: '#3ADF00',
        strokeOpacity: 0.3,
        strokeWeight: 1,
        fillColor: '#81F781',
        fillOpacity:0.1,
        map: window.map,
        center: map_center,
        radius: 2000
      };

      var secondCircleOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.3,
        strokeWeight: 1,
        fillColor: '#F7819F',
        fillOpacity:0.1,
        map: window.map,
        center: map_center,
        radius: 4000
      };


      _.each(window.polygons, function(polygon){
        var latlongs = [];
        _.each(polygon.get("polygon"), function(coord){
          var r = new google.maps.LatLng(coord[0], coord[1]);
          latlongs.push(r);
        });
        var stroke_color = get_random_color();
        map_polygons[polygon.get("id")] = new google.maps.Polygon({
          map : window.map,
          strokeColor   : stroke_color,
          strokeOpacity : 0.9,
          strokeWeight  : 3,
          fillColor     : stroke_color,
          fillOpacity   : 0.3,
          zIndex        : 1000,
          path          : latlongs
        });
        map_polygons[polygon.get("id")].setMap(window.map);
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(polygon.get("coordinates")[0],polygon.get("coordinates")[1]),
          map: window.map,
          title: polygon.get("name"),
          animation: google.maps.Animation.DROP,
        });
        var content_string = '<div style="width:200px;" class="text-center"><p>'
                              +polygon.get("name") + "<br/>"
                              +"Delivery Time : <strong>"
                              +get_delivery_time([polygon.get("id")], window.delivery_time_mapping)
                              +" mins</strong><br/>"
                              +"Min Delivery Amount : <strong>"
                              +get_min_delivery_amount([polygon.get("id")], window.min_delivery_amount_mapping)
                              +" Rs </strong>"
                              +"</p></div>";
        var infowindow = new google.maps.InfoWindow({ 
          content: content_string
        });
        google.maps.event.addListener(marker, 'mouseover', function(e) {
          map_polygons[polygon.get("id")].setOptions({strokeColor : 'black', strokeOpacity : 1 , fillOpacity : 0.8, zIndex : 10000});
          //marker.setAnimation(google.maps.Animation.BOUNCE);
          infowindow.open(window.map,marker);
          $("#polygon_name").html("<i class='fa fa-map-marker' style='color:#fa8564'></i> "+polygon.get("name"));
          e.stop();
        });
        google.maps.event.addListener(marker, 'mouseout', function(e) {
          map_polygons[polygon.get("id")].setOptions({strokeColor : stroke_color, strokeOpacity : 0.9 , fillOpacity : 0.3, zIndex : 1000});
          //marker.setAnimation(null);
          infowindow.close(window.map,marker);
          $("#polygon_name").html("");
          e.stop();
        });

        google.maps.event.addListener(map_polygons[polygon.get("id")], 'mouseover', function(e) {
          map_polygons[polygon.get("id")].setOptions({strokeColor : 'black', strokeOpacity : 1 , fillOpacity : 0.8, zIndex : 10000});
          marker.setAnimation(google.maps.Animation.BOUNCE);
          infowindow.open(window.map,marker);
          $("#polygon_name").html("<i class='fa fa-map-marker' style='color:#fa8564'></i> "+polygon.get("name"));
          e.stop();
        });
        google.maps.event.addListener(map_polygons[polygon.get("id")], 'mouseout', function(e) {
          map_polygons[polygon.get("id")].setOptions({strokeColor : stroke_color, strokeOpacity : 0.9 , fillOpacity : 0.3, zIndex : 1000});
          marker.setAnimation(null);
          infowindow.close(window.map,marker);
          $("#polygon_name").html("");
          e.stop();
        });
      });
      var secondCircle = new google.maps.Circle(secondCircleOptions);
      var firstCircle = new google.maps.Circle(firstCircleOptions);
      $('.preview_locality_group').removeAttr('disabled');
    },
    show_hide_all_polygons:function(e){
       var that = this;
       if(e.currentTarget.id == 'on'){
        e.currentTarget.id="off" ;
        e.currentTarget.innerHTML = "Hide All";
        that.show_all_polygons('show');
       }
       else{
        e.currentTarget.id="on" ;
        e.currentTarget.innerHTML = "Show All";
        that.show_all_polygons('hide');
       }
     },

    show_all_polygons: function(show_or_hide){

        if(show_or_hide == 'hide'){
          _.each(window.polygons_not_shown, function(polygon){
            map_polygons[polygon.id].setOptions({strokeOpacity: 0, fillOpacity:0});
          });
          _.each(window.markers , function(marker){marker.setMap(null);})
          window.markers = [];
        }
        else{
          _.each(window.polygons_not_shown, function(polygon){
            var latlongs = [];
            _.each(polygon.polygon, function(coord){
              var r = new google.maps.LatLng(coord[0], coord[1]);
              latlongs.push(r);
            });
            
            map_polygons[polygon.id] = new google.maps.Polygon({
              map : window.map,
              strokeColor   : "#8A8A8A",
              strokeOpacity : 0.9,
              strokeWeight  : 3,
              fillColor     : "#7F7F7F",
              fillOpacity   : 0.3,
              zIndex        : 1000,
              path          : latlongs
            });
            map_polygons[polygon.id].setMap(window.map);
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(polygon.coordinates[0],polygon.coordinates[1]),
              map: window.map,
              title: polygon.name,
              icon : '/marker-icon.png',
              animation: google.maps.Animation.DROP,
            });

            window.markers.push(marker);
            var html = partial("partials_info_window",{polygon_name : polygon.name , polygon_id:polygon.id})
          
            var infowindow = new google.maps.InfoWindow({ 
              content: html
            });
            google.maps.event.addListener(marker,'click',function(e){
              infowindow.open(map,marker);
            })
            
          });
        }
      
    },
    show_locality_options :  function(e)
    { 
        var html = partial("partials_add_single_locality",{'polygon_id' : e.currentTarget.dataset.deliveryId})
        $(e.currentTarget.parentElement).html(html)

    }, 

    add_single_locality:function(e){
      var that = this;
      $.ajax({
        type: "POST",
        url : "delivery_areas/create_new_deliveryarea",
        data: {
          'min_delivery_amt' : $('#min_delivery_amt').val(),
          'delivery_charges' : $('#delivery_charges').val(),
          'non_rush'         : $('#non_rush').val(),
          'rush'             : $('#rush').val(),
          'group_id'         : e.currentTarget.dataset.polygonId,
          'id'               : this.restaurant.get('id')
        },
        success:function(response){
          if(response['status'] == "success"){
            that.render({
              id: response['id'],
              success: true
            });
          }
        },
        failed:function(e){ 
        }

      });

    } ,

    load_maps_api: function () {
      if (!window.maps_loaded) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?&' +
            'callback=initialize_maps&key='+window.google_api_key;
        document.body.appendChild(script);
        window.maps_loaded = true;
      }else{
        window.initialize_maps();
      }
    },

    render_map_view: function(){
      
    }

  });

});