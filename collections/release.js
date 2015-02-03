define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var ReleaseCollection = Backbone.Collection.extend({
      model: dataEntryClient.Models.ReleaseModel,
      url: '/user/admin/android_releases',
      initialize: function () {
      },


    });
    return ReleaseCollection;
  })();