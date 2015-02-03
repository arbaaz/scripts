define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var MenuView = Backbone.View.extend({


      el: "#page",
      template: JST['app/scripts/templates/menu.ejs'],

      initialize: function (options) {
        this.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.restaurant_id});
        this.timings = new dataEntryClient.Collections.TimingCollection({id: options.restaurant_id});
        this.timings.url += "/" + options.restaurant_id;
        this.timings.fetch();

        this.choices = new dataEntryClient.Collections.ChoiceCollection({id: options.restaurant_id});
        this.choices.url += "/" + options.restaurant_id;
        this.choices.fetch();
      },

      render: function () {
        var that = this;
        this.restaurant.fetch({
          success: function (data) {
            that.$el.html(that.template({restaurant: data}));
            that.menu_category_view = new dataEntryClient.Views.MenuCategoryView({id: that.restaurant.get('id')});
            that.menu_item_view = new dataEntryClient.Views.MenuItemView({
              choices: that.choices.models,
              timings: that.timings.models
            });
            that.menu_category_view.render();
          }
        });
      },

      events: {
        "click .list_items": 'show_items'
      },

      show_items: function (e) {
        var menu_category_id = $(e.currentTarget).attr('data-category-id');
        this.menu_item_view.set_menu_category(dataEntryClient.Models.MenuCategory.findOrCreate(menu_category_id));
        //this.menu_item_view.render();
      },


    });
    return MenuView;
  });