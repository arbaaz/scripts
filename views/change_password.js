define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';  
  var ChangePasswordView = Backbone.View.extend({
    el: '#page',
    template: JST['app/scripts/templates/change_password.ejs'],
    initialize: function () {
            
    },
    render: function (options) {
      start_loading();
      var that = this;
      var temp = that.template(options);
      that.$el.html(temp);
      that.loadPlugins();
      stop_loading();           
    },
    loadPlugins: function(){
      close_sidebar();
    },
    events: {
      "submit #password_form" : "submit"
    },
    submit: function(e){
      e.preventDefault();

      start_loading();   
      
      var currentEl = $(e.currentTarget);
      var old_password = $("#old_password").val();
      var new_password = $("#new_password").val();
      var confirm_password = $("#confirm_password").val();

      if ( new_password != confirm_password ) {
        stop_loading();   
        generate_alert(false,"New password fields dont match. Please try again.");
        return;
      }

      var datastr = $('#password_form').serialize();

      $.ajax({
        skip_url_prefix:true,
        url:'/user/edit_password',
        success:function(data,status){
          stop_loading();   
          generate_alert(true,"Your password has been changed successfully.");
        },
        error: function (xhr, desc, err) {
          stop_loading();   
          generate_alert(false,xhr.responseJSON.message);
        },
        data:datastr,
        type:'post'
      })
      $('#password_form')[0].reset();
    },

  });
  return ChangePasswordView;
});