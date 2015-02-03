define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
  dataEntryClient.Views.TagsView = Backbone.View.extend({

    el: '#page',
    template: JST['app/scripts/templates/tags.ejs'],
    initialize: function(options) {
      this.options = options;
      this.collection = new dataEntryClient.Collections.TagsCollection();
      this.model = new dataEntryClient.Models.TagsModel();
    },


    get_ajax_handler : function(that){
      return {
        success: function(model, response) {
          that.render_success();
        },
        error: function(model, response, options) {
          generate_alert(false, $.parseJSON(response.responseText).message);
        },
        complete: function(){
          stop_loading();
        },
      }
    },


    render: function() {
      var that = this;
      start_loading();
      // this.collection.fetch(this.get_ajax_handler(this));
      this.collection.fetch(_.extend(this.get_ajax_handler(this),{
        success: function(model, response) {
          that.tag_type = response.tag_type;
          that.render_success();
        }
      }));
    },

    render_success:function(){
      this.$el.html(this.template({
            collection: this.collection,
            tag_type: this.tag_type
      }));
      this.load_plugins();
      this.initialize_popovers();
    },

    load_plugins: function() {
      $('#newTag').focus();
    },


    initialize_popovers: function() {
      var that = this;
      var html = JST['app/scripts/templates/tags/edit_tag.ejs'];
      $('.js-tag-edit').popover({
        placement: "top",
        html: true,
        trigger: 'click',
        content: function() {
          return html({
            item: that.collection.get($(this).data('id')),
            id: $(this).data('id'),
            tag_type: that.tag_type
          });
        }
      });
    },


    events: {
      'click .js-tag-add': 'add_tag',
      'click .js-tag-delete': 'delete_tag',
      'click .js-tag-update': 'edit_tag',
      'keydown #newTag': 'keydown',
    },


    save_item_tag:function (item,object){
        start_loading();
        item.save(object,this.get_ajax_handler(this));
    },


    edit_tag: function(e) {
      var errors = [];
      var that = this;
      var id = $(e.currentTarget).data('id');
      var updated_value = remove_spaces($('input[data-id=' + id + ']').val()).toUpperCase();
      var updated_type = parseInt($('select[data-id=' + id + ']').val());
      
      if (_.isEmpty(updated_value) || updated_type == 0) {
        errors.push("Please fill all fields");
      } else {
        var tag_exist = this.collection.findWhere({
          tag: updated_value,
        });
      
        if (_.isEmpty(tag_exist)) {
          var item = this.collection.get(id);
          this.save_item_tag(item,{
            tag: updated_value,
            tag_type: updated_type
          })
        } else if(tag_exist.get('tag') == updated_value && tag_exist.get('tag_type') != updated_type ){
          this.save_item_tag(tag_exist,{tag_type: updated_type});//changing tagtype
        }else{
          errors.push("Duplicate Tag");
        }
      }

      if (!_.isEmpty(errors)) {
        generate_alert(false, errors.join('/'));
      }
    },

    delete_tag: function(e) {
      var id = $(e.currentTarget).data('id');
      var that = this;
      var item = this.collection.get(id);
      var message = 'Are you sure? \nyou want to delete:' + item.get('tag');
      if (!confirm(message)) {
        return;
      }
      item.destroy(this.get_ajax_handler(that));
    },


    add_tag: function() {
      var errors = [];
      var that = this;
      var new_tag = remove_spaces($('#newTag').val()).toUpperCase();
      var tag_type = parseInt($('#tagType').val());

      if (_.isEmpty(new_tag) || tag_type == 0) {
        errors.push("Please fill all fields");
      } else {
        var existing_tag = this.collection.findWhere({
          tag: new_tag
        });

        if (!_.isEmpty(existing_tag)) {
          errors.push("Duplicate Tag");
        }
      }

      if (!_.isEmpty(errors)) {
        generate_alert(false, errors.join('/'));
      } else {
        this.collection.create({
          tag: new_tag,
          tag_type: tag_type
        }, this.get_ajax_handler(that));
      }
    },


    keydown: _.throttle(function(e) {
      if (e.keyCode === 13) {
        this.add_tag();
      }
    },800),
    
  });
});