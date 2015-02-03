define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var PolygonModel = Backbone.Model.extend({});
    var PolygonCollection = Backbone.Collection.extend({
      model: PolygonModel
    });
    var SearchDeliveryAreasView = Backbone.View.extend({
      el: '#page',
      template: JST['app/scripts/templates/search_delivery_areas.ejs'],
      initialize: function (options) {
        this.options = options;
        window.google_map = new dataEntryClient.Views.GoogleMapView()
        this.collection = new dataEntryClient.Collections.SearchDeliveryAreasCollection();
      },

      render: function () {
        this.$el.html(this.template());
        this.load_plugins();
      },
      events: {
        'click #btnSearch': 'search'
      },
      load_plugins: function () {
        close_sidebar();
      },
      search: function (e) {
        e.preventDefault();
        var that = this;
        var search = remove_spaces($('#searchText').val());
        var limit = remove_spaces($('#limitText').val());

        if (limit < 1) {
          generate_alert(false, 'Please enter limit greater than 0');
          return false;
        }

        function remove_spaces(string) {
          return $.trim(string).replace(/\s{2,}/g, ' ');
        }

        // var form_data = $("form").serializeObject();
        if (_.isEmpty(search) || _.isEmpty(limit)) {
          generate_alert(false, 'Please enter all fields');
          return false;
        }
        // var form_data = {};
        start_loading();
        that.collection.fetch({
          data: {
            search: search,
            limit: limit
          },

          // data:form_data,
          success: function (models, response) {
            stop_loading();
            if (models.length == 0) {
              generate_alert(true, 'No data found');
              return;
            }
            models.each(function (model) {
              var polygons = new PolygonCollection();
              polygons.reset(model.get('polygons'))
              var latitude = model.get('latitude');
              var longitude = model.get('longitude')
              var lat_long = [latitude, longitude]
              if (_.isNull(latitude) || _.isNull(longitude)) {
                generate_alert(false, model.get('name') + ': Latitude & Longitude not found');
                return;
              }
              google_map.add_restaurant_marker(lat_long, model.get('name'));
              polygons.each(function (polygon) {
                google_map.add_polygon_with_event(polygon);
              })
            })
          },
          error: function () {
            stop_loading();
            generate_alert(false, 'Error Fetching data!!');
          }
        });

      },

    });
    return SearchDeliveryAreasView;
  });