define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var TimingModel = Backbone.RelationalModel.extend({

      url: function () {
        return "timings/" + this.id;
      },

      initialize: function (options) {
        this.id = options.id;
      },

      defaults: {},

      validate: function (str) {
        var valid = new RegExp("^([01][0-9]|2[0-4])([:][0-5][0-9])$")
        return valid.test(str) ? true : false
      },

      validate_overlap: function (timings) {
        var intervals = [];
        var overlap = false

        _.each(timings, function (timing) {
          // if start > end then split at midnight
          if (timing.start_in_secs > timing.end_in_secs) {
            intervals.push([timing.start_in_secs, 86400]);
            intervals.push([0, timing.end_in_secs]);
          } else if (timing.start_in_secs == timing.end_in_secs) {
            overlap = true;
          } else {
            intervals.push([timing.start_in_secs, timing.end_in_secs]);
          }
        })

        if (!overlap) {
          _.each(intervals, function (timing, i) {
            _.each(intervals, function (interval, j) {
              if (i != j) {
                if ((interval[0] < timing[0] && timing[0] < interval[1]) || (interval[0] < timing[1] && timing[1] < interval[1]) || (_.isEqual(timing, interval))) {
                  overlap = true;
                }
              }
            })
          })
        }
        return overlap
      },

      buildObj: function (obj) {
        var count = parseInt(obj['timing_count']);
        obj.timings = [];
        for (var i = 0; i < count; i++) {
          if (obj['delete_' + i] == "false") {
            var timing = {};
            timing.id = obj['timing_' + i];
            timing.timing_type = parseInt($('#timing_type_' + i).val());
            timing.name = obj['timing_name_' + i].toUpperCase();
            if (this.validate(obj['timing_start_' + i]))
              timing.start_str = obj['timing_start_' + i];
            else {
              generate_alert(false, "Wrong Timing in " + timing.name)
              return false
            }
            if (this.validate(obj['timing_end_' + i]))
              timing.end_str = obj['timing_end_' + i];
            else {
              generate_alert(false, "Wrong Timing in " + timing.name)
              return false
            }
            timing.to_delete = obj['delete_' + i];

            var time_start = timing.start_str.split(":");
            var time_end = timing.end_str.split(":");
            // converting to seconds
            var start = (parseInt(time_start[0]) * 3600 + parseInt(time_start[1]) * 60);
            var end = (parseInt(time_end[0]) * 3600 + parseInt(time_end[1]) * 60);
            timing.start_in_secs = start;
            timing.end_in_secs = end;

            obj.timings.push(timing);
          }
        }
        ;
        return obj;
      },

      parse: function (response, options) {
        return response;
      }


    });
    return TimingModel;
  });