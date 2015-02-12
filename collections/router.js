define([
    'jquery',
    'underscore',
    'backbone',
    'subrouter',
    'helpers',
  ],
  function($, _, Backbone, subrouter, H) {
    'use strict';
    var Router = Backbone.SubRoute.extend({
      initialize: function() {
        console.log("level-4: ios router init");
      },
      routes: {
        "": 'index',
        'new': "index",
        'edit/:id': "index",
      },

      index: function() {
        console.log("ios-releases index");
      }
    });
    return Router;
  });