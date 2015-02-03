define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict'; 
  var AndroidReleaseModel = Backbone.Model.extend({
    save: function(attributes, options) {
      if(!this.id) {
        options = _.defaults((options || {}), {url: "/user/admin/android_releases"});
        return Backbone.Model.prototype.save.call(this, attributes, options);
    } else {
        options = _.defaults((options || {}), {url: "/user/admin/android_releases/"+this.id });
        return Backbone.Model.prototype.save.call(this, attributes, options);
    }       

    },
    url: function(){
      return '/user/admin/android_releases/'+this.id +'/edit';
    },
    initialize: function() {
    },
    defaults: {
    },
    validate: function(attrs, options) {
      
    },
  });
  return AndroidReleaseModel;
});