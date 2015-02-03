define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.FulfilmentView = Backbone.View.extend({
    	el: "#page",
    	template: JST["app/scripts/templates/fulfilment.ejs"],
      length_messages: 0,
		  initialize: function(attrs) {
        	this.options = attrs;
      	},
    	render: function(options) {
    		var fulfilment_model = new dataEntryClient.Models.FulfilmentModel(options);
    		this.id = options.id;
    		var that = this;
    		that.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id});
    		if(!that.restaurant.get("form_id")){
              that.restaurant.fetch({async:false});
        }
    		start_loading();
    		fulfilment_model.fetch({
    			success: function(data, response) {
    				that.$el.html(that.template({obj: response.status_messages, limit_of_orders: response.limit_of_orders, length_messages: response.meta.length_messages}));
    				compile_sidebar({
                  		id: that.id,
                  		sidebar_active_tab: "fulfilment"
              		});
            that.length_messages = response.meta.length_messages;
            that.topNavigation=new dataEntryClient.Views.RestaurantTopNavigationView();
        		that.topNavigation.render(that.restaurant,response.meta.menu_stash);
        		stop_loading();
    			},
    			error: function(data, response, error) {
    				stop_loading();
    				generate_alert(false, "NOT EXISTS");
    				return;
    			}
    		});
    	},
		events: {
			"click  #save_button": "save_changes",
			"submit .form-horizontal": "save_changes"
		},
		save_changes: function(e) {
			//debugger
			e.preventDefault();
			start_loading();
			var that = this;
			var status_messages_ = {};
			// var isInteger_re     = /^\s*(\+|-)?\d+\s*$/;
			// function isInteger (s) {
   // 				return String(s).search (isInteger_re) != -1
			// }
			if(!Number.isInteger( parseInt( $("#limit_of_orders").val() ) ) ) {
				//debugger
				stop_loading();
				generate_alert(false, "Limit should be numeric only.");
				return;
			}
      for(var i = 1; i<=this.length_messages; i++) {
        status_messages_[i] = $("#text"+i.toString()).val();
      }
			var limit_of_orders_ = parseInt($("#limit_of_orders").val());
			var fulfilment_model = new dataEntryClient.Models.FulfilmentModel({limit_of_orders: limit_of_orders_, status_messages: status_messages_, id: this.id});
			//debugger
			fulfilment_model.save(null, {
				success: function(data, response) {
					stop_loading();
					that.render({id:that.id});
					generate_alert(true, "Saved Successfully!!");
				},
				error: function(data, response, error) {
					stop_loading();
					generate_alert(false, parseJSON(response.responseText.message.trim()));
				}
			});
		}
    });
});