define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';

  var SpellCheckCollection = Backbone.Collection.extend({

    url: '/word_dictionaries/verify',
    // model: dataEntryClient.Models.DeliveryareaModel,
    
    initialize: function() {
      console.log("initializing spell check Collections!");
    },
    
    parse: function(response) {
      return response.payload;
    }

  });
  return SpellCheckCollection;
});