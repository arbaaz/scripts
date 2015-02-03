define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var LogsView = Backbone.View.extend({  // View to display logs 

      el: '#page',
      template: JST['app/scripts/templates/logs.ejs'],

      initialize: function () {

      },

      render: function (options) {
        var that = this;
        start_loading();
        if (options.id) {
          $.ajax({
            url: 'revisions/' + options.id + '/get_children_revision_log',
            type: "GET",
            data: {type: "restaurant"},
            success: function (data) {
              that.find_diff(data.message.versions);

              that.data = _.groupBy(data.message.versions, function (num, i) {
                return Math.floor(i / 10);
              });
              that.total = data.message.versions ? data.message.versions.length : 0;
              that.meta = data.meta;
              var temp = that.template({
                page: 1,
                versions: that.data[0],
                total: that.total,
                restaurant: that.meta
              });
              that.$el.html(temp);
              stop_loading();
              that.loadPlugins();

            },
            error: function (data) {
              stop_loading();

              if (data.status == 401) {
                close_sidebar();
                Backbone.history.navigate('404', true);
                generate_alert(true, "Access denied. You dont have permissions to view logs.");
                return false;
              }

            }
          });
        } else {

          var temp = that.template({
            page: options.page,
            versions: options.data,
            total: options.total,
            restaurant: options.meta
          });
          that.$el.html(temp);
          stop_loading();
          that.loadPlugins();

        }


      },
      loadPlugins: function () {
        close_sidebar();
      },
      events: {
        'click .page_number': 'page_number'
      },
      page_number: function (e) {

        var id = e.currentTarget.id;

        if (id == $("#current_page_num").prop("value") || $("#total_page_num").prop("value") == "0") {
          return false;
        }
        ;
        start_loading();
        if (id == "next") {
          var next = parseInt($("#current_page_num").prop("value")) + 1;
          var total = parseInt($("#total_page_num").prop("value"));
          if (next <= total) {
            this.page = next;
            this.render({page: this.page, data: this.data[parseInt(this.page) - 1], total: this.total, meta: this.meta})
          } else {
            stop_loading();
          }
        } else if (id == "previous") {
          var previous = parseInt($("#current_page_num").prop("value")) - 1;
          if (previous >= 1) {
            this.page = previous;
            this.render({page: this.page, data: this.data[parseInt(this.page) - 1], total: this.total, meta: this.meta})
          } else {
            stop_loading();
          }
        } else {
          this.page = id;
          this.render({page: this.page, data: this.data[parseInt(this.page) - 1], total: this.total, meta: this.meta})
        }


      },
      find_diff: function (versions) {
        _.each(versions, function (version) {
          _.each(version.diff, function (value, key, item) {
            if (typeof(value[0]) === 'object' && typeof(value[1]) === 'object') {
              var remove_similar_objects = [];
              var add_different_objects = [];
              _.each(value[0], function (k, i) {
                var b = _.findWhere(value[1], {Id: k.Id})

                if (b != undefined) {
                  if (_.isEqual(k, b)) {
                    remove_similar_objects.push(k.Id);
                  } else {
                    add_different_objects.push(k.Id);
                  }
                }
              });

              // Storing only changed objects
              value[0] = _.reject(value[0], function (el) {
                return _.contains(remove_similar_objects, el.Id);
              });
              value[1] = _.reject(value[1], function (el) {
                return _.contains(remove_similar_objects, el.Id);
              });

              var diff = _.filter(value[1], function (obj) {
                return _.every(value[0], function (elm) {
                  return elm.Id != obj.Id;
                });
              });

              value[1] = _.reject(value[1], function (el) {
                return _.contains(_.pluck(diff, 'Id'), el.Id);
              });
              //Sort the two arrays
              value[0] = _.sortBy(value[0], "Id");
              value[1] = _.sortBy(value[1], "Id");
              //Add the diff
              value[1] = value[1].concat(diff);
            }

          });

        });
      }

    });
    return LogsView;
  });