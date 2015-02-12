define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var AssignmentFormView = Backbone.View.extend({

      initialize: function () {
      },
      el: '#page',
      template: JST['app/scripts/templates/assignment_form.ejs'],
      render: function (options) {
        var template = this.template();
        this.$el.html(template);
      },
      events: {
        "submit #create_new": "create_new"
      },
      create_new: function (e) {
        H.start_loading();
        e.preventDefault();
        $.ajax({
          url: "agent/self_assign",
          type: "POST",
          data: {
            "restaurant_name": this.$("#name").val(),
            "form_id": this.$("#form_id").val()
          },
          success: function (data) {
            H.stop_loading();
            window.created_new = true;
            window.location.hash = "outsource/agent";
            return true;
          },
          error: function (response, status, error) {
            H.stop_loading();
            H.generate_alert(false, $.parseJSON(response.responseText).message, "center");
            return false;
          }
        });
      }

    });
    return AssignmentFormView;
  });
