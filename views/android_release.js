define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
     //Promotion view to add or update a promotion.
  var AndroidReleaseView = Backbone.View.extend({
        
          template: JST['app/scripts/templates/release.ejs'],
          initialize: function(attrs) {
               this.options=attrs;
               

          },
    
          el: '#page',
 
          render: function(options) {
               var that=this;
               if(that.options && that.options.id) { // update a release
                    this.release=new dataEntryClient.Models.AndroidReleaseModel({id:that.options.id});
                    this.release.fetch({
                         skip_url_prefix:true,
                         success:function(release){

                              var temp = that.template({
                                   release: release.get("android_release"),
                                   base_version : release.get("base_versions"),
                                   releaseType: "android"
                                });
                              that.$el.html(temp);
                              that.loadPlugins();
                              
                         },
                         error: function(response, status, error) {
                              return false;
                         }
                                   
                    })
               }
               else {  // add a release
                    $.ajax({
                         skip_url_prefix :true,
                         url : '/user/android_base_versions',
                         type:"GET",
                         dataType: "json",
                         success: function(data) {
                              var temp = that.template({
                                   base_version: data.base_version,
                                   release: null,
                                   releaseType: "android"
                              });
                              that.$el.html(temp);
                              that.loadPlugins();

                         },
                         error: function(data, response, error) {
                              generate_alert(false,$.parseJSON(response.responseText).message);
                              return false;
                         }
                    });

               }  
          },


          loadPlugins: function(){
               close_sidebar();

               
          },
      
         events: {
               'submit #release_form' : 'add_update_android_release'
         },
  
         add_update_android_release:function(e) {
          
               e.preventDefault();
               start_loading();
               var datastr = $('#release_form').serializeObject();

               datastr.base_version = datastr.base_version=="this" ? datastr.version : datastr.base_version;
               datastr = this.sanitizeData(datastr);
               datastr.id=this.id;
               if(this.id) { // update promotion event
                    
                    var release=new dataEntryClient.Models.AndroidReleaseModel({id:this.id});
                    release.save(datastr,{
                         skip_url_prefix:true,
                         type:"PUT",
                         success:function(release) {
                              stop_loading();
                              Backbone.history.navigate('android-releases', true);
                         },
                         error: function(response, status, error) {
                              stop_loading();
                              generate_alert(false,"Version must be unique");
                              return false;
                         }
                    })
               }
               else { // add promotion event
                    var release=new dataEntryClient.Models.AndroidReleaseModel();
                    release.save(datastr,{
                         skip_url_prefix:true,
                         success:function(release) {
                              stop_loading();
                              Backbone.history.navigate('android-releases', true);
                         },
                         error: function(response, status, error) {
                              stop_loading();
                              generate_alert(false,"Version must be unique");
                              return false;
                         }
                    })
               }
           
         },

         sanitizeData: function(data){
           for (var key in data){
             if (typeof(data[key])=="object"){
               if(data[key][1]=="on")
                 data[key] = "true";
             }
             else if (data[key] == "off"){
               data[key] = "false";
             }
           }
           return data;

         }

     });
  return AndroidReleaseView;
});