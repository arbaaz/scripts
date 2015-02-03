define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.ItemEntryView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/menu_entry/item_entry.ejs'],

      initialize: function (options) {
        console.log("init items");
        this.options = options;
        // _.bindAll(this, 'on_keypress');
        // $(document).bind('keydown', _.debounce(this.on_keypress, 200));

        global_observer.trigger("header_changed", {'restaurant_id' : this.options.restaurant_id, 'user_type':"outsource", 'active_tab' : 'items'});
      },

      render: function (options) {
        var that = this;
        var check_timings_permission = true;
        var models = {};
        Backbone.Relational.store.reset()

        this.items = new dataEntryClient.Collections.ItemCollection({restaurant_id: this.options.restaurant_id});
        this.item_sizes = new dataEntryClient.Collections.ItemSizesCollection({restaurant_id: this.options.restaurant_id});
        this.choices = new dataEntryClient.Collections.ChoiceCollection({restaurant_id: this.options.restaurant_id});
        this.timings = new dataEntryClient.Collections.TimingCollection({restaurant_id: this.options.restaurant_id});
        close_sidebar();
        start_loading();

        $.when (
          that.items.fetch ({})
        ).then(function (items_arg) {
          that.item_sizes.reset(items_arg.payload_items.sizes);
          that.choices.reset(items_arg.payload_choices);
          that.timings.reset(items_arg.payload_timings);
          that.map = items_arg.map;
          console.log('rendering...');

          if (_.isEmpty(that.timings.models)) {
            stop_loading();
            generate_alert(false, "No timings found! Please add timings before proceeding.");
            return false;
          } else if (check_timings_permission) {
            var temp = that.template({
              items: that.items.models,
              restaurant_id: that.items.restaurant_id,
              restaurant_name: items_arg.meta.restaurant_name,
              choices_list: that.choices.models,
              timings_list: that.timings.models,
              map: items_arg.map
            });

            that.$el.html(temp);
            that.load_plugins();
            stop_loading();
          }
        }, function (response) {
          generate_alert(false, $.parseJSON(response.responseText).message);
        })
      },

      load_plugins: function() {
        this.items.assign_events(this.items.models);
      },

      assign_selects: function (i, j) {
        $("#item_choices_" + i + "_" + j).select2({placeholder: 'Choice'});
        $("#item_size_" + i + "_" + j).select2();
      },

      events: {
        'click .add_item': 'add_item',
        'click .delete_item': 'delete_item',
        'click .add_size': 'add_size',
        'click .delete_size': 'delete_size',
        'click .add_price': 'add_price',
        'click .delete_price': 'delete_price',
        // change events on attributes
        'keyup .listen_change' : 'attribute_changed',
        'change .listen_change' : 'attribute_changed',
        'click .save_items': 'save_items',
        'click .in_display_mode': 'edit'
      },

      add_item: function () {
        var i = parseInt($('#item_count').val());
        var item_id = 'new_' + i;
        var item = dataEntryClient.Models.Item.findOrCreate({id: item_id});
        
        var size = dataEntryClient.Models.ItemSize.findOrCreate({id: ('new_' + i + '_0')});
        size.set({size: window.collections.size_lists.NONE, choices: {}});
        
        var price = dataEntryClient.Models.ItemPrice.findOrCreate({id: ("new_" + i + "_0_0")});
        price.set({price: 0, timing_id: 'ALL'});

        // assign events
        item.assign_events(item, size, price);
        size.get('prices').add(price);
        item.get('sizes').add(size);
        this.items.add(item);

        var html = partial('partials_item', {
          i: i,
          sr_num: this.items.length,
          id: item_id,
          name: "",
          description: "",
          sizes: item.get('sizes'),
          choices_list: this.choices.models,
          timings_list: this.timings.models,
          map: this.map,
          is_item_price_variable: false,
          edit_mode: true
        });
        
        $(".listing_items").append(html);
        this.assign_selects(i, 0);
        $('#item_count').val(i + 1);
        $("#total_items").html(this.items.length);
        $("#item_name_" + i).focus();
        window.scrollTo(0, document.body.scrollHeight);
      },

      delete_item: function (e) {
        e.preventDefault();
        var i = e.currentTarget.dataset.index;
        var item_id = $("#item_id_" + i).val();
        var start = parseInt($('#sr_num_' + i).html());
        var restaurant_id = $("#restaurant_id").val();
        var confirm = window.confirm("Are you sure?");

        if (confirm == true) {
          if (item_id.split('_')[0] != "new") {
            var item = _.filter(this.items.models, function(m) { if (m.id == item_id) {return m} })[0];
            item.destroy();
            // this.render({
            //   restaurant_id: restaurant_id
            // });
            generate_alert(false, "Deleted");
          } else {
            this.items.remove({id : item_id});
            $("#listing_sizes_" + i).remove();
          }
          $("#item_row_" + i).remove();
          this.serial_num(parseInt(i), start);
          $("#total_items").html(this.items.length);
        }
      },

      add_size: function (e) {
        var i = e.currentTarget.dataset.index;
        var j = parseInt($('#size_count_' + i).val());

        var item_id = $("#item_id_" + i).val();
        var item = _.filter(this.items.models, function(m) { if (m.id == item_id) {return m} })[0];

        var size = dataEntryClient.Models.ItemSize.findOrCreate({id: ('new_' + i + '_' + j)});
        size.set({size: window.collections.size_lists["NONE"], choices: {}});

        var price = dataEntryClient.Models.ItemPrice.findOrCreate({id: ("new_" + i + "_" + j + '_' + "0")});
        price.set({price: 0, timing_id: 'ALL'});

        // assign evets
        item.assign_events(item, size, price);
        size.get('prices').add(price);
        item.get('sizes').add(size);

        var html = partial('partials_item_size', {
          i: i,
          j: j,
          size_name: window.collections.size_lists["NONE"],
          size_id: size.get('id'),
          choices: window.current_view.choices,
          prices: size.get('prices'),
          choices_list: this.choices.models,
          timings_list: this.timings.models,
          map: this.map,
          edit_mode: true
        });
        
        $("#size_count_" + i).val(j + 1);
        $("#listing_sizes_" + i).append(html);
        this.assign_selects(i, j);
      },

      delete_size: function (e) {
        var index = e.currentTarget.dataset.index;
        var size_id = $("#size_id_" + index).val();
        var item_id = $("#item_id_" + index.split('_')[0]).val();
        var restaurant_id = $("#restaurant_id").val();
        var size_collection = this.items.find({id: item_id}).get('sizes');

        if (size_collection.length == 1) {
          generate_alert(false, "Item needs to have atleast one size!")
          return false;
        }

        var confirm = window.confirm("Are you sure?");
        if (confirm == true) {
          if (size_id.split('_')[0] != "new") {
            // validations
            var item = _.filter(this.items.models, function(m) { return m.id == item_id })[0];
            var message = item.validate_sizes(size_collection);
            if (message != "") {
              generate_alert(false, message);
              return false;
            }

            var size = dataEntryClient.Models.ItemSize.find({id: size_id});
            size.destroy({url: 'item_size/' + size_id});
            // this.render({
            //   restaurant_id: restaurant_id
            // });
            generate_alert(false, "Deleted");
          }
          size_collection.remove({id : size_id});
          $("#size_tile_" + index).remove();
        }
      },

      add_price: function (e) {
        var index = e.currentTarget.dataset.index;
        var i = parseInt(index.split('_')[0]);
        var j = parseInt(index.split('_')[1]);
        var k = parseInt($("#price_count_" + index).val());

        var item_id = $("#item_id_" + i).val();
        var item = _.filter(this.items.models, function(m) { return m.id == item_id })[0];

        var size_id = $("#size_id_" + i + "_" + j).val();
        var size = dataEntryClient.Models.ItemSize.find({id: size_id});

        var price = dataEntryClient.Models.ItemPrice.findOrCreate({id: ("new_" + index + '_' + k)});
        price.set({price: 0, timing_id: 'ALL'});
        
        // assign evets
        item.assign_events(item, size, price);
        size.get('prices').add(price);

        var html = partial('partials_item_price', {
          i: i,
          j: j,
          k: k,
          id: "new_" + i + "_" + j + "_" + k,
          price: 0,
          timing_id: 'ALL',
          timings_list: this.timings.models,
          map: this.map,
          edit_mode: true
        });
        $("#price_count_" + index).val(k + 1);
        $("#listing_prices_" + index).append(html);
      },

      delete_price: function (e) {
        var index = e.currentTarget.dataset.index;
        var i_j = index.split('_');
        var price_id = $("#price_id_" + index).val();
        var size_id = $("#size_id_" + i_j[0] + "_" + i_j[1]).val();
        var item_id = $("#item_id_" + i_j[0]).val();
        var restaurant_id = $("#restaurant_id").val();

        var size = dataEntryClient.Models.ItemSize.find({id: size_id});
        var price_collection = size.get('prices');

        if (price_collection.length == 1) {
          generate_alert(false, "Size needs to have atleast one price!")
          return false;
        }

        var confirm = window.confirm("Are you sure?");
        if (confirm == true) {
          if (price_id.split('_')[0] != "new") {
            // validations
            var message = size.validate_delete(price_collection);
            if (message != "") {
              generate_alert(false, message);
              return false;
            }

            var price = dataEntryClient.Models.ItemPrice.find({id: price_id});
            price.destroy({url: 'item_prices/' + price_id});
            // this.render({
            //   restaurant_id: restaurant_id
            // });
            generate_alert(false, "Deleted");
          }
          price_collection.remove({id : price_id});
          $("#price_row_" + index).remove();
        }
      },

      attribute_changed: function (e) {
        var id = e.currentTarget.id;
        var field = e.currentTarget.dataset.field;
        var info = id.split("_");
        var value = $("#" + id).val();
        var item_id = $("#item_id_" + info[2]).val();

        if ((_.contains([9, 16, 17], e.keyCode)) || (e.ctrlKey) || (e.shiftKey) || (e.altKey)) {
          return false;
        }

        var item = _.filter(this.items.models, function(m) { return m.id == item_id; })[0]
        switch (info[1]) {
          case 'name':
          case 'description':
            value = remove_spaces(value.toUpperCase());
            (item.get(field) != value) ? item.set(field, value) : true;
            break;
          case 'aps':
            value = $("#" + id).is(":checked");
            (item.get(field) != value) ? item.set(field, value) : true;
            break;
          case 'size':
          case 'choices':
            var size_id = $("#size_id_" + info[2] + "_" + info[3]).val();
            var size = item.get('sizes').find({ id: size_id});
            (size.get(field) === value) ? true : size.set(field, value);
            break;
          case 'price':
          case 'timings':
            var size_id = $("#size_id_" + info[2] + "_" + info[3]).val();
            var size = item.get('sizes').find({ id: size_id});
            var price_id = $("#price_id_" + info[2] + "_" + info[3] + "_" + info[4]).val();
            var price = size.get('prices').find({id : price_id});
            (price.get(field) === value) ? true : price.set(field, value);
            break;
          default: break;
        }
      },

      save_items: function () {
        var restaurant_id = $("#restaurant_id").val();
        var that = this;

        start_loading();
        this.items.save({
          success: function(response) {
            stop_loading();

            that.render({
              restaurant_id: restaurant_id
            });
            generate_alert(true, response.message);
          },

          error: function(response, error) {
          stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });
      },

      serial_num: function (index, start) {
        var last = parseInt($('#item_count').val());
        for (var i = index; i < last; i++) {
          if (!_.isEmpty($('#sr_num_' + i))) {
            $('#sr_num_' + i).html(start);
            start = start + 1;
          }
        }
      },

      // on_keypress: function(e) {
      //   if (e.ctrlKey) {
      //     switch (e.keyCode) {
      //       case 83: // ctrl + S
      //         this.save_items();
      //         return false;
      //       case 65: // ctrl + A
      //         this.add_item();
      //         return false;
      //       // case 85: // ctrl + u
      //       //   if (e.currentTarget.dataset != undefined) {
      //       //     var i = e.currentTarget.dataset.index
      //       //     if (i != undefined && !_.contains(i, "_")) {
      //       //       this.add_size(e);
      //       //     }
      //       //   }
      //       //   break;
      //       // case 89: // ctrl + y
      //       //   if (e.currentTarget.dataset != undefined) {
      //       //     var i = e.currentTarget.dataset.index
      //       //     if (i != undefined && _.contains(i, "_")) {
      //       //       this.add_price(e);
      //       //     }
      //       //   }
      //       //   break;
      //     }
      //   }
      //   return true;
      // },

      edit: function (e) {
        var i = parseInt(e.currentTarget.dataset.index);
        var item_id = e.currentTarget.dataset.item;
        var item = _.filter(this.items.models, function(m) { if (m.id == item_id) {return m} })[0];
        var that = this;

        var html = partial('partials_item', {
          i: i,
          sr_num: parseInt($('#sr_num_' + i).html()),
          id: item.get('id'),
          name: item.get('name'),
          description: item.get('description'),
          sizes: item.get('sizes'),
          choices_list: this.choices.models,
          timings_list: this.timings.models,
          map: this.map,
          is_item_price_variable: item.get('is_item_price_variable'),
          edit_mode: true
        });

        $('#' + e.currentTarget.id).removeClass('in_display_mode');
        $('#listing_item_' + i).html(html);
        _.each(item.get('sizes').models, function (size, j) { that.assign_selects(i, j) });
      }
    });
});