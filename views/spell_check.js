define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  var SpellCheckView = Backbone.View.extend({

    	initialize: function() {
    		window.restaurant_id = ""
    	},
    	el: '#page',
    	template: JST['app/scripts/templates/spell_check.ejs'],
    	render: function(options){
    		window.restaurant_id = options.restaurant_id
    		var that = this
	    	that.spell_check = new dataEntryClient.Collections.SpellCheckCollection();
	    	that.spell_check.url = '/restaurant/crm/restaurants/'+options.restaurant_id + that.spell_check.url;

	    	start_loading();
        	that.spell_check.fetch({
        		skip_url_prefix:true,
		        success: function(data,response) {
		        	stop_loading();
		        	that.$el.html(that.template({dictionary: response.payload,restaurant_id : options.restaurant_id}));
		        	
		        	that.menu_progress_bar=new dataEntryClient.Views.MenuProgressBarView();
		        	
                    that.menu_progress_bar.render( response.meta , options.restaurant_id);


		        	that.loadPlugins();
		        },
		        error: function(data, response, error){
  					stop_loading();
  					generate_alert(false, $.parseJSON(response.responseText).message);
  				}
	    	});
        },

        loadPlugins: function(){
        	close_sidebar();
        },

        events: {
        	'click .js_suggestion' : 'suggestions',
        	'click .update_word': 'update_word',
        	'click #add_dictionary_word' : 'add_word_to_dictionary',
        },

        add_word_to_dictionary: function(e){
          var _this = e.currentTarget
          var word = _this.dataset.mistakeWord
          $.ajax({
            skip_url_prefix:true,
            url: '/restaurant/crm/word_dictionaries',
            type: 'POST',
            data: {
              'data_word_dictionary':{
                  'assigned_to' : "Item",
                  'word'        : word
                  }            
                },
                success: function(response){
                    $(_this).parents("tr").remove()
                    generate_alert(true,response.message)
                },
                error: function(response){
                    generate_alert(false, $.parseJSON(response.responseText).message);
                }
          });
        	
        },

        suggestions: function(e){
        	var that = e.currentTarget
        	var data = that.dataset.word;
		    $(that).parent().find('.suggestion_text').val(data);
        },

        update_word: function(e){
        	var that = e.currentTarget
        	if(!$(that).parent().find('.suggestion_text').val())
  		    {
  		      alert('text field empty')
  		      return 
  		    }
  		    var _this = that

  		    if ($(that).attr('data-mistake-type') == "MenuCategory")
  		    {
  		      	$.ajax({
  		      		skip_url_prefix:true,
      					url: '/restaurant/crm/restaurants/'+window.restaurant_id+'/category/update',
      					type: "PUT",
      					data: {
      					    'data': {
      					      "category_id": e.target.id,
      					      "mistake_word": $(_this).attr('data-mistake-word'),
      					      "correct_word" : $(_this).parent().find('.suggestion_text').val()
      					    }
  					},
  					success: function(data) {
  					$(_this).parents("tr").remove()
  					  return
  					},
  					error: function(data){
  					  alert(data.responseText);
  					  return;
  					}
  		        });
  		    }
  		    else if (($(that).attr('data-mistake-type') == "Item"))
  		    {
  		      	$.ajax({
                skip_url_prefix:true,
                url: '/restaurant/crm/restaurants/'+window.restaurant_id+'/update_items_dictionary',
  	            type: "PUT",
  	            data: {
  	                  'data': {
  	                    "item_id": e.target.id,
  	                    "mistake_word": $(_this).attr('data-mistake-word'),
  	                    "correct_word" : $(_this).parent().find('.suggestion_text').val(),
                        "field_name": $(_this).attr('data-field-name'),
  	                  }
  	            },
  	            success: function(data) {
                  // console.log(_this)
  	              $(_this).parents("tr").remove()
                  generate_alert(true,data.message)
  	                return
  	            },
  	            error: function(data){
  	                alert(data.responseText);
  	                return;
  	            }
  		        });
  		    }
        }

  	});
  return SpellCheckView;
});