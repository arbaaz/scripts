/*global dataEntryClient, Backbone*/

dataEntryClient.Models = dataEntryClient.Models || {};

(function () {
    'use strict';

    dataEntryClient.Models.ItemPrice = Backbone.RelationalModel.extend({

        urlRoot: 'item_prices',

        initialize: function() {
        },

        defaults: {
        },

        parse: function(response, options)  {
            return response.payload_items;
        },

        get_timing: function(){
            return dataEntryClient.Models.TimingModel.find(this.get('timing_id')).get('name');
        }
    });
})();

dataEntryClient.Models = dataEntryClient.Models || {};

(function () {
    'use strict';

    dataEntryClient.Models.ItemSize = Backbone.RelationalModel.extend({

        urlRoot: 'item_sizes',

        relations: [{
            type: Backbone.HasMany,
            key: 'prices',
            relatedModel: dataEntryClient.Models.ItemPrice,
            collectionType: dataEntryClient.Collections.ItemPricesCollection,
            reverseRelation: {
                key: 'item',
                includeInJSON: 'id'
            },
            createModels: true
        }],

        initialize: function() {
        },

        defaults: {
        },

        validate_prices: function(price_collection) {
          var number_regex = /^[0-9]\d*(\.\d+)?$/;
          var timings = price_collection.map(function(m) { return m.get('timing_id') });

          if (_.contains(timings, 'ALL') && (timings.length > 1)) {
            return "price assigned for ALL timings. Remove the rest."
          } else if (timings.length != _.unique(timings).length) {
            return "repeated timings for a size"
          } else if (_.some(price_collection.models, function(price) {
              return ((!number_regex.test(price.get('price'))) || (price.get('price') === "") || (parseFloat(price.get('price')) <= 0))
            })) {
            return "price needs to be filled with a valid number greater than 0";
          } else {
            return "";
          }
        },

        validate_delete: function(price_collection) {
          if (price_collection.length == 1) {
            return "Cannot leave size with no price!";
          } else if (price_collection.filter(function (price) { if (price.get('id').split('_')[0] != 'new') { return true; } }).length < 2) {
              return "Please save your new price before deleting the only assigned!";
            }
          else {
            return "";
          }
        },

        parse: function(response, options)  {
            return response;
        },

        get_size: function(){
            return get_size_by_id(this.get('size_id'));
        }
    });
})();


(function () {
    'use strict';

    dataEntryClient.Models.Item = Backbone.RelationalModel.extend({

        urlRoot: 'items',

        relations: [{
            type: Backbone.HasMany,
            key: 'sizes',
            relatedModel: dataEntryClient.Models.ItemSize,
            collectionType: dataEntryClient.Collections.ItemSizesCollection,
            reverseRelation: {
                key: 'item',
                includeInJSON: 'id'
            },
            createModels: true
        }],

        initialize: function() {
        },

        defaults: {
        },

        validate: function() {
          var char_regex = /[a-zA-Z0-9]/;
          var message = "";
          var sizes = this.get('sizes').models.map(function(m) { return m.get('size') });

          if (!char_regex.test(this.get('name')) || this.get('name') == undefined) {
            return "Name cannot be blank!";
          }

          // var names = this.collection.pluck('name');
          // var index = names.indexOf(remove_spaces(this.get('name')));
          // if (index > -1) {
          //   if (names.indexOf(remove_spaces(this.get('name')), (index + 1)) > -1) {
          //     return "Repeated names not allowed";
          //   }
          // }

          if (sizes.length != _.unique(sizes).length) {
            return "Repeated sizes for an item"
          }

          _.each(this.get('sizes').models, function (size) {
            message = size.validate_prices(size.get('prices'));
            if (message != "") {
              return message;
            }
          });

          return message;
        },

        validate_sizes: function(size_collection) {
          if (size_collection.length == 1) {
            return "Cannot leave item with no size/price!";
          } else if (size_collection.filter(function (size) { if (size.get('id').split('_')[0] != 'new') { return true; } }).length < 2) {
              return "Please save your new size before deleting the only assigned!";
            }
          else {
            return "";
          }
        },

        assign_events: function (item, size, price) {
          // assigning add price event to new size
          size.listenTo(size.get('prices'), 'add', function () {
            size.changed.prices = size.get("prices");
            item.changed.sizes = item.get("sizes");
          });

          // assigning change size event to new size
          size.listenTo(size, 'change', function () {
            item.changed.sizes = item.get("sizes");
          });

          // assigning price change event to new size
          price.listenTo(price, 'change', function () {
            size.changed.prices = size.get("prices");
            item.changed.sizes = item.get("sizes");
          });
        },

        parse: function(response, options) {
            return response;
        }
    });
})();