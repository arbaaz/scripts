define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Views.MultipleDeliveryAreasView = Backbone.View.extend({
    el: '#page',
    template: JST['app/scripts/templates/multiple_delivery_areas.ejs'],
    initialize: function(options) {
      //Todo: refactor this code
      this.options = options || {};
      this.data = [];
      this.googlemap = new dataEntryClient.Views.GoogleMapView();
      this.collection = new dataEntryClient.Collections.MultipleDeliveryAreasCollection();
      this.searchedLocations =  new SearchedLocations()
    },
    render: function() {
      var that = this;      
      this.$el.html(that.template());
      this.load_plugins()
    },

    events: {
      'click #submit_forms': "form_submit",
      'click .remove-location-li' :  'remove_location_filter',
    },
    load_plugins: function() {
      close_sidebar();
    }, 
    form_submit: function() {
      var that = this;
        var lat_long = $('#lat_long').val();
        var distance = $('#distance').val();
        start_loading();
        this.color_fill = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        this.collection.fetch({
        data: {
          lat_long: lat_long.split(','),
          distance: distance
        },
        success: function(collection, response, xhr) {
          that.data[lat_long] = collection;
          collection.each(function(polygon){
            that.googlemap.add_polygon_with_event(polygon);
          });
          that.googlemap.add_restaurant_marker(lat_long.split(','))
          stop_loading();
          that.add_to_searched_location_list(lat_long, collection)
        },
        error: function() {
           stop_loading();
          generate_alert(false, 'Error Fetching data!!')

        }
      });
    },
    add_to_searched_location_list : function(lat_long,data)
    {
        var that = this;
        var newsearch = new SearchedLocation({ count_id:this.id,lat_long: lat_long , data : data }) 
        this.searchedLocations.add(newsearch);
        var li = '<li class="searched-li list-group-item ">'+  lat_long 
                  +'<i class="fa fa-trash remove-location-li" id="'+this.id +'"></i></li>';
        $('.searched-ul').append(li);
        this.id++;
    },
    remove_location_filter  : function(e)
    {            
        console.log('removed');
        // this.googlemap.remove_polygon(polygon);
        e.target.parentElement.remove();
    },
  });
});
