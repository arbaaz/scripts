define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Views.HeaderView = Backbone.View.extend({

        el: ".header.fixed-top",
        template: JST['app/scripts/templates/header.ejs'],
        events: {
            "click #logout" : 'logout',
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            //this.render();
        },

        render: function () {
          var data = arguments[0];
          var restaurant_id, active_tab, user_type;
          if(data == undefined){
            restaurant_id = null;
            active_tab = null;
            user_type = null;
          }
          else{
            restaurant_id = data.restaurant_id;
            active_tab = data.active_tab; 
            user_type = data.user_type;           
          }

          this.$el.html(this.template({
            profile: window.user.get_profile(),
            restaurant_id : restaurant_id,
            active_tab: active_tab,
            user_type: user_type
          }));
        },

        logout: function(){
            window.router.navigate("logout", { trigger : true});
        }

    });

});
