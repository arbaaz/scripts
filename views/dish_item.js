define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    //Promotion view to add or update a dish item.
    var DishItemView = Backbone.View.extend({
      template: JST['app/scripts/templates/dish_item.ejs'],
      initialize: function (attrs) {

      },

      el: '#page',

      render: function (options) {
        var that = this;
        start_loading();
        global_observer.trigger("header_changed", {'active_tab': "dashboard", 'user_type': "restaurants"});
        if (options.id) { // update a dish item
          this.dish_item = new dataEntryClient.Models.DishItemModel({id: options.id});
          this.dish_item.fetch({
            skip_url_prefix: false,
            success: function (data) {
              that.item = data.get('payload')["Item"];
              that.restaurant = data.get('payload')["Restaurant"];
              stop_loading();
              var temp = that.template({
                dish_item: data.get('payload')["Item"],
                restaurant: data.get('payload')["Restaurant"]
              });
              that.$el.html(temp);
              that.loadPlugins();
            },
            error: function (data, response, error) {
              stop_loading();
              generate_alert(false, $.parseJSON(response.responseText).message);
              return false;
            }

          })
        }

      },

      loadPlugins: function () {
        close_sidebar();
      },

      events: {
        'submit #update_status_form': 'update_dish_item_status',
        'change #timeperiod': 'timeperiod_change'
      },

      timeperiod_change: function (e) {
        if ($("#timeperiod").val() != 'forever') {
          $("#time-value").removeClass('hidden')
        } else {
          $("#time-value").addClass('hidden')
        }
      },


      update_dish_item_status: function (e) {

        e.preventDefault();
        start_loading();
        var data = $(".form-horizontal").serializeObject();

        if (data.status_change == "null") {
          stop_loading();
          generate_alert(false, "Please select a status.");
          return;
        }

        if (data.status_change == this.item.status) {
          stop_loading();
          generate_alert(false, "Item is already " + get_status(parseInt(data.status_change)));
          return;
        }

        if (data.timeperiod != 'forever' && data.time.trim().length == 0) {
          stop_loading();
          generate_alert(false, "Please enter a valid time period");
          return;
        }

        var status = ""
        if (get_status(parseInt(data.status_change)) == "ACTIVE") {
          status = "enable"
        } else {
          status = "disable"
        }

        var item_id = e.currentTarget.dataset.item;
        var restaurant_id = this.restaurant.id;

        $.ajax({
          skip_url_prefix: true,
          url: "/restaurant/crm/restaurants/" + restaurant_id + "/item/" + status,
          type: "PUT",
          data: {
            "time_period": data.timeperiod,
            "value": data.time,
            "comment": data.comment,
            "item_id": item_id
          },
          success: function (data) {
            stop_loading();
            generate_alert(true, "Item's status changed successfully");
            Backbone.history.navigate('dishes', true);
          },
          error: function (response, status, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });

      }

    });
    return DishItemView;
  });