define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Views.AbsolutePositionView = Backbone.View.extend({

    el: '#page',
    template: JST['app/scripts/templates/absolute_position.ejs'],

    initialize: function () {
    },

    render: function(){
    	var that = this ; 
    	this.$el.html(this.template());
    	that.subview = new dataEntryClient.Views.AbsolutePositionSubView();
    	close_sidebar();
    	that.load_plugins();
    },

    load_plugins: function(){
    	var that = this;

      var locations = new Bloodhound({
      limit: 100,
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: $.map(window.collections.parent_localities.reverse(), function(locality) { return { value: locality.name, key: locality.id }; })
    	});

    	locations.initialize();

    	var global_filters = {};

    	var initialize_filters = function(){
    		global_filters.locality_id = get_locality_id($('#locality').val());
    	};

    	initialize_filters();

      $('#locality').typeahead({
        hint: false,
        highlight: true,
        minLength: 1
      },
      {
        name: 'locations',
        displayKey: 'value',
        // `ttAdapter` wraps the suggestion engine in an adapter that
        // is compatible with the typeahead jQuery plugin
        source: locations.ttAdapter()
      }).on("typeahead:autocompleted", filter_localities)
      .on("typeahead:selected", filter_localities);
      $('.tt-hint .tt-suggestion').addClass('form-control');
      $('.typeahead.input-sm').siblings('input.tt-hint').addClass('hint-small'); 

	    function filter_localities(){
		    if ($("#locality").val()) {
	        global_filters.locality_id = get_locality_id($("#locality").val());  
	        redirect_with_filters();                  
		    }
		    else{
		       global_filters.locality_id = undefined;
		    } 
			}

      var redirect_with_filters = function(){
      	if (global_filters.locality_id){
      		start_loading();
      		$.ajax({
				    type: "GET",
				    url: "delivery_areas_with_absolute_score?locality_id=" + global_filters.locality_id,
				    success: function(response) {
				    	
              that.subview.render(
				    		{
				    			response :response,
				    			locality_id :global_filters.locality_id
				    		}
				    	);
							stop_loading();
				    },
				    error: function(xhr){
				      alert("ERROR: " + xhr.responseText);
				    }
				  });
      	}
      }

		}
  });
});
