define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var IOSReleasesView = Backbone.View.extend({  // View to display promotions 

      el: '#page',
      template: JST['app/scripts/templates/releases.ejs'],

      initialize: function () {
      },

      render: function (options) {
        this.releases = new dataEntryClient.Collections.IOSReleaseCollection();
        var that = this;
        that.options = options;
        global_observer.trigger("header_changed", {'active_tab': null});
        H.start_loading();
        this.releases.fetch({
          skip_url_prefix: true,
          success: function (data, colllection) {
            var temp = that.template({
              releases: data.models,
              releaseType: "ios"
            });
            that.$el.html(temp);
            H.stop_loading();
            that.loadPlugins();
          },
          error: function (data, response, error) {
            H.stop_loading();
            H.generate_alert(false, $.parseJSON(response.responseText).message);
          }
        })

      },
      loadPlugins: function () {
        H.close_sidebar();
      },
      events: {
        "click .delete": "delete"
      },
      delete: function (e) { // delete a release
        e.preventDefault();
        H.start_loading();
        var that = this;
        var id = e.currentTarget.id;
        $.ajax({
          skip_url_prefix: true,
          url: "/user/admin/ios_releases/" + id,
          type: "DELETE",
          data: {
            id: id
          },
          dataType: "json",
          success: function (data) {
            that.render();
            H.generate_alert(true, "IOS release was deleted successfully.");
            return true;
          },
          error: function (response, status, error) {
            H.stop_loading();
            return false;
          }
        });
        return true;
      }

    });
    return IOSReleasesView;
  });
