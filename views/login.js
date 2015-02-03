define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.LoginView = Backbone.View.extend({

        el: '#page',
        template: JST['app/scripts/templates/login.ejs'],

        initialize: function () {
          //this.listenTo(this.model, 'change', this.render);
          if(window.user.logged_in())
            this.redirect();
          else
            this.render();
          close_sidebar();
        },
        render: function () {
          console.log("render");
          this.$el.html(this.template());
          $('input[id="email"]')[0].focus();          
        },
        events: {
            //"click .login_submit" : 'submit'
            "submit #login_form" : "submit"
        },
        submit: function(e){
          e.preventDefault();
          var currentEl = $(e.currentTarget);
          var email = $("#email").val();
          var password = $("#password").val();
          var self = this;
          start_loading();
          $.ajax({
            url: "/user/login.json",
            type: "POST",
            data: {
              email: email,
              password: password, 
              device: "agent"
            },
            skip_url_prefix: true,
            success: function(data) {
              user.session_manager.set_session(data.session_token);
              user.set_profile(data.profile);
              user.set_roles(data.roles);
              if(data.company_name != null)
                user.set_company(data.company_name);
              user.set_roles(data.roles);
              global_observer.trigger('header_changed');
              window.localStorage.setItem('role', $('#role').val());
              self.redirect();
              stop_loading();
            },
            error: function(response,status,error){
              stop_loading();
              generate_alert(false,$.parseJSON(response.responseText).message,"center");
            }
          });
          return true;
        },


        redirect: function(){
          var roles = _.collect(window.user.get_roles(), function(x){ return x['name'] });
          if(_.contains(roles, "Outsource Data Entry Agent")){
            window.location.hash = "outsource/agent";
          }
          else if(_.contains(roles, "Outsource Data Entry Head")){
            window.location.hash = "outsource/head";
          }
          else{
            //window.router.navigate("dashboard",{trigger: true});
            Backbone.history.navigate("dashboard",true);
            //window.location.hash = "restaurants"
          }


          // if(window.localStorage.getItem('redirect_hash') != null){
          //   window.location.hash = window.localStorage.getItem('redirect_hash');
          //   window.localStorage.removeItem('redirect_hash');
          // }
          // else
          //   window.location.hash = "outsource/agent"
        }

    });

});