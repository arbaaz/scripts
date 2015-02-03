define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var UserModel = Backbone.Model.extend({

      initialize: function () {
        //console.log("initializing user");
        this.session_manager = new dataEntryClient.Models.SessionManager();
      },

      logged_in: function () {
        if (this.session_manager.exists() && window.user.get_profile() != undefined)
          return true;
        else {
          this.clean_localstorage();
          return false;
        }
      },

      get_profile: function () {
        return JSON.parse(window.localStorage.getItem("profile"));
      },

      set_profile: function (profile) {
        return window.localStorage.setItem("profile", JSON.stringify(profile));
      },

      get_roles: function () {
        return JSON.parse(window.localStorage.getItem("roles"));
      },

      set_roles: function (roles) {
        return window.localStorage.setItem("roles", JSON.stringify(roles));
      },

      set_company: function (company) {
        return window.localStorage.setItem("company_name", company);
      },

      get_company: function () {
        return window.localStorage.getItem("company_name");
      },

      get_name: function () {
        var profile = JSON.parse(window.localStorage.getItem("profile"));
        return profile.first_name + " " + profile.last_name;
      },

      logout: function () {
        this.session_manager.delete_session();
        this.clean_localstorage();
      },

      clean_localstorage: function () {
        window.localStorage.removeItem("profile");
        window.localStorage.removeItem("roles");
        window.localStorage.removeItem("company_name");
        window.global_observer.trigger('header_changed');
      }
    });
    return UserModel;
  });