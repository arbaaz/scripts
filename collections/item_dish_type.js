define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Collections.ItemDishTypeCollection = Backbone.Collection.extend({
    model: dataEntryClient.Models.ItemDishTypeModel,
    url: 'items',
    initialize: function(options) {
        
    },
    
    // comparator: function( collection ) {
    //   return( collection.get( 'dish_type_tag' ) );
    // },
    parse: function(response) {
        return response.payload;
      },
    getChanged: function(models) {
        // return a list of models that have changed by checking hasChanged()
        var changed_items=[];
        _.each(models, function(item, i) {
          if(item.hasChanged()){
            changed_items.push(item);
          }

        });
        return changed_items;

    },
    save: function (options) {
        var changed_items=this.getChanged(this.models);
        if(changed_items.length>0) {
        var that =this;
        that.models=changed_items;
        this.sync("update", that, options);
      } else {
        stop_loading();
        generate_alert(false,"No Change in items");
      }
    }
    });
});