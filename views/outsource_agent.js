define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var OutsourceAgent = Backbone.View.extend({
      el: '#page',
      template: JST['app/scripts/templates/outsource_agent.ejs'],

      initialize: function () {
        close_sidebar();
      },

      render: function () {
        var restaurants = new dataEntryClient.Collections.RestaurantCollection();
        var that = this;
        global_observer.trigger("header_changed", {'active_tab': null, 'user_type': "outsource"});
        H.start_loading();
        restaurants.url = "agent/restaurants";
        restaurants.fetch({
          success: function (data) {
            var template = that.template({
              restaurants: data.models,
              created_new: window.created_new
            });
            that.$el.html(template);
            H.stop_loading();
            if (window.created_new) {
              generate_alert(true, "New Restaurant was successfully created!");
            }
            that.loadPlugins();
          },
          error: function (data, response, error) {
            H.stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        })
      },
      loadPlugins: function () {
        this.$("[name='restaurant_status']").bootstrapSwitch();
        this.$('#filter').keyup(function () {
          var rex = new RegExp($(this).val(), 'i');
          $('.searchable tr').hide();
          $('.searchable tr').filter(function () {
            return rex.test($(this).text());
          }).show();
        });
        this.$(document).ready(function () {
          $("#filter").focus();
        });
      },
      events: {
        'click .submit': 'submit'
      },
      submit: function (e) {
        H.start_loading();
        e.preventDefault();
        var that = this;
        var currentEl = $(e.currentTarget);
        var id = currentEl[0].id;
        $.ajax({
          url: "agent/submit",
          type: "POST",
          data: {
            id: id
          },
          dataType: "json",
          success: function (data) {
            H.stop_loading();
            generate_alert(true, "Submitted Successfully");
            that.render();
            return data;
          },
          error: function (response, status, error) {
            H.stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });
        return true;
      }
    });
    return OutsourceAgent;
  });
