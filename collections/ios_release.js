define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var IOSReleaseCollection = Backbone.Collection.extend({
      model: dataEntryClient.Models.IOSReleaseModel,
      url: '/user/admin/ios_releases',
      initialize: function () {
      },


    });
    return IOSReleaseCollection;
  })();