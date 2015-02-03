define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';  
  var IosSettingsView = Backbone.View.extend({
    el: '#ios_settings_panel',
    template: JST['app/scripts/templates/ios_settings.ejs'],
    initialize: function (options) {
      this.parent = options.parent;
    },
    render: function (options) {
      var that = this;
      $.ajax({
      skip_url_prefix :true,
      url: "/user/ios_settings?app_version="+options.version, 
      type: "GET",
      dataType: "json",
        success: function(data) {
          var temp = that.template({
            ios_settings: data,
            current_version: options.version
          });
          that.$el.html(temp);
        },
        error: function(data, response, error) {
          generate_alert(false,$.parseJSON(response.responseText).message);
          return false;
        }
      });
         
    },
    events: {
      'submit #ios_settings_form' : 'update_settings',
      'change #ios_versions' : 'update_form'
    },

    update_form: function(){
      var version = $('#ios_versions').val();
      this.render({version: version});
    },

    update_settings: function(e){
      e.preventDefault();
      start_loading();
      var datastr = $('#ios_settings_form').serializeObject();
      datastr = this.parent.sanitizeData(datastr);
      $.ajax({
      skip_url_prefix :true,
      url: "/user/ios_settings/update", 
      type:"POST",
      data: datastr,
        success: function(data) {
          stop_loading();
        },
        error: function(data, response, error) {
          stop_loading();
          generate_alert(false,$.parseJSON(response.responseText).message);
          return false;
        }
      });
    }

  });
  return IosSettingsView;
});