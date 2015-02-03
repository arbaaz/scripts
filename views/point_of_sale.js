define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.PointOfSaleView = Backbone.View.extend({
        el: '#page',
        template: JST['app/scripts/templates/point_of_sale.ejs'],


        initialize: function(options) {
            this.options=options;
            this.restaurant_id = options.id;
            this.model = new dataEntryClient.Models.PointOfSaleModel({
              restaurant_id:this.restaurant_id
            }); 
        },

        render: function() {
          var that = this;
         compile_sidebar({
                id: this.restaurant_id,
                sidebar_active_tab: "point_of_sale"
            });
          this.model.fetch({
          skip_url_prefix: true,
          success:function(model,response){
            that.$el.html(that.template({
              model:that.model
            })); 
            var status = model.get('product_status');
            var status_list = window.collections.product_status;
            switch(status){
              case status_list.ACTIVE_ON:
                $("[name='has_restaurant_app']").attr('checked', true);
                $("[name='is_app_service_on']").attr('checked', true);
                break;
              case status_list.ACTIVE_OFF:
                $("[name='has_restaurant_app']").attr('checked', true);
                $("[name='is_app_service_on']").attr('checked', false);
                break;
              case status_list.INACTIVE:
                $("[name='has_restaurant_app']").attr('checked', false);
                $("[name='is_app_service_on']").attr('checked', false);
                break;
            }
            that.load_plugins();
          },
          error: function(){
          }, 
         })
        },


        events: {
          'submit .form-horizontal':'save',
          "change input[name='has_restaurant_app']" : 'has_rest_app_changed',
          'change #is_tinyowls_device': "checkbox_check", 
          "change input" :"changed",
        },


        load_plugins: function(){
          var that = this;
          $("[name='allocation_date'").datepicker({
            format:'yyyy/mm/dd'
          }).on('changeDate', function(e){
                $(this).datepicker('hide');
                that.changed(e);
            }).data('datepicker')
        },


        changed:function(evt) {
           var changed = evt.currentTarget;
           switch(evt.currentTarget.type){
            case 'checkbox':
              var value = evt.currentTarget.checked;
              break;
            case 'text':
              var value = $(evt.currentTarget).val();
              break;
            default:
              var value = $(evt.currentTarget).val();
              break;
           }
           var obj = {};
           obj[changed.name] = value;
           this.model.set(obj);
        },


        checkbox_check: function(e){
          if (e.currentTarget.checked) {
            $("[name='imei_no']").removeAttr('disabled')
            $("[name='sim_no']").removeAttr('disabled')
            $("[name='person_name']").removeAttr('disabled')
          }else{
            $("[name='imei_no']").attr('disabled','disabled')
            $("[name='sim_no']").attr('disabled','disabled')
            $("[name='person_name']").attr('disabled','disabled')
          }
        }, 


        has_rest_app_changed:function(e){
          if (e.currentTarget.checked) {
            $("[name='is_app_service_on']").removeAttr('disabled');
          }else{
            $("[name='is_app_service_on']").attr('disabled','disabled');
          }
        },


        save:function(e){
          e.preventDefault();
          var that = this; 
          var status = 0;
          start_loading();
          if(!this.model.get('is_tinyowls_device')){
            this.model.set({'person_name':null})
            this.model.set({'sim_no':null})
            this.model.set({'imei_no':null})
          }
          if($('[name="has_restaurant_app"]').is(":checked")){
              this.model.set({'has_restaurant_app':true})
            if($('[name="is_app_service_on"]').is(":checked")){
              this.model.set({'is_app_service_on':true})
              status = window.collections.product_status.ACTIVE_ON;
            }else{
                 this.model.set({'is_app_service_on':false})
                 status = window.collections.product_status.ACTIVE_OFF;
            }
          }else{
            this.model.set({'has_restaurant_app':false})
            status = window.collections.product_status.INACTIVE;
          }
          this.model.set({'product_status' : status})
          this.model.save(null,{
            skip_url_prefix: true,
            success:function(model,response){
                stop_loading();
               generate_alert(true, response.message);
            },
            error:function(model,response){
              stop_loading();
             generate_alert(false, response.responseText); 
            }
          });
        },
        
    });
});