define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  var MapPreviewView = Backbone.View.extend({

    initialize: function() {
      window.map = null;
      window.polygons = null;
      window.polygons_not_shown = null;
      window.restaurant_coordinates = null;
      window.delivery_time_mapping = null;
      window.min_delivery_amount_mapping = null;
      window.initialize_maps = this.initialize_maps;
      window.map_polygons = [];
      window.markers = [];
    },
    el: '#page',
    template: JST['app/scripts/templates/map_preview.ejs'],

    render: function(options){
      var that = this;
      that.options = options;

      that.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id});
      that.deliveryAreas = new dataEntryClient.Collections.DeliveryareaCollection({id: options.id});
      that.deliveryAreas.url += "/" + options.id;
      start_loading();
      that.deliveryAreas.fetch({
        success: function(data,response) {
          close_sidebar()
          that.$el.html(that.template({id:options.id}));

          that.topNavigation=new dataEntryClient.Views.RestaurantTopNavigationView();
          that.topNavigation.render(that.restaurant,response.meta.menu_stash);
          stop_loading()
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //do nothing
          }
          else{
            _.defer(function(){
              window.delivery_time_mapping = [];
              window.min_delivery_amount_mapping = [];
              _.each(data.models, function(delivery_area){
                window.delivery_time_mapping.push({
                  id: delivery_area.get("locality_group_id_delivery_type").locality_group_id,
                  delivery_time: delivery_area.get("delivery_time")/60
                });

                window.min_delivery_amount_mapping.push({
                  id: delivery_area.get("locality_group_id_delivery_type").locality_group_id,
                  min_delivery_amount: delivery_area.get("min_delivery_amount")
                });
              });
            })
            _.defer(function(){
              that.fetch_polygons(function(map_object){
                window.polygons = map_object.polygons; //temporarily storing it globally
                window.restaurant_coordinates = map_object.restaurant_coordinates;
                window.polygons_not_shown = map_object.polygons_not_shown;
                that.load_maps_api();
              });
            })
          }
        },
        failed: function(){

        }
      });
      

      

    },

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

    events: {
      'click #delivery_time': 'sort_delivery_time',
      'click #minimum_order': 'sort_minimum_order',
      'click #normal_view': 'back_to_normal_view',
      'click .show_all' : 'show_hide_all_polygons',
      'click .add-single-locality-btn' : 'show_locality_options',
      'click #add-btn' : 'add_single_locality',
      // 'click #close_locality_group_preview' : 'close_map_preview'
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
          'id'               : this.options.id
        },
        success:function(response){
          if(response['status'] == "success"){
            current_view = new dataEntryClient.Views.DeliveryAreaView();
            current_view.render({id: response['id']})
          }
        },
        failed:function(e){ 
        }

      });

    },

  });
  return MapPreviewView;
});