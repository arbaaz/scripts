define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var IOSReleaseModel = Backbone.Model.extend({
      save: function (attributes, options) {
        if (!this.id) {
          options = _.defaults((options || {}), {url: "/user/admin/ios_releases"});
          return Backbone.Model.prototype.save.call(this, attributes, options);
        } else {
          options = _.defaults((options || {}), {url: "/user/admin/ios_releases/" + this.id});
          return Backbone.Model.prototype.save.call(this, attributes, options);
        }

      },
      url: function () {
        return '/user/admin/ios_releases/' + this.id + '/edit';
      },
      initialize: function () {
      },
      defaults: {},
      validate: function (attrs, options) {

      },
    });
    return IOSReleaseModel;
  });