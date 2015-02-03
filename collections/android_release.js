/*global define*/
define([

    'underscore',
    'jquery',
    'backbone'
  ],
  function (_, $, Backbone) {
    'use strict';

    var AndroidReleaseCollection = Backbone.Collection.extend({
      model: dataEntryClient.Models.AndroidReleaseModel,
      url: '/user/admin/android_releases'
    });

    return AndroidReleaseCollection;
  });