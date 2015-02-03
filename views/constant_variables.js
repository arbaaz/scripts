define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var ConstantVariablesView = Backbone.View.extend({
      el: '#constant_variables_panel',
      template: JST['app/scripts/templates/constant_variables.ejs'],
      initialize: function (options) {
        this.parent = options.parent;
      },
      render: function (options) {
        var that = this;
        $.ajax({
          skip_url_prefix: true,
          url: "/user/constant_variables",
          type: "GET",
          dataType: "json",
          success: function (data) {
            var temp = that.template({
              constant_variables: data,
            });
            that.$el.html(temp);
            that.loadPlugins();
          },
          error: function (data, response, error) {
            generate_alert(false, $.parseJSON(response.responseText).message);
            return false;
          }
        });

      },
      events: {
        'submit #constant_variables_form': 'update_settings'
      },

      update_settings: function (e) {
        e.preventDefault();
        start_loading();
        var datastr = $('#constant_variables_form').serializeObject();
        datastr = this.parent.sanitizeData(datastr);
        $.ajax({
          skip_url_prefix: true,
          url: "/user/constant_variables/update",
          type: "POST",
          data: datastr,
          success: function (data) {
            stop_loading();
          },
          error: function (data, response, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
            return false;
          }
        });
      },

      loadPlugins: function () {
        close_sidebar();
      }
    });
    return ConstantVariablesView;
  });