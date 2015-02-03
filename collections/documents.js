define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  var DocumentCollection = Backbone.Collection.extend({

    url: function(){
      return 'restaurants/documents/'+this.id;
    },
    Model: dataEntryClient.Models.DocumentModel,

    initialize: function(options) {
      this.id = options.id;
      console.log("initializing documents Collections!");
    },

    parse: function(response) {
      this.logo = response.payload.logo;
      return response.payload.documents;
    }

  });
  return DocumentCollection;
});