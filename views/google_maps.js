define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
//TODO:refactor the function:add_polygon_with_event
  var GoogleMapView = Backbone.View.extend({
    // el: '#page',
    id: '#map-canvas',
    template: JST['app/scripts/templates/google_map.ejs'],
    map_options: {
      strokeColor: 'black',
      strokeOpacity: 0.9,
      fillOpacity: 0.3,
      zIndex: 1000
    },
    initialize: function(options) {
      this.options = options;
      this.color_fill = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
      // this.document_fragment = $(document.createDocumentFragment());
      window.map_polygons = [];
      window.map_markers = [];
      window.initialize_maps = this.initialize_maps;
      this.load_maps_api();
    },
    render: function() {

      return this;
    },
    load_maps_api: function() {
      if (!window.maps_loaded) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?&' +
          'callback=initialize_maps&key=' + window.google_api_key;
        document.body.appendChild(script);
        window.maps_loaded = true;
      } else {
        this.initialize_maps();
      }
    },
    initialize_maps: function() {
      var map_center = [];
      map_center = new google.maps.LatLng(19.1154315, 72.8822285);
      var map_options = {
        zoom: 13,
        panControl: true,
        center: map_center,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        minZoom: 3,
        scaleControl: true
      };
      //TODO: dynamically create map-canvas
      window.map = new google.maps.Map(document.getElementById('map-canvas'), map_options);
      console.log('Google map initialized');
    },
    add_restaurant_marker:function(lat_long,restaurant_name){
        var restaurant_marker = new google.maps.Marker({
          // position: new google.maps.LatLng(19.1154315, 72.8822285),
          position: new google.maps.LatLng(lat_long[0], lat_long[1]),
          map: window.map,
          icon: "/rest.svg",
          title: restaurant_name || "Restaurant",
          animation: google.maps.Animation.BOUNCE,
        });
        console.log('Restaurant marker added');
    },
    add_marker: function(polygon) {
      map_markers[polygon.get("id")] = new google.maps.Marker({
        position: new google.maps.LatLng(polygon.get("latitude"), polygon.get("longitude")),
        map: window.map,
        title: polygon.get("name"),
        animation: google.maps.Animation.DROP,
      });
    },
    add_polygon: function(polygon, fill_color) {
      map_polygons[polygon.get("id")] = new google.maps.Polygon({
        paths: eval("[" + polygon.get('polygon_string') + "]"),
        strokeColor: fill_color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: fill_color,
        fillOpacity: 0.35
      });
      map_polygons[polygon.get("id")].setMap(window.map);
    },
    add_polygon_with_event: function(polygon) {
      var stroke_color = get_random_color();
      var fill_color = this.color_fill;
      map_polygons[polygon.get("id")] = new google.maps.Polygon({
            paths: eval("[" + polygon.get('polygon_string') + "]"),
            strokeColor: fill_color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: fill_color,
            fillOpacity: 0.35
          });
      map_polygons[polygon.get("id")].setMap(window.map);
       var marker = new google.maps.Marker({
          position: new google.maps.LatLng(polygon.get("latitude"),polygon.get("longitude")),
          map: window.map,
          title: polygon.get("name"),
          animation: google.maps.Animation.DROP,
        });
       var delivery_time = _.first(polygon.get('delivery_time'))
       var content_string = '<div style="width:200px;" class="text-center"><p>'
                              +polygon.get("name") + "<br/>"
                              +"Delivery Time : <strong>"
                              +((delivery_time && delivery_time.delivery_time) ? (delivery_time.delivery_time)/60 : "")
                              +" mins</strong><br/>"
                              +"Min Delivery Amount : <strong>"
                              +(delivery_time ? delivery_time.min_delivery_amount : "")
                              +" Rs </strong>"
                              +"</p></div>";
        var infowindow = new google.maps.InfoWindow({ 
          content: content_string
        });
        google.maps.event.addListener(marker, 'mouseover', function(e) {
          map_polygons[polygon.get("id")].setOptions({strokeColor : 'black', strokeOpacity : 1 , fillOpacity : 0.8, zIndex : 10000});
          //marker.setAnimation(google.maps.Animation.BOUNCE);
          infowindow.open(window.map,marker);
          e.stop();
        });
        google.maps.event.addListener(marker, 'mouseout', function(e) {
          map_polygons[polygon.get("id")].setOptions({strokeColor : stroke_color, strokeOpacity : 0.9 , fillOpacity : 0.3, zIndex : 1000});
          //marker.setAnimation(null);
          infowindow.close(window.map,marker);
          e.stop();
        });

        google.maps.event.addListener(map_polygons[polygon.get("id")], 'mouseover', function(e) {
          map_polygons[polygon.get("id")].setOptions({strokeColor : 'black', strokeOpacity : 1 , fillOpacity : 0.8, zIndex : 10000});
          marker.setAnimation(google.maps.Animation.BOUNCE);
          infowindow.open(window.map,marker);
          e.stop();
        });
        google.maps.event.addListener(map_polygons[polygon.get("id")], 'mouseout', function(e) {
          map_polygons[polygon.get("id")].setOptions({strokeColor : stroke_color, strokeOpacity : 0.9 , fillOpacity : 0.3, zIndex : 1000});
          marker.setAnimation(null);
          infowindow.close(window.map,marker);
          e.stop();
        });
      // this.add_polygon(polygon);
      // this.add_marker(polygon);
      // this.add_marker_event(polygon, 'mouseover')
      // this.add_marker_event(polygon, 'mouseout')
      // this.add_polygon_event(polygon, 'mouseover', 'black','open');
      // this.add_polygon_event(polygon, 'mouseout', stroke_color,'close');
    },
    events: {

    },
    loadPlugins: function() {},
    add_polygon_event: function(polygon, event, strokeColor,info_window) {
      var stroke_color = get_random_color();
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
      google.maps.event.addListener(map_polygons[polygon.get("id")], event, function(e) {
        map_polygons[polygon.get("id")].setOptions({
          strokeColor: stroke_color,
          strokeOpacity: 0.9,
          fillOpacity: 0.3,
          zIndex: 1000
        });
        map_markers[polygon.get("id")].setAnimation(null);
        switch (info_window) {
          case 'close':
            infowindow.close(window.map, map_markers[polygon.get("id")]);
            break;
          case 'open':
            infowindow.open(window.map, map_markers[polygon.get("id")]);
            break;
        }
        e.stop();
      });
    },
    add_marker_event: function(polygon, event) {
      var stroke_color = get_random_color();
      google.maps.event.addListener(map_markers[polygon.get("id")], event, function(e) {
        map_polygons[polygon.get("id")].setOptions({
          strokeColor: stroke_color,
          strokeOpacity: 0.9,
          fillOpacity: 0.3,
          zIndex: 1000
        });
      });
    },

  });
  return GoogleMapView;
});