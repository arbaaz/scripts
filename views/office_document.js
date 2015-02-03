define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.OfficeDocumentView = Backbone.View.extend({

      initialize: function(attrs) {
        this.options = attrs;
      },
      el: '#page',
      template: JST['app/scripts/templates/office_document.ejs'],
      render: function(options) {
        var that = this;
        that.options = options;
        if (options.id) {
          dataEntryClient.restaurant_id = options.id;
          that.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id});  
          if(!that.restaurant.get("form_id")){
            that.restaurant.fetch({async:false});
          }        
          that.office_document = dataEntryClient.Models.OfficeDocumentModel.findOrCreate({id:options.id});
          global_observer.trigger("header_changed", {'restaurant_id' : that.options.id, 'active_tab' : 'profile'});
          start_loading();
          that.office_document.fetch({
            success: function(data,response) {
              //console.log(data);
              var template = that.template({
                restaurant: that.restaurant,
                office_document: data,
                collections: that.collections,
                sidebar_active_tab: "office_document"
              });
              that.$el.html(template);
              compile_sidebar({
                id: that.restaurant.get("id"),
                sidebar_active_tab: "office_document"
              });
              that.topNavigation=new dataEntryClient.Views.RestaurantTopNavigationView();
              that.topNavigation.render(that.restaurant,response.meta.menu_stash);

              stop_loading();
              if (that.options.success) {
                generate_alert(true,"Saved successfully");
              }
              that.load_plugins();
              return that;
            },
            error: function(data, response, error){
              stop_loading();
              generate_alert(false,$.parseJSON(response.responseText).message);
            }
          });
        }
      },
      load_plugins: function() {
        function format(locality) {
          if (!locality.id) return locality.text; // optgroup
          return '<i class="fa fa-map-marker" style="color:#fa8564"></i>&nbsp;&nbsp;'+locality.text;
        }
        /* ============================================================================= 
          commented out a LOT of data manipulation code, _/\_ to the data-entry team!
        ============================================================================= */

        // var sub_loc_parent_id = get_parent_id($("#locality_id").val());
        // var sub_loc = _.collect(_.reject(window.collections.localities, function(l){
        //   if (sub_loc_parent_id != null) {
        //     if (l.parent_id != sub_loc_parent_id) {return l;}
        //   }
        // }), function(l){
        //     return {id:l.id, text: l.name};
        // });

        var loc = _.collect(_.filter(window.collections.localities, function(l){
          if (l.parent_id == null) {return l;}
        }), function(l){
            return {id:l.id, text: l.name};
        });
        this.$("#locality_id").select2({
          formatResult: format,
          formatSelection: format,
          width: "100%",
          data: loc
        });

        // this.$("#locality_filter").select2({
        //   formatResult: format,
        //   formatSelection: format,
        //   width: "100%",
        //   data: loc
        // });
        
        // auto detect locality 
        // $("#longitude").on("input", change_locality);
        // $("#latitude").on("input", change_locality);

        function change_locality(){
          var longitude = $("#longitude").val();
          var latitude = $("#latitude").val();
          var landmark = $("#locality").val();
          $("#locality_detect_error").addClass("hidden");
          if (latitude && longitude) {
            $("#locality_detect_loader").removeClass("hidden");
            $.ajax({
              url: "restaurants/locality/detect?latitude="+latitude+"&longitude="+longitude,
              type: "GET",
              success: function(locality){
                var locality_id = locality.parent_id ? locality.parent_id : locality.id;
                $("#locality_id").select2('val',locality_id);
                // $("#locality_filter").select2('val',locality.parent_id);
                if (landmark == "") {
                  $("#locality").val(get_locality(locality_id));
                }
                $("#locality_detect_loader").addClass("hidden");
              },
              error: function(response, status, error){
                $("#locality_detect_loader").addClass("hidden");
                $("#locality_detect_error").removeClass("hidden");
              }
            });
          }
        }

        // previous locality filter;
        // $("#locality_filter").on("change", change_sublocality_dataset);
        // function change_sublocality_dataset(){
        //   $("#locality").val('');
        //   var parent_id = $(this).val();
        //   var sublocalitites = _.collect(_.filter(window.collections.localities, function(l){
        //     if (l.parent_id == parent_id) {
        //       return l;
        //     }
        //   }), function(l){
        //     return {id:l.id, text:l.name};
        //   });
        //   //console.log(sublocalitites);
        //   $("#locality_id").select2({
        //     formatResult: format,
        //     formatSelection: format,
        //     data: sublocalitites,
        //     width: "100%"
        //   })
        // }

        // $("#locality_id").on("change", function(){
        //   $("#locality").val(get_locality($(this).val()));
        // });

        $("[name='call_as_user']").on("change",function(){
          // console.log("sdjkfns");
          if ($(this).prop("checked")==true) {
            $("[name='tied_up']").prop("checked",false);
          };
        });
        $("[name='tied_up']").on("change",function(){
          if ($(this).prop("checked")==true) {
            $("[name='call_as_user']").prop("checked",false);
          };
        });
        initialize_sidebars();
      },
      events: {
        'click .add_new_number': 'add_new_number',
        'click .to_delete': 'to_delete',
        //'click #save_changes_office': 'save_changes',
        'submit #office_document_form': 'save_changes'
      },
      add_new_number: function(e) {
        e.preventDefault();
        var target = $(e.currentTarget);
        var count = $('[name="phone_numbers_count"]');
        var i = count.val();
        var html = partial("partials_contactNumber", {
          id: "new",
          markup_hidden_name: "phone_numbers_" + i + "_id",
          markup_hidden_index: "phone_numbers_" + i,
          markup_select_name: "phone_numbers_" + i + "_number_type",
          markup_input_name: "phone_numbers_" + i + "_number",
          markup_to_delete: "phone_numbers_" + i + "_delete",
          i: i,
          number: "",
          contact_number_types: window.collections.contact_number_types,
          number_type: "",
          sms: false,
          is_present_on_counter: false,
          is_smartphone: false,
          is_verified: false
        });
        count.val(parseInt(i) + 1);
        target.before(html);
        $("[name='phone_numbers_" + i + "_number']").focus();
        return false;
      },
      to_delete: function(e) {
        e.preventDefault();
        var currentEl = $(e.currentTarget);
        var hiddenEl = $("[name='" + currentEl.data("deleteName") + "']");
        if (hiddenEl.val() == "false") {
          hiddenEl.val("true");
          hiddenEl.parent().parent().hide();
        }
        return false;
      },
      save_changes: function(e) {
        e.preventDefault();
        start_loading();
        var obj = $(".form-horizontal").serializeObject();
        var office_document = dataEntryClient.Models.OfficeDocumentModel.findOrCreate({id:obj.restaurant_id});
        obj = office_document.buildOfficeDocObj(obj);
        var that = this;
        $("html, body").animate({ scrollTop: 0 }, "fast");
        office_document.save(obj, {
          type: 'put',
          success: function(data) {
            stop_loading();
            that.render({              
              id: data.id,
              success: that.options.id
            });
          },
          error: function(data, response, error){
            stop_loading();
            generate_alert(false,$.parseJSON(response.responseText).message);
          }
        });
      },
      cleanup: function() {
        this.undelegateEvents();
        $(this.el).empty();
      }

    });

});
