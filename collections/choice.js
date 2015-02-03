/*global dataEntryClient, Backbone*/

dataEntryClient.Collections = dataEntryClient.Collections || {};

(function () {
  'use strict';

  dataEntryClient.Collections.ChoiceCollection = Backbone.Collection.extend({

    url: function () {
      return "restaurants/" + this.restaurant_id.toString() + "/choices";
    },

    model: dataEntryClient.Models.Choice,

    initialize: function (options) {
      this.restaurant_id = options.restaurant_id;
      console.log("intializing choice collections");
    },

    parse: function (response) {
      return response.payload;
    },

    get_changed: function (models) {
      var changed_items = [];
      var labels = [];
      var dirty = false;

      _.each(models, function (choice, i) {
        if (choice.hasChanged()) {
          var message = choice.validate();
          if (message != "") {
            if (choice.get('label') != undefined) {
              generate_alert(false, (choice.get('label') + " - " + message));
            } else {
              generate_alert(false, message);
            }
            dirty = true;
          } else {
            _.each(choice.get('options').models, function (option, j) {
              message = option.validate();
              if (message != "") {
                if ((choice.get('label') != undefined) && (option.get('name') != undefined)) {
                  generate_alert(false, (choice.get('label') + " -> " + option.get('name') + " - " + message));
                }
                else {
                  generate_alert(false, message);
                }
                dirty = true;
              }
            })
          }
          changed_items.push(choice);
        }

        if (labels.indexOf(remove_spaces(choice.get('label')).toUpperCase()) > -1) {
          generate_alert(false, "Choice label already used");
          dirty = true;
        } else {
          labels.push(remove_spaces(choice.get('label')).toUpperCase());
        }

        if (choice.validate_option_names(choice.get('options').models) == true) {
          dirty = true;
        }
      });

      if (dirty != true) {
        return changed_items;
      } else {
        return [];
      }

      return changed_items;
    },

    save: function (options) {
      var changed_items = this.get_changed(this.models);
      if (changed_items.length > 0) {
        var that = this;
        that.models = changed_items;
        Backbone.sync("update", that, options);
      } else {
        stop_loading();
        if (_.isEmpty($("#alerts").text())) {
          generate_alert(false, "Nothing to save.")
        }
      }
    }
  });
})();


(function () {
  'use strict';

  dataEntryClient.Collections.ChoiceOptionCollection = Backbone.Collection.extend({

    url: "choice_options",

    model: dataEntryClient.Models.ChoiceOption,

    initialize: function (options) {
      console.log("intializing choice options collections");
    },

    parse: function (response) {
      return response.payload;
    },


  });

})();