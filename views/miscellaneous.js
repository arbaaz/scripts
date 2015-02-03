define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.MiscellaneousView = Backbone.View.extend({

      initialize: function(attrs) {
        this.options = attrs;
      },
      el: '#page',
      template: JST['app/scripts/templates/miscellaneous.ejs'],
      render: function(options) {
        var that = this;
        that.options = options;
        if (options.id) {
          dataEntryClient.restaurant_id = options.id; 
          that.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id}); 
          if(!that.restaurant.get("form_id")){
            that.restaurant.fetch({async:false});
          }              
          that.miscellaneous = dataEntryClient.Models.MiscellaneousModel.findOrCreate({id:options.id});
          global_observer.trigger("header_changed", {'restaurant_id' : that.options.id, 'active_tab' : 'profile'});
          start_loading();
          that.miscellaneous.fetch({
            success: function(data,response) {
              var template = that.template({
                restaurant: that.restaurant,
                miscellaneous: data,
                collections: that.collections,
                sidebar_active_tab: "miscellaneous"
              });
              that.$el.html(template);
              compile_sidebar({
                  id: that.restaurant.get("id"),
                  sidebar_active_tab: "miscellaneous"
              });

              that.topNavigation=new dataEntryClient.Views.RestaurantTopNavigationView();
              that.topNavigation.render(that.restaurant,response.meta.menu_stash);

              stop_loading();
              if (that.options.success) {
                generate_alert(true,"Saved Successfully");
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
        this.$("#cuisine_ids").select2({
          width: "100%"
        });
        this.$("#restaurant_suggestion_ids").select2({
          width: "100%"
        });
        if (this.restaurant.get('status') == window.collections.status.ACTIVE ) {
          $('#closingReasonFormGroup').hide();
        };
        initialize_sidebars();
        // Star rating javascript start        
        var SetRatingStar = function(dummy) {
          return dummy.each(function() {
            if (parseInt(dummy.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
              return $(this).removeClass('fa-star-o unrated').addClass('fa-star rated');
            } else {
              return $(this).removeClass('fa-star rated').addClass('fa-star-o unrated');
            }
          });
        };

        var changeValue = function(obj){
          obj.on('click', function() {
            obj.siblings('input.rating-value').val($(this).data('rating'));
            obj.siblings('#rating-label').html($(this).data('rating'));
            ratingColors(obj);
            return SetRatingStar(obj);

          });
        };
        
        var ratingColors = function(obj){
          var rating = parseInt(obj.siblings('input.rating-value').val());
          if ((10 >= rating) && (rating >= 7)){
            obj.siblings("#rating-label").removeClass("label-warning label-danger").addClass("label-success");
            
          }
          if ((7 > rating) && (rating >= 4)){
            obj.siblings("#rating-label").removeClass("label-danger label-success").addClass("label-warning");
            
          }
          if ((4 > rating) && (rating >= 0)){
            obj.siblings("#rating-label").removeClass("label-warning label-success").addClass("label-danger");
            
          }
        };
        var ratingEngine = function(obj){
          SetRatingStar(obj);
          changeValue(obj);
          ratingColors(obj);
        };
        var breakfast = $('#breakfast .fa');
        var lunch = $('#lunch .fa');
        var snacks = $('#snacks .fa');
        var dinner = $('#dinner .fa');

        ratingEngine(breakfast);
        ratingEngine(lunch);
        ratingEngine(snacks);
        ratingEngine(dinner);
        // Star rating javascript end

        
      },
      events: {
        'submit .form-horizontal': 'save_changes'
      },
      
      save_changes: function(e) {
        e.preventDefault();
        start_loading();
        console.log("save started");
        var obj = $(".form-horizontal").serializeObject();
        var that = this;        
        if (this.restaurant.get('status') == window.collections.status.ACTIVE ) {
          obj.reason_id = null;
        };
        var miscellaneous = dataEntryClient.Models.MiscellaneousModel.findOrCreate({id:obj.restaurant_id});
        var formData = miscellaneous.buildObj(obj);
        $("html, body").animate({ scrollTop: 0 }, "fast");
        miscellaneous.save(null, {
          type: 'put',
          data: formData,
          contentType: false,
          processData: false,
          success: function(data) {
            stop_loading();
            that.render({              
              id: data.id,
              success: true
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