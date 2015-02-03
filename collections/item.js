/*global dataEntryClient, Backbone*/

dataEntryClient.Collections = dataEntryClient.Collections || {};

(function () {
    'use strict';

    dataEntryClient.Collections.ItemCollection = Backbone.Collection.extend({

        model: dataEntryClient.Models.Item,

        url: function () {
          return "restaurants/" + this.restaurant_id.toString() + "/items";
        },

        initialize: function (options) {
          this.restaurant_id = options.restaurant_id;
          console.log("initializing items Collections!");
        },

        parse: function(response) {
          return response.payload_items.items;
        },

        assign_events: function (items) {
          _.each(items, function(item) {
            item.listenTo(item.get('sizes'), 'add', function () {
              item.changed.sizes = item.get("sizes");
            });

            _.each(item.get('sizes').models, function(size) {
              size.listenTo(size.get('prices'), 'add', function () {
                size.changed.prices = size.get("prices");
                item.changed.sizes = item.get("sizes");
              });

              size.listenTo(size, 'change', function () {
                item.changed.sizes = item.get("sizes");
              });

              _.each(size.get('prices').models, function(price) {
                price.listenTo(price, 'change', function () {
                  size.changed.prices = size.get("prices");
                  item.changed.sizes = item.get("sizes");
                });
              });
            });
          });
        },

        changed_items: function (options) {
          var items = [];
          var dirty = false;
          _.each(options.models, function (item) {
             if (item.hasChanged()) {
              var message = item.validate();
              if (message != "") {
                generate_alert(false, (item.get('name') + " - " + message));
                dirty = true;
              }
              items.push(item);
            }
          });

          var names = options.pluck('name');
          var repeated_names = names.filter(function (name) { return names.indexOf(name, names.indexOf(name)+1) > -1 });

          if (repeated_names.length != 0) {
            generate_alert(false, "Repeated Item names - " + _.unique(repeated_names).join(','));
            dirty = true;
          }

          return (dirty != true) ? items : [];
        },

        save: function (options) {
          var that = this;
          var changed_models = this.changed_items(this);
          if(changed_models.length > 0) {
            that.models = changed_models;
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

    dataEntryClient.Collections.ItemSizesCollection = Backbone.Collection.extend({

      url: "item_sizes",

      model: dataEntryClient.Models.ItemSize,

      initialize: function(options) {
        console.log("intializing item sizes collections");
      },

      parse: function(response) {
        return response.payload_items.sizes;
      },
    });
})();

(function () {
    'use strict';

    dataEntryClient.Collections.ItemPricesCollection = Backbone.Collection.extend({

      url: "item_prices",

      model: dataEntryClient.Models.ItemPrice,

      initialize: function(options) {
        console.log("intializing item prices collections");
      },

      parse: function(response) {
        return response.payload;
      },
    });
})();