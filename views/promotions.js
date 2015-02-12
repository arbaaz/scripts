define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var PromotionsView = Backbone.View.extend({  // View to display promotions 

      el: '#page',
      template: JST['app/scripts/templates/promotions.ejs'],

      initialize: function () {
      },

      render: function (options) {
        this.promotions = new dataEntryClient.Collections.PromotionCollection();
        var that = this;
        that.options = options;
        global_observer.trigger("header_changed", {'active_tab': null});
        H.start_loading();

        this.promotions.fetch({
          skip_url_prefix: true,
          success: function (data, colllection) {
            var temp = that.template({
              promotions: data.models,
            });
            that.$el.html(temp);
            H.stop_loading();
            that.loadPlugins();
          },
          error: function (data, response, error) {
            H.stop_loading();
            H.generate_alert(false, $.parseJSON(response.responseText).message);
            return false;
          }
        })

      },
      loadPlugins: function () {
        H.close_sidebar();
      },
      events: {
        "click .delete": "delete"
      },
      delete: function (e) { // delete a promotion
        e.preventDefault();
        H.start_loading();
        var that = this;
        var id = e.currentTarget.id;
        $.ajax({
          skip_url_prefix: true,
          url: "/restaurant/global_promotions/delete",
          type: "DELETE",
          data: {
            id: id
          },
          dataType: "json",
          success: function (data) {
            that.render();
            H.stop_loading();
            H.generate_alert(true, "Promotion was deleted successfully.");
            return true;
          },
          error: function (data, response, error) {
            H.stop_loading();
            H.generate_alert(false, $.parseJSON(response.responseText).message);
            return false;
          }
        });
        return true;
      }

    });
    return PromotionsView;
  });
