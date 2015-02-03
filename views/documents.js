define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var DocumentsView = Backbone.View.extend({

      initialize: function (attrs) {
        this.options = attrs;
      },
      el: '#page',
      template: JST['app/scripts/templates/documents.ejs'],
      render: function (options) {
        var that = this;
        that.options = options;
        if (options.id) {
          dataEntryClient.restaurant_id = options.id;
          that.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id});
          if (!that.restaurant.get("form_id")) {
            that.restaurant.fetch({async: false});
          }
          that.documents = new dataEntryClient.Collections.DocumentCollection({id: options.id});
          global_observer.trigger("header_changed", {'restaurant_id': options.id, 'active_tab': 'profile'});
          start_loading();
          that.documents.fetch({
            success: function (data, collection) {
              //console.log(collection.logo);
              var template = that.template({
                restaurant: that.restaurant,
                documents: data.models,
                sidebar_active_tab: "documents",
                id: options.id,
                count: data.length,
                logo: data.logo
              });
              that.$el.html(template);
              compile_sidebar({
                id: that.restaurant.get("id"),
                sidebar_active_tab: "documents"
              });

              that.topNavigation = new dataEntryClient.Views.RestaurantTopNavigationView();
              that.topNavigation.render(that.restaurant, collection.meta.menu_stash);

              stop_loading();
              if (that.options.success) {
                generate_alert(true, "Document Operation Successfull");
              }
              that.load_plugins();
              return that;
            },
            error: function (data, response, error) {
              stop_loading();
              generate_alert(false, $.parseJSON(response.responseText).message);
            }
          });
        }
      },
      load_plugins: function () {
        initialize_sidebars();
        // delete image events
        $("#delete_current_logo").click(function () {
          $("#delete_logo").prop("value", true);
          console.log($("#delete_logo").prop("value"));
          $("#delete_info").removeClass("hide");
          $("#current_logo").prop("src", "http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=X+image+deleted").prop("alt", "Logo deleted!");
          $(this).addClass("hide");
          $(this).siblings("#download_logo").hide();
          $("#restore_logo").removeClass("hide");
        });
        $("#restore_logo").click(function () {
          $("#delete_logo").prop("value", false);
          console.log($("#delete_logo").prop("value"));
          $("#delete_info").addClass("hide");
          $(this).addClass("hide");
          $(this).siblings("#download_logo").show();
          $("#delete_current_logo").removeClass("hide");
          $("#current_logo").prop("src", $("#logo_url").prop("value")).prop("alt", "Error loading the image!");
        })

        // download logo

      },
      events: {
        'click #save_documents': 'save_changes',
        'click #add_document': 'add_document',
        'click .upload': 'upload_document',
        'click .delete_doc': 'delete_document',
        'click .update_logo': 'update_logo'
      },

      save_changes: function (e) {

      },

      add_document: function (e) {
        e.preventDefault();
        var count = parseInt($("#count").val());
        var currentEl = $(e.currentTarget);
        var html = partial("partials_document", {
          i: count + 1
        });
        $('#add_document').before(html);
        $("#count").val(count + 1);
        $(e.currentTarget).hide();
      },

      cleanup: function () {
        this.undelegateEvents();
        $(this.el).empty();
      },

      upload_document: function (e) {
        start_loading();
        e.preventDefault();
        var formData = new FormData();
        var i = $(e.currentTarget).prop("id");
        console.log(i);
        if (document.getElementById("doc_" + i).files[0]) {
          formData.append("document", document.getElementById("doc_" + i).files[0]);
          formData.append("name", $("#docname_" + i).val() ? $("#docname_" + i).val() : "Untitled");
        } else {
          generate_alert(false, "No file to upload!");
        }
        var that = this;
        var restaurant_id = $("#restaurant_id").val();
        var documents = dataEntryClient.Models.DocumentModel.findOrCreate({id: $("#restaurant_id").val()});
        documents.save(null, {
          type: 'put',
          data: formData,
          contentType: false,
          processData: false,
          success: function (data) {
            stop_loading();
            that.render({
              id: restaurant_id,
              success: true
            });
          },
          error: function (data, response, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });
      },

      delete_document: function (e) {
        start_loading();
        e.preventDefault();
        var id = $(e.currentTarget).siblings("#delete_id").val();
        var that = this;
        var restaurant_id = $("#restaurant_id").val();
        var documents = dataEntryClient.Models.DocumentModel.findOrCreate({id: $("#restaurant_id").val()});
        var url = documents.url();
        var obj = {};
        obj.delete_id = id;
        $.ajax({
          type: 'put',
          data: obj,
          url: url,
          success: function (data) {
            stop_loading();
            that.render({
              id: restaurant_id,
              success: true
            });
          },
          error: function (response, status, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });
      },

      update_logo: function (e) {
        start_loading();
        e.preventDefault();
        var formData = new FormData();
        if ($("#delete_logo").prop("value") == "true") {
          formData.append("logo", "undefined");
        } else {
          (document.getElementById("logo").files[0]) ? formData.append("logo", document.getElementById("logo").files[0]) : console.log("no change in logo");
        }
        ($("#delete_logo").prop("value") == "true") ? formData.append("delete_logo", true) : formData.append("delete_logo", false);
        var that = this;
        var restaurant_id = $("#restaurant_id").val();
        var documents = dataEntryClient.Models.DocumentModel.findOrCreate({id: $("#restaurant_id").val()});
        documents.save(null, {
          type: 'put',
          data: formData,
          contentType: false,
          processData: false,
          success: function (data) {
            stop_loading();
            that.render({
              id: restaurant_id,
              success: true
            });
          },
          error: function (data, response, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
          }
        });
      }

    });
    return DocumentsView;
  });