define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.AddItemView = Backbone.View.extend({

        el : "#add_item_modal",
        template: JST['app/scripts/templates/add_item.ejs'],

        initialize: function (options) {
            this.timings = options.timings;
            this.choices = options.choices;
            this.menu_category = options.menu_category;
        },

        render: function () {
            var template = this.template({item : this.item, choices : this.choices});
            this.$el.html(template);
            this.item_size_view = new dataEntryClient.Views.ItemSizeView({item : this.item, choices : this.choices, timings: this.timings});
            this.item_size_view.render();
            this.loadPlugins();
        },

        loadPlugins: function(){
          $("#item_modal").modal({
            backdrop: 'static'
          });
          $("#item_modal").modal('show');
        },

        events: {
          'click .add_size' : "add_size",
          'keyup input[name="item_name"]' : 'change_name',
          'keyup #description' : 'change_description',
          'change select[name="veg_type"]' : 'change_veg_type',
          'click .save_item' : 'save_item',
          'click .item_modal_close' : 'close_modal'
        },

        add_item: function(e){
          this.item = new dataEntryClient.Models.MenuItem({menu_category_id: this.menu_category.id, veg_type : 'VEG', status : get_status_id('ACTIVE')});
          this.add_new_size();
          this.render();
        },

        edit_item: function(e){
          var id = $(e.currentTarget).attr('data-item-id');
          this.item = dataEntryClient.Models.MenuItem.find(id);
          this.render();
          $("#notification_save").html(""); // clear the notification panel
        },

        add_new_size: function(){
          var new_size = new dataEntryClient.Models.ItemSize({size_id : get_size_id_by_value('NONE'), item : this.item, id: generate_new_id(), status : get_status_id('ACTIVE')});
          var new_price = new dataEntryClient.Models.ItemPrice({item_size : new_size, id: generate_new_id(), timing_id : this.timings[0].id});
        },

        add_size: function(e){
          e.preventDefault();
          this.add_new_size();
          this.item_size_view.render();
        },

        change_name: function(e){
          this.item.set('name', $(e.currentTarget).val());
        },

        change_description: function(e){
          this.item.set('description', $(e.currentTarget).val());
        },

        change_veg_type: function(e){
          this.item.set('veg_type', $(e.currentTarget).val());
        },

        save_item: function(e)
        {
          start_loading();
          var that = this;
          this.item.save({}, {
            success: function(data){
              that.trigger("item_changed", {});
              stop_loading();
            }
          });
        },

        close_modal: function(e)
        {
          // close modal, do all cleaning here
          if(this.item.get('id') != null)
          {
            start_loading();
            var that = this;
            this.item.fetch({
              success : function(data){
                that.trigger("item_changed", {});
                stop_loading();
              },
              reset : true
            });
          }
        }

    });

    dataEntryClient.Views.ItemSizeView = Backbone.View.extend({

        el : "#item_modal_sizes",
        template: JST['app/scripts/templates/partials/item_modal_sizes.ejs'],

        initialize: function (options) {
            this.timings = options.timings;
            this.choices = options.choices;
            this.item = options.item;
        },

        render: function () {
            this.$el.html(this.template({item : this.item, choices : this.choices, timings : this.timings}));
            this.loadPlugins();
        },

        loadPlugins: function(){
          $("#item_modal_sizes_treetable").treetable({
              expandable: true,
              initialState: "expanded",
              nodeIdAttr: 'tId',
              parentIdAttr: 'pId'
          });
          $(".choice_select").select2({
            width : 'resolve'
          })
        },

        events : {
          "change .input_item_sizes" : 'change_size',
          "keyup .input_item_price" : "change_price",
          "change .input_item_timing" : "change_timing",
          "change .choice_select" : "change_choices"
        },


        change_size : function(e){
          e.preventDefault();
          var id = $(e.currentTarget).attr('data-id');
          var size = dataEntryClient.Models.ItemSize.find(id);
          size.set('size_id', $(e.currentTarget).val());
        },

        change_price : function(e){
          e.preventDefault();
          var id = $(e.currentTarget).attr('data-id');
          var price = dataEntryClient.Models.ItemPrice.find(id);
          price.set('price', $(e.currentTarget).val());
        },

        change_timing : function(e){
          e.preventDefault();
          var id = $(e.currentTarget).attr('data-id');
          var price = dataEntryClient.Models.ItemPrice.find(id);
          price.set('timing_id', $(e.currentTarget).val());
        },

        change_choices : function(e){
          e.preventDefault();
          var id = $(e.currentTarget).attr('data-id');
          var choice_ids = $(e.currentTarget).val();
          var size = dataEntryClient.Models.ItemSize.find(id);
          size.set('choice_ids', choice_ids);
        }
    });
  

});