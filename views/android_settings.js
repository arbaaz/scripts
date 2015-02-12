define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var AndroidSettingsView = Backbone.View.extend({
      el: '#android_settings_panel',
      template: JST['app/scripts/templates/android_settings.ejs'],
      initialize: function (options) {
        this.parent = options.parent;
      },
      render: function (options) {
        var that = this;
        $.ajax({
          skip_url_prefix: true,
          url: "/user/android_settings?app_version=" + options.version,
          type: "GET",
          dataType: "json",
          success: function (data) {
            var temp = that.template({
              android_settings: data,
              current_version: options.version
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
        'submit #android_settings_form': 'update_settings',
        'change #android_versions': 'update_form'
      },

      update_form: function () {
        var version = $('#android_versions').val();
        this.render({version: version});
      },

      update_settings: function (e) {
        e.preventDefault();
        H.start_loading();
        var datastr = $('#android_settings_form').serializeObject();
        datastr = this.parent.sanitizeData(datastr);
        $.ajax({
          skip_url_prefix: true,
          url: "/user/android_settings/update",
          type: "POST",
          data: datastr,
          success: function (data) {
            H.stop_loading();
          },
          error: function (data, response, error) {
            H.stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
            return false;
          }
        });
      },

      loadPlugins: function () {
        close_sidebar();
      }
    });
    return AndroidSettingsView;
  });
