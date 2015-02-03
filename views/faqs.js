define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var FaqsView = Backbone.View.extend({

      el: '#page',
      template: JST['app/scripts/templates/faqs.ejs'],

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
      /*cleanup: function(){
       this.cleanup();
       },*/

      loadPlugins: function () {
        close_sidebar();
      },
      events: {},

    });
    return FaqsView;
  });