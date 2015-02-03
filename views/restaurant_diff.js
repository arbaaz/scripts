define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var RestaurantDiffView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/restaurant_diff.ejs'],

      initialize: function () {
      },

      render: function (options) {
        var that = this
        start_loading();
        that.loadPlugins();
        $.ajax({
          url: "/diff?id1=" + options.id1 + "&id2=" + options.id2,
          type: "GET",
          dataType: "json",
          success: function (data) {
            stop_loading();
            var temp = that.template({
              diff_menu_items: data.payload.diff_menu_items,
              diff_restaurant: data.payload.diff_restaurant,
              diff_timings: data.payload.diff_timings,
              diff_choices: data.payload.diff_choices,
            });
            that.$el.html(temp);

          },
          error: function (data, response, error) {
            stop_loading();
            generate_alert(false, data.responseText);
            return false;
          }
        });

      },
      loadPlugins: function () {
        close_sidebar();
      }

    });
    return RestaurantDiffView;
  });