define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Models.TagsModel = Backbone.Model.extend({

        urlRoot: 'tags',

        initialize: function() {
        }
    });

});
