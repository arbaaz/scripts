define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var OutsourceHead = Backbone.View.extend({

      initialize: function (attrs) {
        this.options = attrs;
        close_sidebar();
      },
      el: '#page',
      template: JST['app/scripts/templates/outsource_head.ejs'],
      // template_form: JST['app/scripts/templates/assignment_form.ejs'],
      render: function (options) {
        var that = this;
        // if (options.id) {
        //   var AssignmentModel = new dataEntryClient.Models.AssignmentModel({id: options.id});
        //   AssignmentModel.fetch({
        //     success: function(data) {
        //       var template = that.template_form({
        //         assignment: data
        //       });
        //       that.$el.html(template);
        //       return that;
        //     },
        //     error: function(data) {
        //       console.log(data);
        //     }
        //   });
        // } else {
        var Assignment = new dataEntryClient.Collections.AssignmentCollection();
        start_loading();
        that.options = options;
        global_observer.trigger("header_changed", {'active_tab': null});
        var new_url = Assignment.url + "?";
        if (options) {
          if (options.page_num) {
            new_url += "&page=" + options.page_num;
          }
          if (options.query) {
            new_url += "&query=" + options.query;
          }
        }
        Assignment.url = new_url;
        Assignment.fetch({
          success: function (data, collection) {
            var template = that.template({
              restaurants: data.models,
              meta: collection
            });
            that.$el.html(template);
            stop_loading();
            that.loadPlugins();
            return that;
          },
          error: function (data, response, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });
        return false;
      },
      loadPlugins: function () {
        /*this.$('#filter').keyup(function () {
         var rex = new RegExp($(this).val(), 'i');
         $('.searchable tr').hide();
         console.log(rex);
         $('.searchable tr').filter(function () {
         return rex.test($(this).text());
         }).show();
         });*/
        this.$(document).ready(function () {
          $("#filter").focus().val($("#filter").val()); // to set the cursor at the end of the text, if any
        });
        var that = this;
        var global_filters = {};
        global_filters.page_num = $("#current_page_num").prop("value");
        global_filters.query = $("#filter").val();
        var apply_filters = function () {
          that.render(global_filters);
        };

        //search
        $("#filter").on("keydown", function (e) {
          if (e.keyCode == 13) {
            if ($(this).val() != "") {
              global_filters.query = $(this).val();
            } else {
              global_filters.query = "";
              global_filters.page_num = 1;
            }
            apply_filters();
          }
        });

        // Pagination code start
        $(".page_number").click(function () {
          if ($(this).prop("id") == $("#current_page_num").prop("value") || $("#total_page_num").prop("value") == "0") {
            return false;
          }
          ;
          start_loading();
          if ($(this).prop("id") == "next") {
            var next = parseInt($("#current_page_num").prop("value")) + 1;
            var total = parseInt($("#total_page_num").prop("value"));
            if (next <= total) {
              global_filters.page_num = next;
              apply_filters();
            } else {
              stop_loading();
            }
          } else if ($(this).prop("id") == "previous") {
            var previous = parseInt($("#current_page_num").prop("value")) - 1;
            if (previous >= 1) {
              global_filters.page_num = previous;
              apply_filters();
            } else {
              stop_loading();
            }
          } else {
            global_filters.page_num = $(this).prop("id");
            apply_filters();
          }

        });
      },
      events: {
        'click .diff': 'make_diff',
        'click .activate': 'activate',
        'click .send_diff': 'send_diff',
        'click .export': 'export'
      },
      make_diff: function (e) {
        e.preventDefault();
        var currentEl = $(e.currentTarget);
        var ids = [];
        $("#diff_" + currentEl.data('formId') + " :input").each(function () {
          if ($(this).is(":checked")) {
            ids.push($(this).val());
          }
        });
        if (ids.length == 0 || ids.length == 1) {
          generate_alert(false, "You need to check 2 agents for diff!");
          return false;
        }
        if (ids.length > 2) {
          generate_alert(false, "You have checked more than 2 agents. you can only check 2 at a time.");
          return false;
        }
        // window.location = "/restaurant/data_entry/diff_beta?id1=" + ids[0] + "&id2=" + ids[1];
        Backbone.history.navigate('diff/' + ids[0] + '/' + ids[1], true)
        return true;
      },
      activate: function (e) {
        start_loading();
        e.preventDefault();
        var currentEl = $(e.currentTarget);
        var ids = [];
        $("#diff_" + currentEl.data('formId') + " :input").each(function () {
          if ($(this).is(":checked")) {
            ids.push($(this).val());
          }
        });
        if (ids.length == 0 || ids.length == 1) {
          stop_loading();
          generate_alert(false, "You need to check 2 agents for completing!");
          return false;
        }
        if (ids.length > 2) {
          stop_loading();
          generate_alert(false, "You have checked more than 2 agents. you can only check 2 at a time.")
          return false;
        }
        $.ajax({
          url: "lead/restaurants/complete",
          type: "POST",
          data: {
            form_id: currentEl.data('formId'),
            restaurant_id1: ids[0],
            restaurant_id2: ids[1]
          },
          success: function (data) {
            stop_loading();
            generate_alert(true, "Successfully activated!");
            window.location.reload();
            return data;
          },
          error: function (response, status, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });
        return true;
      },
      send_diff: function (e) {
        start_loading();
        e.preventDefault();
        var currentEl = $(e.currentTarget);
        var ids = [];
        $("#diff_" + currentEl.data('formId') + " :input").each(function () {
          if ($(this).is(":checked")) {
            ids.push($(this).val());
          }
        });
        if (ids.length == 0 || ids.length == 1) {
          stop_loading();
          generate_alert(false, "You need to check 2 agents to send diff report!");
          return false;
        }
        if (ids.length > 2) {
          stop_loading();
          generate_alert(false, "You have checked more than 2 agents. you can only check 2 at a time.")
          return false;
        }
        $.ajax({
          url: "lead/restaurants/send_diff",
          type: "POST",
          data: {
            form_id: currentEl.data('formId'),
            restaurant_id1: ids[0],
            restaurant_id2: ids[1]
          },
          success: function (data) {
            stop_loading();
            generate_alert(true, "Sent Diff report");
            window.location.reload();
            return data;
          },
          error: function (response, status, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });
        return true;
      },

      export: function (e) {
        start_loading();
        e.preventDefault();
        var currentEl = $(e.currentTarget);
        var ids = [];
        var overwrite = currentEl.data('overwrite');

        if (currentEl.data('formId') != undefined) {
          $("#diff_" + currentEl.data('formId') + " :input").each(function () {
            if ($(this).is(":checked")) {
              ids.push($(this).val());
            }
          });

          $(".export_restaurant_id").val(ids[0]);

          if (ids.length != 1) {
            stop_loading();
            generate_alert(false, "You need to select 1 restaurant to export!");
            return false;
          }
        } else if (overwrite) {
          ids.push($(".export_restaurant_id").val());
        }

        $.ajax({
          url: "export",
          type: "POST",
          data: {
            restaurant_id: ids[0],
            overwrite: overwrite
          },
          success: function (data) {
            $("#overwriteModal").modal('hide');
            stop_loading();
            //generate_alert(true,"Successfully Exported");
            generate_alert(true, data.message);
            window.location.reload();
            return data;
          },
          error: function (response, status, error) {
            stop_loading();
            if (response.responseJSON.message == "Unable to export the restaurant") {
              $("#overwriteModal").modal({
                backdrop: 'static'
              });
              $("#overwriteModal").modal('show');
            } else {
              generate_alert(false, $.parseJSON(response.responseText).message);
            }
            return false;
          }
        });
        return true;
      }

    });
    return OutsourceHead;
  });