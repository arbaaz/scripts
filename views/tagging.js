define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Views.TaggingView = Backbone.View.extend({
    el: '#page',
    copy_id: '',
    current_pos: '',
    template: JST['app/scripts/templates/tagging/tagging_new.ejs'],
    item_template: JST['app/scripts/templates/tagging/item_view.ejs'],
    item_edit_template: JST['app/scripts/templates/tagging/item_edit_view.ejs'],


    initialize: function(options) {
      var that = this;
      _.bindAll(this, 'on_keypress','select2_focus');
      $(document).bind('keydown', _.debounce(this.on_keypress,200));
      this.options = options;
      this.documentFragment = $(document.createDocumentFragment());
      this.item_collection = new dataEntryClient.Collections.TaggingCollection(options);
      //changed_item_collection is used to make post request on changed attributes of item_collection.
      this.changed_item_collection = new dataEntryClient.Collections.TaggingCollection(options);
      this.tags_collection = new dataEntryClient.Collections.TagsCollection(); //Collection of tags available
      this.tags_type_model = new  dataEntryClient.Models.TagsModel() ; //
      this.tags_type_model.url = 'tags_by_type';
      this.tags_type_model.parse = function(response) {
            return response.tags;
        }
    },


    render: function(options) {
      var that = this;
      start_loading();
      close_sidebar();
      // please refer jquery $.when documentation.
      // http://api.jquery.com/jQuery.when/
      $.when(
            this.tags_collection.fetch(),//all the tags available
            this.item_collection.fetch(),// all the items in the restaurant
            this.tags_type_model.fetch()//type of tags
        ).then(function (tagsAjaxArgs,itemsAjaxArgs) {
          var tags = {
            data:tagsAjaxArgs[0],
            textStatus:tagsAjaxArgs[1],
            jqXHR:tagsAjaxArgs[2]
          }
          var items = {
            data:itemsAjaxArgs[0],
            textStatus:itemsAjaxArgs[1],
            jqXHR:itemsAjaxArgs[2]
          }
          that.$el.empty();
          that.tag_types = tags.data.tag_type;
          //appending bread crumb to document Fragment
          that.menu_progress_bar = new dataEntryClient.Views.MenuProgressBarView({
            id: '#top_navigation',
            className: 'row',
            el: ''
          });
          var menu_bar_El = that.menu_progress_bar.render(items.data.meta, that.options.restaurant_id).el;
          that.documentFragment.append(menu_bar_El);

          // this template is table, with id = itemViews.
          that.documentFragment.append(that.template({
            restaurant_id: that.options.restaurant_id,
            tag_types:that.tag_types
          }));
          that.item_views_El = that.documentFragment.context.getElementById('itemViews');

          // appending rows of item to itemviews table
          that.item_collection.each(function(item) {
            var node = that.add_view(item);
            that.item_views_El.appendChild(node);
          });
          that.$el.append(that.documentFragment);

        },function(object,textStatus,statusText){//$.then 2nd arg used for error handling
              generate_alert(false,"Status:"+statusText+" "+object.responseText);
            }).always(function(){
              stop_loading();
              that.load_plugins();  
              that.is_item_tag_empty();
            });
    },


    error_handler:function(model, response, options) {
          generate_alert(false, $.parseJSON(response.responseText));
    },


    add_view: function(item) {
      var html = this.item_template({
        item: item,
        tags: this.tags_type_model,
        tag_types: _.pluck(this.tag_types, function(x) { return x.tag_type })
      });
      var node = $.parseHTML(html); //html is string
      return _.first(node);
    },


    events: {
      'click tr': 'tr_click',
      'click #save': 'save',
      'change .js_tag_select': 'select_el_change',
      'click .js_edit': "edit", 
      'click .js_done': "done", 
      'click .js_copy': "copy_tags", 
      'click .js_paste': "paste_tags", 
      'focus tr': "tr_focus",
      'click .js_tag_remove':'remove_tag',
    },


    tr_click:function  (e) {
      this.id = $(e.currentTarget).data('id');
    },


    remove_tag:function(e){
      e.preventDefault();
      var text = $(e.currentTarget).parent().text();
      var id = $(e.currentTarget).closest('tr').data('id')
      var item = this.item_collection.get(id);
      var old_tags = item.get('tags');
      item.set({
          tags: _.without(old_tags, text)
        });
      var node = this.add_view(item);
      $('tr[data-id="'+id+'"]').replaceWith(node);
    },


    on_keypress:function(e){
      e.preventDefault();
      if(e.ctrlKey){
        switch(String.fromCharCode(e.which).toLowerCase()){
          case 'c'://ctrl+c
            this.copy_item(this.current_pos);
            return false;
          case 'd'://ctrl+d
            this.done_item(this.current_pos);
            return false;
          case 'e'://ctrl+e
            this.edit_item(this.current_pos);
            return false;
          case 's'://ctrl+S
            // e.preventDefault(); 
            this.save();
            return false;
          case 'v'://ctrl+v
            this.paste_item(this.current_pos);
            return false;
        }
      }
      return true;
    },


    tr_focus:_.debounce(function(e){
      var id = $(e.currentTarget).data('id')
      this.current_pos = id;
      console.log('focused'); 
    },800),


    copy_tags:function(e){
      var id = $(e.currentTarget).closest('tr').data('id'); 
      this.copy_item(id);
    },


    paste_tags:function(e){
      var to_id = $(e.currentTarget).closest('tr').data('id');
      this.paste_item(to_id);
    },


    edit:function  (e) {
      var id = $(e.currentTarget).closest('tr').data('id');
      this.edit_item(id);
    },

    done: function(e){
      var id = $(e.currentTarget).closest('tr').data('id');
      this.done_item(id);
    },


    copy_item:function(id){
      $('i.mark_icon.fa-check-square').removeClass('fa-check-square');  
      $('tr.tr-color').removeClass('tr-color');
      $('tr[data-id="'+id+'"]').toggleClass('tr-color').find('i.mark_icon').toggleClass('fa-check-square')
      this.copy_id = id;
    },


    paste_item:function(id){
      var to_id = id;
      var from_id = this.copy_id
      if(_.isEmpty(from_id)){
       alert('Please copy before pasting');
       return; 
      }
      var copy_item = this.item_collection.find({id:from_id});
      var paste_item = this.item_collection.find({id:to_id});
      paste_item.set({
        tags:copy_item.get('tags')
      })
      var node = this.add_view(paste_item);
      $('tr[data-id="'+to_id+'"]').replaceWith(node);
      $('tr[data-id="'+to_id+'"]').focus();
    },

    edit_item:function(id){
      var item = this.item_collection.find({id:id})
      var html = this.item_edit_template({
        item: item,
        tags: this.tags_type_model,
        tag_types: _.pluck(this.tag_types, function(x) { return x.tag_type })
      });
      var node = $.parseHTML(html);
      var select_el = $(_.first(node)).find('.js_tag_select')
      this.initialize_select2(select_el, item.get('tags'));
      $(_.first(node)).find('select').first().select2('open');
      $('tr[data-id="'+id+'"]'). replaceWith(_.first(node))
    },


    done_item:function(id){
      var item = this.item_collection.find({id:id})
      var node = this.add_view(item);
      $('tr[data-id="'+id+'"]').find('select').select2('close').unbind();
      $('tr[data-id="'+id+'"]').replaceWith(node);
      $('tr[data-id="'+id+'"]').focus();
    },

    load_plugins: function() {
    },


    save: function() {
      // e.preventDefault();
      start_loading();
      var that = this;
      this.changed_item_collection.reset();
      this.is_item_tag_empty();
      var is_valid = this.is_collection_changed();
      if (is_valid) {
        this.changed_item_collection.createAll(function(data){
          that.item_collection.reset(data);
          stop_loading();
          generate_alert(true, "Changes Saved!");
        });
      } else {
        stop_loading();
        generate_alert(false, 'No change in Items');
      }
    },


    item_tags_valid: function() {
      var errors = [];
      if (this.is_item_tag_empty()) {
        errors.push('Please assign tags to all Items');
      } else if (this.is_collection_changed()) {
        errors.push('No change in Items');
      }
      if (!_.isEmpty(errors)) {
        generate_alert(false, errors.join('/'));
      }
      return _.isEmpty(errors); //Empty array = no errors
    },


    is_item_tag_empty: function() {
      var is_item_tag_empty = this.item_collection.some(function(item) {
        return _.isEmpty(item.get('tags'));
      });
      if (!is_item_tag_empty) {
        $('#js_next').removeAttr('disabled'); //enable next button in tagging.ejs
      } else {
        $('#js_next').attr('disabled', 'disabled'); //disabled next button in tagging.ejs
      }
      return is_item_tag_empty;
    },


    is_collection_changed: function() {
      this.changed_item_collection.models = this.item_collection.filter(function(item) {
        return item.hasChanged();
      });
      return !this.changed_item_collection.isEmpty()
    },


    test: function(e) {
      e.preventDefault();
      console.log('test function');
    },


    select_el_change: function(e) {
      // var id = $(e.currentTarget).data('id');
      var id = $(e.currentTarget).closest('tr').data('id');
      var item = this.item_collection.get(id);
      var tag_type_val = $(e.currentTarget).data('tag-type');
      var old_tags = item.get('tags');
      if ( _.has(e, 'added') ) {
        item.set({
          tags: _.union(old_tags, e.val)
        });
      } else {
        item.set({
          tags: _.without(old_tags, e.removed.text)
        });
      }      
    },


    select2_focus:function(e) {
        var that = this;
        var next_el = $(e.currentTarget).closest('tr').next();
        var id = next_el.data('id');
        if( !_.isEmpty(id) ){
          var item = that.item_collection.find({id:id})
          var html = that.item_edit_template({
            item: item,
            tags: that.tags_type_model,
            tag_types: _.pluck(that.tag_types, function(x) { return x.tag_type })
          });
          var node = $.parseHTML(html);
          var select_el = $(_.first(node)).find('.js_tag_select');
          that.initialize_select2(select_el, item.get('tags'));
          $('tr[data-id="'+id+'"]'). replaceWith(_.first(node));
        }
    },


    initialize_select2: function(select_el, tags) {
      var that = this;
      select_el.select2({
        tokenSeparators: [',', ' '],
        placeholder: 'Select tags',
        allowClear: true,
        theme: "classic",
        tag: "true",
      });
      select_el.select2('val', tags)
      select_el.last().on("select2-focus",this.select2_focus);
    }
  }); //end-extends
});
