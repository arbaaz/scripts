define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var RestaurantView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/restaurants.ejs'],

      initialize: function () {
        //this.collections=get_collections();
        close_sidebar();
      },

      render: function (options) {
        var restaurants = new dataEntryClient.Collections.RestaurantCollection();
        var that = this;

        that.options = options;
        global_observer.trigger("header_changed", {'active_tab': null, 'user_type': "restaurants"});
        start_loading();
        var new_url = restaurants.url + "?";

        if (options.filters) {
          console.log(options);
          if (options.page_num) {
            new_url += "&page=" + options.page_num;
          }
          if (options.locality_id) {
            new_url += "&locality_id=" + options.locality_id;
          }
          if (options.restaurant_status) {
            new_url += "&status=" + options.restaurant_status;
          }
          if (options.cuisine_ids) {
            new_url += "&cuisine_ids=" + options.cuisine_ids;
          }
          if (options.call_as_user == true || options.call_as_user == false) {
            new_url += "&call_as_user=" + options.call_as_user;
          }
          if (options.search) {
            new_url += "&search=" + encodeURIComponent(options.search);
          }
          if (options.has_logo == true || options.has_logo == false) {
            new_url += "&has_logo=" + options.has_logo;
          }
          if (options.delivers_in) {
            new_url += "&delivers_in=" + options.delivers_in;
          }
          if (options.has_changes == true || options.has_changes == false) {
            new_url += "&has_changes=" + options.has_changes;
          }
        } else if (window.location.search) {
          new_url += window.location.search.substring(1);
        }
        restaurants.url = new_url;
        restaurants.fetch({
          success: function (data, colllection) {
            var temp = that.template({
              restaurants: data.models,
              meta: colllection.meta
            });
            that.$el.html(temp);
            stop_loading();
            if (options) {
              if (that.options.success) {
                generate_alert(true, that.options.message);
              }
            }
            that.loadPlugins();
          },
          error: function (data, response, options) {
            stop_loading();
            generate_alert(false, response.responseText ? $.parseJSON(response.responseText).message : "Failed to load");
          }
        })


        //this.$el.html(this.template({}));
      },
      loadPlugins: function () {
        var that = this;
        $('.js-status').popover({
          trigger: ' hover'
        })
        this.$("#cuisine").select2({
          placeholder: "cuisines"
        });
        this.$("#cuisine")
          .on("change", function (e) {
            apply_filters();
          })
        /*var offset_top = $("#filters_affix").position().top - $("header.header").height() - 14;
         $('#filters_affix').affix({
         offset: {
         top: offset_top
         }
         }).on("affix.bs.affix", function(){
         $("#filters_heading").hide();
         }).on("affix-top.bs.affix", function(){
         $("#filters_heading").show();
         }).on("affixed.bs.affix", function(){
         $("#filters_affix").css("top",80);
         });*/

        /*$("section#alerts").on("alerted", function(){
         console.log("alert added");
         top_height += $(this).height();
         $("div#filters_affix.affix").css("top",top_height);
         console.log($("div#filters_affix.affix").css("top"));
         })
         $("section#alerts").on("destroyed", function(){
         console.log("alert removed");
         top_height -= $(this).height();
         $("div#filters_affix.affix").css("top",top_height);
         destroyed = false;
         });*/
        /*$(window).bind('mousewheel', function(event) {
         if (event.originalEvent.wheelDelta > 5) {
         console.log('Scroll up');
         $("#filters_affix").css({"top":top_height});
         }
         else if(event.originalEvent.wheelDelta < -5) {
         console.log('Scroll down');
         $("#filters_affix").css({"top":0});
         }
         });*/
        /*this.$('#filter').keyup(function () {
         var rex = new RegExp($(this).val(), 'i');
         $('.searchable tr').hide();
         $('.searchable tr').filter(function () {
         return rex.test($(this).text());
         }).show();
         });*/

        // logo thumbnail image loader
        var thumbnails = $(".logo_thumbnail");
        $.each(thumbnails, function () {
          $(this).load(function () {
            $(this).siblings(".thumbnail_loader").hide();
            $(this).removeClass("hidden");
          });
        });

        // filters start
        var global_filters = {};

        var initialize_filters = function () {
          global_filters.restaurant_status = $('#status_filter').val();
          global_filters.call_as_user = $("#call_as_user_filter").val();
          global_filters.locality_id = get_locality_id($("#locality").val());
          global_filters.has_logo = $("#has_logo_filter").val();
          global_filters.delivers_in = get_locality_group_id($("#delivers_in").val());
          global_filters.has_changes = $("#has_changes_filter").val();
          global_filters.cuisine_ids = get_cuisine_id($('#cuisine').val());

        };
        initialize_filters();

        this.$(document).ready(function () {
          if (!global_filters) {
            $("#filter").focus();
          }
        });
        var apply_filters = function () {
          filterLocalities();
          status_filter();
          cuisine_filter();
          call_as_user_filter();
          global_search();
          has_logo_filter();
          filter_delivers_in();
          has_changes_filter();
          redirect_with_filters();
        };

        var redirect_with_filters = function () {
          var search = "";
          if (global_filters) {
            if (global_filters.page_num) {
              search += "&page=" + global_filters.page_num;
            }
            if (global_filters.restaurant_status) {
              search += "&status=" + global_filters.restaurant_status;
            }
            if (global_filters.search) {
              search += "&search=" + global_filters.search;
            }
            if (global_filters.locality_id) {
              search += "&locality_id=" + global_filters.locality_id;
            }
            if (global_filters.call_as_user == true || global_filters.call_as_user == false) {
              search += "&call_as_user=" + global_filters.call_as_user;
            }
            if (global_filters.has_logo == true || global_filters.has_logo == false) {
              search += "&has_logo=" + global_filters.has_logo;
            }
            if (global_filters.delivers_in) {
              search += "&delivers_in=" + global_filters.delivers_in;
            }
            if (global_filters.has_changes == true || global_filters.has_changes == false) {
              search += "&has_changes=" + global_filters.has_changes;
            }
            if (global_filters.cuisine_ids) {
              search += "&cuisine_ids=" + global_filters.cuisine_ids;
            }
            //window.location.search = encodeURIComponent(search);
            history.pushState(global_filters, "restaurant_filters", "?" + search + window.location.hash);

            that.render(global_filters);
          }
        }

        var global_search = function () {
          if ($("#filter").val()) {
            global_filters.search = $("#filter").val();
          } else {
            global_filters.search = undefined;
          }
        }
        $("#filter").on("keydown", function (e) {
          if (e.keyCode == 13) {
            apply_filters();
          }
          ;
        });
        var filterLocalities = function () {
          if ($("#locality").val()) {
            global_filters.locality_id = get_locality_id($("#locality").val());
          } else {
            global_filters.locality_id = undefined;
          }
        }
        var filter_delivers_in = function () {
          if ($("#delivers_in").val()) {
            global_filters.delivers_in = get_locality_group_id($("#delivers_in").val());
          } else {
            global_filters.delivers_in = undefined;
          }
        }
        $("#locality").add("#delivers_in").add("#cuisine").on("keydown", function (e) {
          if ($(this).val()) {
          } else {
            if (e.keyCode == 13) {
              apply_filters();
            }
            ;
          }
        });

        $('#status_filter').on("change", apply_filters);

        var status_filter = function () {
          if ($('#status_filter').val() != '-1') {
            global_filters.restaurant_status = $('#status_filter').val();
          } else {
            global_filters.restaurant_status = false;
          }
        }


        var cuisine_filter = function () {
          if ($("#cuisine").val() && $("#cuisine").val().length > 0) {
            global_filters.cuisine_ids = $("#cuisine").val();
          } else {
            global_filters.cuisine_ids = undefined;
          }

        }

        $("#call_as_user_filter").on("change", apply_filters);

        var call_as_user_filter = function () {
          if ($("#call_as_user_filter").val() != '-1') {
            var call_status = ($("#call_as_user_filter").val() == "YES") ? true : false;
            global_filters.call_as_user = call_status;
          } else {
            global_filters.call_as_user = undefined;
          }
        }

        $("#has_logo_filter").on("change", apply_filters);
        var has_logo_filter = function () {
          if ($("#has_logo_filter").val() != '-1') {
            var logo_status = ($("#has_logo_filter").val() == "YES") ? true : false;
            global_filters.has_logo = logo_status;
          } else {
            global_filters.has_logo = undefined;
          }
        }

        $("#has_changes_filter").on("change", apply_filters);
        var has_changes_filter = function () {
          if ($("#has_changes_filter").val() != '-1') {
            var change_status = ($("#has_changes_filter").val() == "YES") ? true : false;
            global_filters.has_changes = change_status;
          } else {
            global_filters.has_changes = undefined;
          }
        }

        $("#clear_filters").click(function () {
          if ($("#filter").prop("value") != "" || $('#cuisine').prop("value") != "" || $('#has_changes_filter').prop("value") != "-1" || $('#status_filter').prop("value") != "-1" || $("#call_as_user_filter").prop("value") != "-1" || $("#locality").prop("value") != "" || $("#has_logo_filter").prop("value") != "-1" || $("#delivers_in").prop("value") != "") {
            $("#filter").prop("value", "");
            $('#status_filter').prop("value", "-1");
            $("#call_as_user_filter").prop("value", "-1");
            $("#locality").prop("value", "");
            $("#delivers_in").prop("value", "");
            $("#has_logo_filter").prop("value", "-1");
            $("#has_changes_filter").prop("value", "-1");
            $('#cuisine').prop("value", []);
            apply_filters();
            //window.location = window.location.origin + window.location.pathname + window.location.hash;
          }
        });

        // constructs the suggestion engine for locality
        var locations = new Bloodhound({
          limit: 100,
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: $.map(window.collections.localities.reverse(), function (locality) {
            return {value: locality.name, key: locality.id};
          })
        });

        // constructs the suggestion engine for delivers in
        var delivers_in = new Bloodhound({
          limit: 100,
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: $.map(collections.groups, function (group) {
            return {value: group.name, key: group.id};
          })
        });


        // kicks off the loading/processing of `local` and `prefetch`
        locations.initialize();
        delivers_in.initialize();

        $('#locality').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
          },
          {
            name: 'locations',
            displayKey: 'value',
            // `ttAdapter` wraps the suggestion engine in an adapter that
            // is compatible with the typeahead jQuery plugin
            source: locations.ttAdapter()
          }).on("typeahead:autocompleted", apply_filters)
          .on("typeahead:selected", apply_filters);
        $('.tt-hint .tt-suggestion').addClass('form-control');
        $('.typeahead.input-sm').siblings('input.tt-hint').addClass('hint-small');

        $('#delivers_in').typeahead({
            hint: true,
            highlight: true,
            minLength: 1,

          },
          {
            name: 'delivers_in',
            displayKey: 'value',
            // `ttAdapter` wraps the suggestion engine in an adapter that
            // is compatible with the typeahead jQuery plugin
            source: delivers_in.ttAdapter(),

          }).on("typeahead:autocompleted", apply_filters)
          .on("typeahead:selected", apply_filters);
        $('.tt-hint .tt-suggestion').addClass('form-control');
        $('.typeahead.input-sm').siblings('input.tt-hint').addClass('hint-small');


        // dump
        $("#dump").popover({
          placement: "left",
          html: true,
          content: function () {
            return $("#dump_content").html();
          },
          trigger: "click"
        });
        $(document).on("click", "#dump_request", function (e) {
          e.preventDefault();
          start_loading();
          $("#dump").popover('hide');
          var dump = {};
          dump.address = $("#address").is(":checked") ? true : false;
          dump.contact_info = $("#contact_info").is(":checked") ? true : false;
          dump.payment_details = $("#payment_details").is(":checked") ? true : false;
          dump.other_info = $("#other_info").is(":checked") ? true : false;
          console.log(dump);
          var href = "/restaurant/data_entry/restaurants_dump.csv?";
          for (var param in dump) {
            href += "&" + param + "=" + dump[param];
          }
          // applying the current filters
          filterLocalities();
          status_filter();
          call_as_user_filter();
          global_search();
          has_logo_filter();
          filter_delivers_in();
          has_changes_filter();
          cuisine_filter();
          for (var param in global_filters) {
            if (global_filters[param]) {
              href += "&" + param + "=" + global_filters[param];
            }
          }
          stop_loading();
          //window.location.href = href;
          window.open(href, 'Restaurant_Dump');
          return false;
        });
        $(document).on("click", "#close_dump", function () {
          $("#dump").popover('hide');
        })

        // restaurant delete and invisible
        $(".delete_anchor").click(function () {
          if (confirm("Are you sure to delete this restaurant?")) {
            start_loading();
            var id = $(this).siblings(".delete_id").val();
            //console.log($(this).siblings(".delete_id").val());
            $.ajax({
              type: 'post',
              url: 'restaurants/delete',
              data: {id: id},
              success: function () {
                stop_loading();
                that.render({
                  success: true,
                  message: "Restaurant deleted successfully!"
                });
              },
              error: function (response, status, error) {
                stop_loading();
                generate_alert(false, $.parseJSON(response.responseText).message);
              }
            });
          }
        });
        $(".invisible_anchor").click(function () {
          if (confirm("Are you sure to make this restaurant invisible?")) {
            start_loading();
            var id = $(this).siblings(".invisible_id").val();
            //console.log($(this).siblings(".invisible_id").val());
            $.ajax({
              type: 'post',
              url: 'restaurants/invisible',
              data: {id: id},
              success: function (message) {
                stop_loading();
                //console.log(message);
                that.render({
                  success: true,
                  message: "Restaurant made invisible successfully"
                });
              },
              error: function (response, status, error) {
                stop_loading();
                generate_alert(false, $.parseJSON(response.responseText).message);
              }
            });
          }
        });

        // copy timings
        $(".copy_timings_anchor").click(function () {
          start_loading();
          var id = $(this).siblings(".copy_timings_id").val();
          $.ajax({
            type: 'post',
            url: 'restaurants/copy_timings',
            data: {id: id},
            success: function (message) {
              stop_loading();
              //console.log(message);
              that.render({
                success: true,
                message: "Timings copied to all menu items"
              });
            },
            error: function (response, status, error) {
              stop_loading();
              generate_alert(false, $.parseJSON(response.responseText).message);
            }
          });
        });

        // menu dump
        $(".menu_dump_anchor").click(function () {
          var id = $(this).siblings(".menu_dump_id").val();
          var url = "/restaurant/data_entry/restaurants_menu_dump/" + id;
          window.open(url, "_blank");
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
        'click .push_menu': 'push_menu'
      },

      push_menu: function (e) {
        start_loading();
        e.preventDefault();
        $(e.currentTarget).prop("disabled", "disabled");
        var id = $(e.currentTarget).siblings(".push_menu_id").val();
        var that = this;
        $.ajax({
          type: 'post',
          url: 'restaurants/push_menu_stash',
          data: {id: id},
          success: function (message) {
            stop_loading();
            that.render({
              success: true,
              message: "Updated menu pushed successfully."
            });
          },
          error: function (response, status, error) {
            stop_loading();
            generate_alert(false, $.parseJSON(response.responseText).message);
            setTimeout(function () {
              $(e.currentTarget).removeProp("disabled");
            }, 10000);
          }
        });
      }

    });
    return RestaurantView;
  });