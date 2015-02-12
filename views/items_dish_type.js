define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var ItemsDishTypeView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/items_dish_type.ejs'],

      initialize: function (options) {
        this.options = options;
      },

      render: function (options) {
        this.items = new dataEntryClient.Collections.ItemDishTypeCollection();
        H.start_loading();

        var that = this;
        this.items.fetch({
          data: {restaurant_id: this.options.restaurant_id},
          success: function (data, collection) {
            H.stop_loading();
            var temp = that.template({
              restaurant_id: that.options.restaurant_id,
              items: data.models,
              next_disabled: data.where({veg_type: ""}).length > 0 ? true : false
            });
            that.$el.html(temp);

            that.menu_progress_bar = new dataEntryClient.Views.MenuProgressBarView();
            that.menu_progress_bar.render(collection.meta, that.options.restaurant_id);


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
        close_sidebar();
      },
      events: {
        "click .save": "save",
        "click .veg": "select_dish_type_tag_veg",
        "click .nonveg": "select_dish_type_tag_nonveg",
        "click .egg": "select_dish_type_tag_egg",
        "click .jain": "select_dish_type_tag_jain",
        "click .neutral": "select_dish_type_tag_neutral",
        "click .next": "next_state"
      },
      select_dish_type_tag_veg: function (e) {
        var id = e.currentTarget.dataset.id;
        this.remove_dish_type_tags(id)
        $("#veg-" + id).removeClass('btn-white')
        $("#veg-" + id).addClass('btn-success')

        var model = this.items.findWhere({id: id})
        model.set({veg_type: window.collections.veg_types["VEG"]})

      },
      select_dish_type_tag_nonveg: function (e) {
        var id = e.currentTarget.dataset.id;
        this.remove_dish_type_tags(id)
        $("#nonveg-" + id).removeClass('btn-white')
        $("#nonveg-" + id).addClass('btn-danger')

        var model = this.items.findWhere({id: id})
        model.set({veg_type: window.collections.veg_types["NON_VEG"]})

      },
      select_dish_type_tag_egg: function (e) {
        var id = e.currentTarget.dataset.id;
        this.remove_dish_type_tags(id)
        $("#egg-" + id).removeClass('btn-white')
        $("#egg-" + id).addClass('btn-warning')

        // $("#egg-"+id).attr('class', 'btn btn-warning egg');

        var model = this.items.findWhere({id: id})
        model.set({veg_type: window.collections.veg_types["EGG"]})

      },
      select_dish_type_tag_jain: function (e) {
        var id = e.currentTarget.dataset.id;
        this.remove_dish_type_tags(id)
        $("#jain-" + id).removeClass('btn-white')
        $("#jain-" + id).addClass('btn-info')

        var model = this.items.findWhere({id: id})
        model.set({veg_type: window.collections.veg_types["JAIN"]})

      },
      select_dish_type_tag_neutral: function (e) {
        var id = e.currentTarget.dataset.id;
        this.remove_dish_type_tags(id)
        $("#neutral-" + id).removeClass('btn-white')
        $("#neutral-" + id).addClass('btn-default')

        var model = this.items.findWhere({id: id})
        model.set({veg_type: window.collections.veg_types["NEUTRAL"]})

      },
      next_state: function (e) {
        // if(this.items.where({dish_type_tag:-1}).length>0)
        // {
        //     H.generate_alert(false,"Not allowed. Please complete the dish type for all items.");

        // } else {
        //     $.ajax({
        //         url : "/restaurants/update_menu_progress_bar",
        //         type: "POST",
        //         data:{restaurant_id:this.options.restaurant_id,state:"dish_type_tags"},
        //         success:function(data){

        //         },
        //         error: function(response,error){

        //         }

        //     });

        // }
      },
      save: function (e) {
        var that = this;
        H.start_loading();
        this.items.save({
          success: function (response) {
            H.stop_loading();
            that.render();
            H.generate_alert(true, response.message);
          },
          error: function (response, error) {
            H.stop_loading();
            H.generate_alert(false, $.parseJSON(response.responseText).message);
          }

        });

      },
      remove_dish_type_tags: function (id) {
        $("#veg-" + id).removeClass('btn-success').addClass('btn-white')
        $("#nonveg-" + id).removeClass('btn-danger').addClass('btn-white')
        $("#egg-" + id).removeClass('btn-warning').addClass('btn-white')
        $("#jain-" + id).removeClass('btn-info').addClass('btn-white')
        $("#neutral-" + id).removeClass('btn-default').addClass('btn-white')

      },

    });
    return ItemsDishTypeView;
  });
