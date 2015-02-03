define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  var TagsModel = Backbone.Model.extend({

        urlRoot: 'tags',

        initialize: function() {
        }
    });
  return TagsModel;
});