define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  var PromotionItemView = Backbone.View.extend({

		
          initialize: function() {},
    
          el: '#item_space',
					template: JST['app/scripts/templates/promotion_item.ejs'],

          render: function(options) {
            var temp = this.template({
            	 items : options.items,
            	 current_item :  options.current_item
            });
            this.$el.html(temp);

            this.$el.show();

            $('#items').select2({
              maximumSelectionSize: 1
            });
          }
  });  
  return PromotionItemView;
});