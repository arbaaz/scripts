define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var EditProfileView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/edit_profile.ejs'],
      initialize: function () {

      },
      render: function (options) {
        start_loading();
        var that = this;
        var temp = that.template(options);
        that.$el.html(temp);
        that.loadPlugins();
        stop_loading();
      },
      loadPlugins: function () {
        close_sidebar();
      },
      events: {
        "submit #user_profile_form": "submit",
        "submit #user_avatar_form": "submit_avatar",
        "click #deleteavatar": "delete_avatar"
      },
      submit: function (e) {
        e.preventDefault();
        start_loading();
        var datastr = $('#user_profile_form').serialize();
        $.ajax({
          skip_url_prefix: true,
          url: '/user/edit_profile.json',
          success: function (data, status) {
            stop_loading();
            generate_alert(true, "Your profile has been updated");
            window.user.set_profile(data);
            window.global_observer.trigger('header_changed');
          },
          error: function (xhr, desc, err) {
            stop_loading();
            generate_alert(false, xhr.responseJSON.message);
          },
          data: datastr,
          type: 'post'

        });
      },
      submit_avatar: function (e) {
        var that = this;
        e.preventDefault();
        start_loading();
        var formData = new FormData();
        var obj = $("#user_avatar_form");

        /* ADD FILE TO PARAM AJAX */
        $.each($(obj).find("input[type='file']"), function (i, tag) {
          $.each($(tag)[0].files, function (i, file) {
            formData.append(tag.name, file);
          });
        });
        var params = $(obj).serializeArray();
        $.each(params, function (i, val) {
          formData.append(val.name, val.value);
        });

        $.ajax({
          skip_url_prefix: true,
          url: '/user/edit_profile_avatar.json',
          data: formData,
          cache: false,
          contentType: false,
          processData: false,
          type: 'POST',
          success: function (data) {
            stop_loading();
            generate_alert(true, "Your profile picture has been updated");
            window.user.set_profile(data);
            that.render();
            window.global_observer.trigger('header_changed');
          },
          error: function (xhr, desc, err) {
            stop_loading();
            generate_alert(false, xhr.responseJSON.message);
          }
        });
      },
      delete_avatar: function (e) {
        var that = this;
        e.preventDefault();
        start_loading();
        $.ajax({
          skip_url_prefix: true,
          url: '/user/edit_profile_avatar.json',
          type: 'DELETE',
          success: function (data) {
            stop_loading();
            generate_alert(true, "Your profile picture has been deleted");
            window.user.set_profile(data);
            that.render();
            window.global_observer.trigger('header_changed');
          },
          error: function (xhr, desc, err) {
            stop_loading();
            generate_alert(false, xhr.responseJSON.message);
          }
        })
      }

    });
    return EditProfileView;
  });