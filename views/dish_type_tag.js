define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
     //DishType view to add or update a dish type tag.
  var DishTypeTagView = Backbone.View.extend({
        
          template: JST['app/scripts/templates/dish_type_tag.ejs'],
          initialize: function(attrs) {
               this.options=attrs;
          },
    
          el: '#page',
 
          render: function(options) {
               var that=this;
               start_loading();
               if(options.id) { // update a dish type tag
                    
                    this.dish_type_tag=new dataEntryClient.Models.DishTypeTagModel({id:options.id}); 
                    
                    this.dish_type_tag.fetch({
                         success:function(dish_type_tag){
                              stop_loading();
                              var temp = that.template({
                                   dish_type_tag: dish_type_tag
                              });
                              that.$el.html(temp);
                              that.loadPlugins();
                              
                         },
                         error: function(data, response, error) {
                              stop_loading();
                              generate_alert(false,$.parseJSON(response.responseText).message);
                              return false;
                         }
                                   
                    })
               }
               else {  // add a dish type tag

                    var temp = that.template({
                         dish_type_tag:null
                    });
                    that.$el.html(temp);
                    stop_loading();               
                    that.loadPlugins();  
               }  
          },


          loadPlugins: function(){
               close_sidebar();
          },
      
         events: {
               'submit #dish_type_tag_form' : 'add_update_dish_type_tag'
         },
  
         add_update_dish_type_tag:function(e) {
               e.preventDefault();

               start_loading();
               if (this.$("#tag").val()=="-1") {
                    stop_loading();
                    generate_alert(false,"Please select a dish type tag.");
                    return;
               }
               var dish_type_tag_object = $('#dish_type_tag_form').serializeObject();
               if(this.id) { // update dish type tag 
                    this.dish_tag_type=new dataEntryClient.Models.DishTypeTagModel({id:this.id});
                    var that=this;
                    var dish_tag = {
                         keyword: dish_type_tag_object.keyword,
                         tag: dish_type_tag_object.tag
                    };
                
                    this.dish_tag_type.save(dish_tag, {
                         success: function(data,response) {
                              stop_loading();
                              Backbone.history.navigate('dish_type_tags', true);
                         },
                         error: function(data,response,error){
                             stop_loading();
                             generate_alert(false,$.parseJSON(response.responseText).message);
                         }
                    });
               }
               else { // add dish type tag 
                    this.dish_tag_type=new dataEntryClient.Models.DishTypeTagModel();
                    var that=this;
                     var dish_tag = {
                         keyword: dish_type_tag_object.keyword,
                         tag: dish_type_tag_object.tag
                    };
                
                    this.dish_tag_type.save(dish_tag, {
                         success: function(data,response) {
                              stop_loading();
                              Backbone.history.navigate('dish_type_tags', true);
                         },
                         error: function(data,response,error){
                             stop_loading();
                             generate_alert(false,$.parseJSON(response.responseText).message);
                         }
                    });
               }
           
         }

     });
  return DishTypeTagView;
});