define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Collections.ReleaseCollection = Backbone.Collection.extend({
    model: dataEntryClient.Models.ReleaseModel,
    url: '/user/admin/android_releases',
    initialize: function() {
    },
    

  });

})();
