define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var GlobalSettingsView = Backbone.View.extend({
      el: '#global_settings_panel',
      template: JST['app/scripts/templates/global_settings.ejs'],
      initialize: function (options) {
        this.parent = options.parent;

      },
      render: function (options) {
        var that = this;
        $.ajax({
          skip_url_prefix: true,
          url: "/user/global_settings",
          type: "GET",
          dataType: "json",
          success: function (data) {
            var temp = that.template({
              global_settings: data,

            });
            that.$el.html(temp);
            that.loadPlugins();
          },
          error: function (data, response, error) {
            debugger
            if (response == "error") {
              Backbone.history.navigate('#/401', true);
            }
            else {
              H.generate_alert(false, $.parseJSON(response.responseText).message);
              return false;
            }
          }
        });

      },
      events: {
        'submit #global_settings_form': 'update_settings'
      },

      update_settings: function (e) {
        e.preventDefault();
        H.start_loading();
        var datastr = $('#global_settings_form').serializeObject();
        datastr = this.parent.sanitizeData(datastr);
        $.ajax({
          skip_url_prefix: true,
          url: "/user/global_settings/update",
          type: "POST",
          data: datastr,
          success: function (data) {
            H.stop_loading();
          },
          error: function (data, response, error) {
            H.stop_loading();
            H.generate_alert(false, $.parseJSON(response.responseText).message);
            return false;
          }
        });
      },

      loadPlugins: function () {
        close_sidebar();
      }
    });
    return GlobalSettingsView;
  });
