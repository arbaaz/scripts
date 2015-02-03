define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Collections.IOSReleaseCollection = Backbone.Collection.extend({
    model: dataEntryClient.Models.IOSReleaseModel,
    url: '/user/admin/ios_releases',
    initialize: function() {
    },
    

  });

})();
