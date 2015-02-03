define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';  
  var SettingsView = Backbone.View.extend({
    el: '#page',
    template: JST['app/scripts/templates/settings.ejs'],
    initialize: function () {
      
    },
    render: function (options) {
      start_loading();
      this.$el.html(this.template);      
      stop_loading();
      this.loadPlugins();
      this.global_settings = new dataEntryClient.Views.GlobalSettingsView({parent:this});  
      this.ios_settings = new dataEntryClient.Views.IosSettingsView({parent:this});
      this.constant_variables = new dataEntryClient.Views.ConstantVariablesView({parent:this});
      this.android_settings = new dataEntryClient.Views.AndroidSettingsView({parent:this});
      this.global_settings.render();
    },
    events: {
      'click #global_settings' : 'show_global_settings',
      'click #ios_settings' : 'show_ios_settings',
      'click #android_settings' : 'show_android_settings',
      'click #constant_variables' : 'show_constant_variables'
    },

    show_global_settings: function(){  
      this.global_settings.render(); 
    },

    show_constant_variables: function(){
      
      this.constant_variables.render();
    },

    show_android_settings: function() {
      this.android_settings.render({version: '3.0.0'});
    },

    show_ios_settings: function() {
      this.ios_settings.render({version: '1.0.0'});
    },

    loadPlugins: function(){
      close_sidebar();
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

    },
  });
  return SettingsView;
});