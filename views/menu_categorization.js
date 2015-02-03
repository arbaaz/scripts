define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  var MenuCategorizationView = Backbone.View.extend({

      initialize: function() {
        this.save_local_tags = {}
        this.main_category_count = 0
      },
      el: '#page',
      template: JST['app/scripts/templates/menu_categorization.ejs'],
      render: function(options){
        var that = this
        that.menu_categorization = new dataEntryClient.Collections.MenuCategorizationCollection();
        that.menu_categorization.url = 'items/'+options.restaurant_id + that.menu_categorization.url;
        close_sidebar();
        start_loading();
          that.menu_categorization.fetch({

            success: function(data,response){
              that.items = response.payload.items
              stop_loading();
              var l1_tags = that.l1_tags = {} //level one tags - Main category
              var l2_tags = that.l2_tags = {} //level two tags - Main/Sub category tree

              _.each(response.payload.items,function(item){
                var tags = item.tags
                var length = tags.length
                _.each(tags,function(tag){
                  l1_tags[tag] = (l1_tags[tag] || 0) + 1;
                })
                for(var a=0; a<length; a++){
                  l2_tags[tags[a]] = l2_tags[tags[a]] || {};
                  for(var b=0; b<length; b++){
                    if(a==b)continue; //if same tag name
                    l2_tags[tags[a]][tags[b]] = (l2_tags[tags[a]][tags[b]] || 0) + 1
                  }
                }
              })
              //sorting l1_tags according to tags count
              var sortable = [];
              for (var count in l1_tags)
                sortable.push([count, l1_tags[count]])
              sortable.sort(function(a,b){return b[1] - a[1]});

              // making tags tree from existing tags
              var category = {}
              _.each(response.payload.categories, function(cat){
                if(category[cat.parent_cat]==undefined)
                    category[cat.parent_cat]= (cat.child_cat.length != 0) ? cat.child_cat.split(',') : []
                else 
                    category[cat.parent_cat].push(cat.child_cat)
              })              
              var selected_tags = Object.keys(category)              
              that.save_local_tags = category
              that.main_category_count = selected_tags.length

              that.$el.html(that.template({l1_tags : sortable, res_id : options.restaurant_id,category:category}))
              that.menu_progress_bar=new dataEntryClient.Views.MenuProgressBarView();             
              that.menu_progress_bar.render(response.meta , options.restaurant_id);
              that.loadPlugin();
              $('.enter_categorization_tags').html(partial("partials_enter_categorization_tags",{
                data:selected_tags,
                l2_tags:that.l2_tags,
                category:category
              }))
              $('.show_categorization').html(partial("partials_show_categorization",{data: category}))
              for(var i=0; i< that.main_category_count;i++)
                $("#secondary_tags_"+i).select2();
            },
            error: function(data, response, error){
              stop_loading();
              generate_alert(false, $.parseJSON(response.responseText).message);
              return false;
            }
          });

      },

      loadPlugin: function(){
        $("#show_all_tags").select2();
      },

      events: {
        'change .secondary_tags' : 'update_local_mapping_of_tags',
        'click .tag-label' : 'show_second_level_tags',
        'click #add_tags' : 'make_levels_from_tags',
        'click #save_tags_categorization' : 'save_tags_categorization'
      },

      save_tags_categorization: function(e){
        var final_categorization = {}
        var parent = ""
        var children = ""
        for(var index = 0;index < this.main_category_count;index++){
          parent = $('#primary_tags_'+index).text()
          children    = _.pluck($('#secondary_tags_'+index).select2('data'),'id')
          final_categorization[parent] = children
        }
        var items=this.items;
        var items_used = [];
        //check if all items have been assigned to any category or not
        _.each(Object.keys(final_categorization),function(k){
          if(final_categorization[k].length == 0)
          {
            _.each(items,function(item){ 
              if(item['tags'].indexOf(k)>-1)
                  items_used.push(item['id'])
            })
          }
          else{
            _.each(final_categorization[k],function(v){
              _.each(items,function(item){            
                 if(item['tags'].indexOf(k)>-1 && item['tags'].indexOf(v)>-1)
                  items_used.push(item['id'])
               })
            })
          }
        })
        var items_not_used = _.difference(_.pluck(items,'id'), items_used)
        if(items_not_used.length == 0){
          start_loading()
          $.ajax({
            url : 'items/save_item_menu_categorization',
            type: 'POST',
            data: {
              data: JSON.stringify(final_categorization),
              restaurant_id: e.currentTarget.dataset.id,
            },
            success: function(response){
              stop_loading()
              generate_alert(true,"Saved Successfully");
              $('.show_categorization').removeClass('hidden')
              $('.show_categorization').html(partial("partials_show_categorization",{data: final_categorization}))
            },
            error: function(data,response, error){  
              generate_alert(false,error);
            }
          })
        }
        else{
          $('.show_categorization').addClass('hidden');
          var items_not_used_name = "";
          _.each(items_not_used, function(item_id){
            items_not_used_name += (" , "+_.findWhere(items,{id:item_id}).name);
          })
          generate_alert(false,"Following items are not assigned to any Menu category: "+items_not_used_name);
        }
      },
      //UPDATE LOCAL TAGS OBJECT ON CHANGE
      update_local_mapping_of_tags: function(e){

        var index   = e.currentTarget.dataset.index
        var parent  = $('#primary_tags_'+index).text()
        var children= _.pluck($('#secondary_tags_'+index).select2('data'),'id')
        if(_.has(e,'added')){
          if(this.save_local_tags[parent].length ==0)
            this.save_local_tags[parent] = e.added.id.split(',')
          else
            this.save_local_tags[parent].push(e.added.id)
        }
        else{
          var i = this.save_local_tags[parent].indexOf(e.removed.id)
          this.save_local_tags[parent].splice(i,1)
        }
      },

      show_second_level_tags: function(e){
        var l2_tags = this.l2_tags
        var that = e.currentTarget;
        var tag_name = that.id
        _.each(Object.keys(this.l1_tags),function(l1){
          $("[id='"+l1+"']").removeClass('tag-background-color')
          $("[id='"+l1+"']").children().removeClass('tag-background-color')
        })
        $(that).addClass('tag-background-color')
        $(that).children().addClass('tag-background-color')
        var level2_tags = l2_tags[that.id]
        $('#second_level_tags').html(partial("partials_menu_categorization",{l2_tags : _.pairs(level2_tags)}));
      },

      make_levels_from_tags: function(){
        var selected_tags = _.pluck($("#show_all_tags").select2('data'),'id')
        var that = this
        _.each(selected_tags,function(tags){
          that.save_local_tags[tags] = (that.save_local_tags[tags] || [])
        })
        this.main_category_count = selected_tags.length
        $('.enter_categorization_tags').html(partial("partials_enter_categorization_tags",{
          data:selected_tags,
          l1_tags:this.l1_tags,
          l2_tags:this.l2_tags,category:this.save_local_tags
        }))
        _.each(selected_tags,function(d,i){
          $("#secondary_tags_"+i).select2();
        })
      },

 });
  return MenuCategorizationView;
});