define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
      dataEntryClient.Collections.TagsCollection = Backbone.Collection.extend({

        model: dataEntryClient.Models.TagsModel,
        url: function() {
            return 'tags';
        },

        initialize: function(options) {
            this.options = options;
        },

        parse: function(response) {
            return response.tags;
        }
    });

});