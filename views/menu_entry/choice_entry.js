define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.ChoiceEntryView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/menu_entry/choice_entry.ejs'],

      initialize: function (options) {
      	this.options = options;
      },

      render: function(options) {
      	global_observer.trigger("header_changed", {'restaurant_id' : this.options.restaurant_id, 'user_type':"outsource", 'active_tab' : 'choices'});
      	this.choices = new dataEntryClient.Collections.ChoiceCollection({restaurant_id: this.options.restaurant_id});
        var that = this;
      	close_sidebar();
      	that.choices.fetch ({
      		success: function(data, response) {
      			var temp = that.template({
      				choices: data.models,
              restaurant_id: data.restaurant_id,
              restaurant_name: response.meta.restaurant_name
      			});
      			that.$el.html(temp);
      			that.loadPlugins();
      			stop_loading();

      			if (that.success) {
              generate_alert(true,"Saved successfully");
            }

      			return that;
      		},
        	error: function(data, response, error) {
          	stop_loading();
          	generate_alert(false,$.parseJSON(response.responseText).message);
        	}
        });
      },
      events: {
        'click .add_choice': 'add_choice',
        'click .add_option': 'add_option',
        'click .delete_choice': 'delete_choice',
        'click .delete_option': 'delete_option',
        'click .save': 'save_all',
        'keyup .listen_change' : 'attribute_changed',
        'change .listen_change' : 'attribute_changed',
        'focusin .editing': 'editing',
        'focusout .editing': 'edited'
    	},

      loadPlugins: function() {
        _.each(this.choices.models, function(choice) {
          choice.listenTo(choice.get('options'), 'add', function () {
            choice.changed.options = choice.get("options");
          });

          _.each(choice.get('options').models, function(option) {
            option.listenTo(option, 'change', function () {
              choice.changed.options = choice.get("options");
            });
          });
        });
      },

      add_choice: function (e) {
        e.preventDefault();
        var i = parseInt($("#last_choice_index").val());
        var total_c = parseInt($('#total_choices').html());
        var choice_id = "new_" + i;

        var choice = dataEntryClient.Models.Choice.findOrCreate({id: choice_id});
        this.choices.add(choice);

        choice.listenTo(choice.get('options'), 'add', function () {
          choice.changed.options = choice.get("options");
        });

        var html = partial("partials_choice_entry", {
          id: choice.get('id'),
          sr_num: this.choices.length,
          name: "",
          label: "",
          label_for_restaurant: "",
          min: "",
          max: "",
          description: "",
          options: false,
          i: i
        });

        $("#last_choice_index").val(i + 1);
        $(".listing_choices").append(html);
        $('#total_choices').html(total_c + 1);
        e.currentTarget = $('#add_option_' + i)[0];
        this.add_option(e);
        $('#choice_name_' + i).focus();
      },

      add_option: function (e) {
        var currentEl = e.currentTarget;
        var i = parseInt(currentEl.dataset.index);
        var j = parseInt($("#last_options_index_" + i).val());
        var option_id = "new_" + i + "_" + j;
        var choice_id = $("#choice_id_" + i).val();

        var option = dataEntryClient.Models.ChoiceOption.findOrCreate({id: option_id});
        option.set({max_number: 1, price: 0, veg_type: Object.keys(window.collections.veg_types)[0]});

        var choice = dataEntryClient.Models.Choice.find({id: choice_id});
        choice.get('options').add(option);

        var html = partial("partials_choice_option", {
          id: option.get('id'),
          name: "",
          veg_type: Object.keys(window.collections.veg_types)[0],
          max_number: 1,
          price: 0,
          default_check: false,
          j: j,
          i: i
        });

        $("#last_options_index_" + i).val(j + 1);
        $("#listing_options_" + i).append(html);
      },

      delete_choice: function (e) {
        e.preventDefault();
        var i = e.currentTarget.dataset.index;
        var start = parseInt($('#sr_num_' + i).html());
        var total_c = parseInt($('#total_choices').html());
        var restaurant_id = $("#restaurant_id").val();
        var choice_id = $("#choice_id_" + i).val();
        var confirm = window.confirm("Are you sure?");

        if (confirm == true) {
          if (choice_id.split("_")[0] != "new") {
            var choice = dataEntryClient.Models.Choice.find({ id : choice_id });
            var that = this;
            choice.destroy({
              url: 'restaurants/' + restaurant_id + '/choice/' + choice_id,
              success: function (data, response, error) {
                that.render({
                  restaurant_id: restaurant_id
                });
                generate_alert(true, response.message);
              },
              error: function (data, response, error) {
                stop_loading();
                generate_alert(false, response.responseJSON.message);
                return false;
              }
            });
          } else {
            this.choices.remove({id : choice_id});
            $("#listing_options_" + i).remove();
            $("#choice_row_" + i).remove();
            $("#choice_hr_" + i).remove();
            this.serial_num(i, start);
          }
          $('#total_choices').html(total_c - 1);
        }
      },

      delete_option: function (e) {
        e.preventDefault();
        var index = e.currentTarget.dataset.index;
        var i = index.split('_')[0];
        var restaurant_id = $("#restaurant_id").val();
        var choice_id = $("#choice_id_" + i).val();
        var option_id = $("#option_id_" + index).val();
        var choice = _.filter(this.choices.models, function(m) { if (m.id == choice_id) {return m} })[0];

        if (choice.get('options').length == 1) {
          generate_alert(false, "Choice needs to have atleast one option!")
          return false;
        }

        var confirm = window.confirm("Are you sure?");
        if (confirm == true) {
          if (option_id.split("_")[0] != "new") {

            var message = choice.validate_options(choice.get('options'));
            if (message != "") {
              generate_alert(false, message);
              return false;
            }

            var option = dataEntryClient.Models.ChoiceOption.find({ id : option_id});
            start_loading();
            option.destroy({url: 'restaurants/' + restaurant_id + '/option/' + option_id});
            stop_loading();
            this.render({
              restaurant_id: restaurant_id
            });
            generate_alert(false, "Deleted");
          } else {
            choice.get('options').remove({id : option_id});
            $("#option_row_" + index).remove();
          }
        }
      },

      editing: function (e) {
        e.preventDefault();
        var i = e.currentTarget.dataset.index;
        var id = e.currentTarget.id
        $("#" + id).css('background','rgb(255, 247, 169)');
      },

      edited: function (e) {
        e.preventDefault();
        var i = e.currentTarget.dataset.index;
        var id = e.currentTarget.id
        $("#" + id).css('background','white');
      },

      attribute_changed: function (e) {
        var id = e.currentTarget.id;
        var index = e.currentTarget.dataset.index.split('_');
        var field = $("#" + id).val();
        var info = id.split("_");
        var string = info.slice();

        var choice_id = $('#choice_id_' + index[0]).val();
        var choice = _.filter(this.choices.models, function(m) { if (m.id == choice_id) {return m} })[0]

        if ((_.contains([9, 16, 17], e.keyCode)) || (e.ctrlKey) || (e.shiftKey) || (e.altKey)) {
          return false;
        }

        if (info[0] == "choice") {
          string.shift();
          string.pop();
          string = string.join('_');
          (choice.get(string) === field) ? true : choice.set(string, field);
        } else if (info[0] == "option") {
          var option_id = $('#option_id_' + index[0] + '_' + index[1]).val();
          var option = choice.get('options').find({ id: option_id });
          
          string.shift();
          string.pop();
          string.pop();
          string = string.join('_');

          switch (info[1]) {
          case 'name':
          case 'max':
          case 'price':
          case 'veg':
            (option.get(string) === field) ? true : option.set(string, field);
            break;
          case 'default':
            var defaults = (choice.get('defaults') == undefined) ? [] : choice.get('defaults');

            if ($("#option_default_" + index[0] + '_' + index[1]).is(":checked") == true) {
              defaults.push(option.id);
            } else if (!_.isEmpty(defaults)) {
              defaults = _.without(defaults, option.id);
            }

            choice.set('defaults', $.unique(defaults));
            choice.changed.options = choice.get("options");
            break;
          }
        }
      },

      serial_num: function (index, start) {
        var last = parseInt($("#last_choice_index").val());
        for (var i = index; i < last; i++) {
          if (!_.isEmpty($('#sr_num_' + i))) {
            $('#sr_num_' + i).html(start);
            start = start + 1;
          }
        }
      },

      save_all: function () {
        var that = this;
        var restaurant_id = $("#restaurant_id").val();

        start_loading();
        this.choices.save({
          success: function (data) {
            stop_loading();
            that.render({
              restaurant_id: restaurant_id
            })
            generate_alert(true, data.message.toString());
          },
          error: function (data, response, error) {
            stop_loading();
            generate_alert(false, data.responseJSON.message);
            return false;
          }
        });
      }
    });
});
