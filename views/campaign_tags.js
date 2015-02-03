define([

    'underscore',
    'jquery',
    'backbone',

  ],
  function (_, $, Backbone) {
    'use strict';
    var CampaignTagsView = Backbone.View.extend({
      length_tags: 0,
      el: "#page",
      template: JST["app/scripts/templates/campaign_tags.ejs"],
      initialize: function (attrs) {
        this.options = attrs;
      },
      render: function (options) {
        var campaign_tags_model = new dataEntryClient.Models.CampaignTagsModel(options);
        this.id = options.id;
        var that = this;
        that.restaurant = dataEntryClient.Models.RestaurantModel.findOrCreate({id: options.id});
        if (!that.restaurant.get("form_id")) {
          that.restaurant.fetch({async: false});
        }
        start_loading();
        campaign_tags_model.fetch({
          success: function (data, response) {
            //debugger
            that.$el.html(that.template({
              obj: response.campaign_tags,
              length_tags: response.meta.length_tags,
              agent: response.agent,
              text_applicable_promo_message: response.not_applicable_promo_message
            }));
            compile_sidebar({
              id: that.id,
              sidebar_active_tab: "campaign_tags"
            });
            that.length_tags = response.meta.length_tags;
            for (var i = 1; i <= response.meta.length_tags; i++) {
              if (response.meta.keys.indexOf(i.toString()) != -1)
                $("#check" + i.toString()).prop('checked', true);
              else
                $("#check" + i.toString()).prop('checked', false);
            }

            $("#check_applicable_promo_message").prop('checked', response.is_offer_not_applicable);
            if (response.agent.number == null)
              $("#check_dedicated_agent").prop('checked', false);
            else
              $("#check_dedicated_agent").prop('checked', true);
            that.topNavigation = new dataEntryClient.Views.RestaurantTopNavigationView();
            that.topNavigation.render(that.restaurant, response.meta.menu_stash);
            stop_loading();
          },
          error: function (data, response, error) {
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
      save_changes: function (e) {
        e.preventDefault();
        start_loading();
        var that = this;
        var payload = {};
        var flags = {};
        //debugger
        for (var i = 1; i <= this.length_tags; i++) {
          flags[i] = $("#check" + i.toString()).is(':checked');
          if (flags[i])
            payload[i] = $("#text" + i.toString()).val();
        }
        //debugger
        var campaign_tags_model = new dataEntryClient.Models.CampaignTagsModel({id: this.id});
        campaign_tags_model.set({campaign_tags: payload});
        campaign_tags_model.set({is_dedicated_agent: $("#check_dedicated_agent").is(':checked')})
        if ($("#check_dedicated_agent").is(':checked')) {
          campaign_tags_model.set({agent_number: $("#text_agent_number").val()});
          campaign_tags_model.set({agent_name: $("#text_agent_name").val()});
        }
        if ($("#check_applicable_promo_message").is(':checked')) {
          campaign_tags_model.set({not_applicable_promo_message: $("#text_applicable_promo_message").val()})
          campaign_tags_model.set({is_offer_not_applicable: true})
        }
        else
          campaign_tags_model.set({is_offer_not_applicable: false})
        //debugger
        campaign_tags_model.save(null, {
          success: function (data, response) {
            stop_loading();
            that.render({id: that.id});
            generate_alert(true, "Saved Successfully!!");
          },
          error: function (data, response, error) {
            stop_loading();
            generate_alert(false, jQuery.parseJSON(response.responseText.message.trim()));
          }
        });
      }
    });
    return CampaignTagsView;
  });