define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict'; 
   dataEntryClient.Models.PromotionModel = Backbone.Model.extend({
    save: function(attributes, options) {
      if(!this.id) {
        options = _.defaults((options || {}), {url: "/restaurant/global_promotions/create"});
        return Backbone.Model.prototype.save.call(this, attributes, options);
    } else {
        options = _.defaults((options || {}), {url: "/restaurant/global_promotions/update/"});
        return Backbone.Model.prototype.save.call(this, attributes, options);
    }       

    },
    url: function(){
      return '/restaurant/global_promotions/edit/'+this.id;
    },
    initialize: function() {
    },
    defaults: {
    },
    validate: function(attrs, options) {
      console.log("validating the promotion..");
    },
  });
});