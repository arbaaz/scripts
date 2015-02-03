define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Collections.AndroidReleaseCollection = Backbone.Collection.extend({
    model: dataEntryClient.Models.AndroidReleaseModel,
    url: '/user/admin/android_releases',
    initialize: function() {
    },
    

  });

});