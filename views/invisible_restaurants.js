define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var InvisibleRestaurantView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/invisible_restaurants.ejs'],

      initialize: function () {
      },

      render: function (options) {
        var restaurants = new dataEntryClient.Collections.RestaurantCollection();
        var that = this;
        that.options = options;
        global_observer.trigger("header_changed", {'active_tab': null});
        start_loading();
        restaurants.url = "/restaurants/invisible";
        var new_url = restaurants.url + "?";
        if (options) {
          if (options.page_num) {
            new_url += "&page=" + options.page_num;
          }
        }
        restaurants.url = new_url;
        restaurants.fetch({
          success: function (data, colllection) {
            var temp = that.template({
              restaurants: data.models,
              meta: colllection.meta
            });
            that.$el.html(temp);
            stop_loading();
            if (options) {
              if (that.options.success) {
                generate_alert(true, that.options.message);
              }
            }
            that.loadPlugins();
          },
          error: function (data, response, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        })


        //this.$el.html(this.template({}));
      },
      loadPlugins: function () {
        close_sidebar();
        var that = this;
        var page_num = 1;
        /*this.$('#filter').keyup(function () {
         var rex = new RegExp($(this).val(), 'i');
         $('.searchable tr').hide();
         $('.searchable tr').filter(function () {
         return rex.test($(this).text());
         }).show();
         });*/
        this.$(document).ready(function () {
          $("#filter").focus();
        });


        // restaurant restore
        $(".restaurant_restore").click(function (e) {
          e.preventDefault();
          console.log("restore clicked");
          start_loading();
          var id = $(this).prop("id");
          $("html, body").animate({scrollTop: 0}, "fast");
          $.ajax({
            type: 'post',
            url: 'restaurants/restore',
            data: {id: id},
            success: function (message) {
              stop_loading();
              that.render({
                page_num: page_num,
                success: true,
                message: "Restaurant restored successfully"
              });
            },
            error: function (response, status, error) {
              stop_loading();
              generate_alert(false, $.parseJSON(response.responseText).message);
            }
          });
        });

        var global_filters = {};

        var apply_filters = function () {
          that.render(global_filters);
        };

        // Pagination code start
        $(".page_number").click(function () {
          if ($(this).prop("id") == $("#current_page_num").prop("value")) {
            return false;
          }
          ;
          start_loading();
          if ($(this).prop("id") == "next") {
            var next = parseInt($("#current_page_num").prop("value")) + 1;
            var total = parseInt($("#total_page_num").prop("value"));
            if (next <= total) {
              global_filters.page_num = next;
              apply_filters();
            } else {
              stop_loading();
            }
          } else if ($(this).prop("id") == "previous") {
            var previous = parseInt($("#current_page_num").prop("value")) - 1;
            if (previous >= 1) {
              global_filters.page_num = previous;
              apply_filters();
            } else {
              stop_loading();
            }
          } else {
            global_filters.page_num = $(this).prop("id");
            apply_filters();
          }
        });
      },
      events: {}

    });
    return InvisibleRestaurantView;
  });