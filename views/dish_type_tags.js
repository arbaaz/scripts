define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var DishTypeTagsView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/dish_type_tags.ejs'],

      initialize: function () {
      },

      render: function (options) {
        this.dish_tags = new dataEntryClient.Collections.DishTypeTagCollection();
        var that = this;
        this.dish_tags.fetch({
          success: function (data, colllection) {
            var temp = that.template({
              tags: data.models,
            });
            that.$el.html(temp);
            H.stop_loading();
            that.loadPlugins();
          },
          error: function (data, response, error) {
            H.stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
            return false;
          }
        })

      },
      loadPlugins: function () {
        close_sidebar();
      },
      events: {
        "click .delete": "delete",
      },
      delete: function (e) { // delete a dish type tag
        H.start_loading();
        this.dish_tag_type = new dataEntryClient.Models.DishTypeTagModel({id: e.currentTarget.id});
        var that = this;
        this.dish_tag_type.destroy({
          success: function (data, response) {
            H.stop_loading();
            that.render();
            generate_alert(true, response.message);

          },
          error: function (data, response, error) {
            H.stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });
      },


    });
    return DishTypeTagsView;
  });
