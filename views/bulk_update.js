define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var BulkUpdateView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/bulk_update.ejs'],
      ids: [],
      initialize: function () {
        close_sidebar();
      },

      render: function () {

        this.$el.html(this.template());
        // this.loadPlugins;
      },

      events: {
        //'click #save_changes_accounts': 'save_changes'
        'keypress #form_ids': 'trigger_enter',
        'click #submit_forms': 'submit_form_ids',
        'click #proceed': 'show_update',
        'submit #update_status_form': 'update_changes'
      },
      loadPlugins: function () {
        $("#status_change").append("<option value='2'>ACTIVE </option>");
        $("#status_change").append("<option value='3'>INACTIVE </option>");
        $("#new_status").append("<option value='2'>ACTIVE </option>");
        $("#new_status").append("<option value='3'>INACTIVE </option>");
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
        $(".schedule_time").timepicker({'timeFormat': 'H:i'});
        $(".schedule_date").datepicker({
          format: 'mm/dd/yyyy',
          onRender: function (date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
          }
        }).on('changeDate', function (e) {
          $(this).datepicker('hide');
        }).data('datepicker');

      },

      submit_form_ids: function () {
        var form_ids = $('#form_ids').val();
        form_ids = form_ids.split(/[ ,]+/);
        for (var i = 0; i < form_ids.length; i++) {
          form_ids[i] = form_ids[i].toUpperCase();
        }
        $.ajax({
          type: "POST",
          url: 'restaurants/bulk_update',
          data: {form_ids: form_ids},
          success: function (data) {
            $('#no_of_restaurant').removeClass('hidden');
            $('#no_of_restaurant').children('span').text(data.list.length);
            $("#list_restaurants").html(partial("partials_bulk_update", {restaurants: data.list}));
            window.ids = _.collect(data.list, function (x) {
              return x.id;
            }).join(",");
            // $("#bulk_update_form").html(partial("partials_update_status", {restaurant_id : ids}))
          },
          failure: function (e) {
            console.log('nope', e);
          }

        })
      },

      show_update: function () {
        $("#proceed").css({display: "none"});
        $("#list_restaurants").removeClass("col-sm-12").addClass("col-sm-6");
        $("#bulk_update_form").html(partial("partials_update_status", {restaurant_id: window.ids}));
        this.loadPlugins();

      },

      update_changes: function (e) {
        e.preventDefault();
        start_loading();
        var raw_obj = $(".form-horizontal").serializeObject();
        var updateModel = dataEntryClient.Models.UpdateStatusModel.findOrCreate({id: raw_obj.id}); // ids as array
        var status_update = updateModel.buildObj(raw_obj); // as array
        var that = this;
        updateModel.url = 'restaurants/bulk_status_update';
        updateModel.save(status_update, {
          type: 'post',
          success: function (data) {
            stop_loading();
            generate_alert(true, "Successfully updated/ scheduled update.");
            window.location.href = "#restaurants";
          },
          error: function (data, response, error) {

            stop_loading();
            var data = $.parseJSON(response.responseText);
            console.log(data, "anshum");
            generate_alert(false, data.message);
          }
        })
      },
      trigger_enter: function (e) {
        if (e.which == 13) {
          $('#submit_forms').click();
        }
      }

    });
    return BulkUpdateView;
  });