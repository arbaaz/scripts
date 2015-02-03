define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var UpdateStatusView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/update_status.ejs'],
      render: function (options) {
        var restaurants = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id});
        var that = this;
        that.options = options;
        start_loading();
        restaurants.fetch({
          success: function (data) {
            //console.log(data);
            if (restaurants.get('status') == get_status_id("VIRTUAL")) {
              Backbone.history.navigate('404', true);
              stop_loading();
              return false;
            }
            var temp = that.template({
              restaurant: data
            });
            that.$el.html(temp);
            that.loadPlugins();
            if (options) {
              if (that.options.success) {
                generate_alert(true, that.options.message);
              }
            }
            stop_loading();
            var status_logs_view = new dataEntryClient.Views.StatusLogsView({id: options.id});
            status_logs_view.render({id: options.id});
          },
          error: function (data, response, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        })

        //this.$el.html(this.template({}));
      },
      loadPlugins: function () {
        var currentStatusVal = $("#current_status").val();
        var statusChangeEl = $("#status_change");
        var futureStatusEl = $("#new_status");
        var statusEnum = [
          {id: 2, status: 'ACTIVE'},
          {id: 3, status: 'INACTIVE'}
        ]
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
        if (currentStatusVal == window.collections.status.ACTIVE) {
          $('#js-update-status-reason-form-group').show();
        } else {
          $('#js-update-status-reason-form-group').hide();
        }
        this.$(".schedule_time").timepicker({'timeFormat': 'H:i'});
        this.$(".schedule_date").datepicker({
          format: 'mm/dd/yyyy',
          onRender: function (date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
          }
        }).on('changeDate', function (e) {
          $(this).datepicker('hide');
        }).data('datepicker');

        close_sidebar();
        // appends option tag to selection elements excluding current status
        $.each(statusEnum, function (index, statusItem) {
          // futureStatusEl.append($('<option>').text(statusItem.status).val(statusItem.id));
          if (statusItem.id != currentStatusVal) {
            statusChangeEl.append($('<option>').text(statusItem.status).val(statusItem.id));
          }
        });
      },
      events: {
        'submit #update_status_form': 'update_changes',
        // 'change #status_change': 'adjust_status',
        'click .override': 'update_changes',
        'change #new_status': 'select_change',
        'change #status_change': 'select_change'
      },
      select_change: function (e) {
        var statusChangeVal = $("#status_change").val();
        var futureStatusVal = $("#new_status").val();
        var statusEnum = window.collections.status;
        if (e.currentTarget.value == statusEnum.INACTIVE) {
          $('#js-update-status-reason-form-group').show();

        } else if (!(statusChangeVal == statusEnum.INACTIVE || futureStatusVal == statusEnum.INACTIVE)) {
          $('#js-update-status-reason-form-group').hide();
        }
        console.log('status has been changed');
      },
      update_changes: function (e) {
        e.preventDefault();
        start_loading();
        var raw_obj = $(".form-horizontal").serializeObject();
        var updateModel = dataEntryClient.Models.UpdateStatusModel.findOrCreate({id: raw_obj.id});
        var status_update = updateModel.buildObj(raw_obj);
        var that = this;
        if (e.currentTarget.dataset.override != "true") {
          status_update.override = "false";
        } else {
          status_update.override = "true";
          $("#overrideModal").modal('hide');
        }
        that.options = this.options;
        updateModel.save(status_update, {
          type: 'post',
          success: function (data) {
            stop_loading();
            that.render({
              id: that.options.id,
              success: true,
              message: "Successfully updated/ scheduled update."
            });
          },
          error: function (data, response, error) {
            stop_loading();
            var data = $.parseJSON(response.responseText);
            if (data.ERROR == "ALREADY_SCHEDULED") {
              $("#modal_content").html(data.message);
              $("#overrideModal").modal('show');
            } else {
              generate_alert(false, data.message);
            }
          }
        })
      },

    });
    return UpdateStatusView;
  });