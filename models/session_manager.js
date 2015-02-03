define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Models.SessionManager = Backbone.Model.extend({

        get_session: function() {
          //return $.cookie('session_token');
          //return window.localStorage.getItem("session_token");
          return getCookie("session_token");
        },

        set_session: function(token){
          //$.cookie('session_token', token, { expires: 7 });
          //window.localStorage.setItem("session_token", token);
          document.cookie="session_token="+token;
        },

        delete_session: function(){
          //$.removeCookie('session_token');
          //window.localStorage.removeItem("session_token");
          document.cookie="session_token=;";
          localStorage.removeItem("session_token_backup");
        },

        set_session_backup: function(){
          localStorage.setItem("session_token_backup", this.get_session());  // added to tranfer the session_token to the Order panel frontend
        },

        exists : function(){
          if(this.get_session() != undefined && this.get_session() != ""){
            this.set_session_backup();
            return true;
          }else{
            return false;
          }
        }
    });

});
