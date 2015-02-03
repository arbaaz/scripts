define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
     //Promotion view to add or update a promotion.
     dataEntryClient.Views.Release = Backbone.View.extend({
        
          template: JST['app/scripts/templates/release.ejs'],
          initialize: function(attrs) {
               this.options=attrs;
               

          },
    
          el: '#page',
 
          render: function(options) {
               var that=this;
               if(that.options && that.options.id) { // update a release
                    this.release=new dataEntryClient.Models.ReleaseModel({id:that.options.id});
                    this.release.fetch({
                         skip_url_prefix:true,
                         success:function(release){
                              var temp = that.template({
                                   release: release.get("android_release"),
                                   
                              });
                              that.$el.html(temp);
                              that.loadPlugins();
                              
                         },
                         error: function(response, status, error) {
                              return false;
                         }
                                   
                    })
               }
               else {
                      // add a release
                    var temp = that.template({
                                   release: null,
                              });
                    that.$el.html(temp);
                    that.loadPlugins();
               }  
          },


          loadPlugins: function(){
               close_sidebar();

               
          },
      
         events: {
               'submit #release_form' : 'add_update_promotion'
         },
  
         add_update_promotion:function(e) {
          
               e.preventDefault();
               start_loading();
              
             var datastr = $('#release_form').serializeObject();                     
               
               datastr.id=this.id;
               if(this.id) { // update promotion event
                    var release=new dataEntryClient.Models.ReleaseModel({id:this.id});
                    release.save(datastr,{
                         skip_url_prefix:true,
                         type:"PUT",
                         success:function(release) {
                              stop_loading();
                              Backbone.history.navigate('releases', true);
                         },
                         error: function(response, status, error) {
                              stop_loading();
                              generate_alert(false,$.parseJSON(response.responseText).message);
                              return false;
                         }
                    })
               }
               else { // add promotion event
                    var release=new dataEntryClient.Models.ReleaseModel();

                    release.save(datastr,{
                         skip_url_prefix:true,
                         success:function(release) {
                              stop_loading();
                              Backbone.history.navigate('releases', true);
                         },
                         error: function(response, status, error) {
                              stop_loading();
                              generate_alert(false,$.parseJSON(response.responseText).message);
                              return false;
                         }
                    })
               }
           
         }

     });

});
