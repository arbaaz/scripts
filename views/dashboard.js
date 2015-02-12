define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var DashboardView = Backbone.View.extend({

      initialize: function (attrs) {
        this.options = attrs;
      },
      el: '#page',
      template: JST['app/scripts/templates/dashboard.ejs'],

      render: function (options) {
        var that = this;
        that.options = options;
        H.start_loading();
        global_observer.trigger("header_changed", {'active_tab': "dashboard", 'user_type': "restaurants"});
        var template = that.template({});
        that.$el.html(template);
        that.load_plugins();
        H.stop_loading();
      },
      load_plugins: function () {
        close_sidebar();
      },
      events: {},

      save_changes: function (e) {

      },
      cleanup: function () {
        this.undelegateEvents();
        $(this.el).empty();
      }

    });
    return DashboardView;
  });
