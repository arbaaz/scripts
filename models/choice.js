/*global dataEntryClient, Backbone*/

dataEntryClient.Models = dataEntryClient.Models || {};

(function () {
    'use strict';

    dataEntryClient.Models.ChoiceOption = Backbone.RelationalModel.extend({

        urlRoot: 'choice_options',

        initialize: function() {
        },

        defaults: {
        },

        validate: function() {
          var char_regex = /[a-zA-Z0-9]/;
          var number_regex = /^[0-9]\d*(\.\d+)?$/;

          if ((this.get('name') == undefined) || (!char_regex.test(this.get('name')))) {
            return "Name cannot be blank!";
          } else if ((this.get('max_number') == undefined) || (!number_regex.test(this.get('max_number'))) || (this.get('max_number') == 0)) {
            return "Max Number should be a number grater than 0!";
          } else if ((this.get('price') == undefined) || (!number_regex.test(this.get('price'))) || (parseFloat(this.get('price')) < 0)) {
            return "Price should be a number greater than equal to 0!";
          } else {
            return "";
          }
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();



(function () {
    'use strict';

    dataEntryClient.Models.Choice = Backbone.RelationalModel.extend({

        urlRoot: 'choices',

        relations: [{
            type: Backbone.HasMany,
            key: 'options',
            relatedModel: dataEntryClient.Models.ChoiceOption,
            collectionType: dataEntryClient.Collections.ChoiceOptionCollection,
            reverseRelation: {
                key: 'choice',
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
          var number_regex = /^[0-9]*$/;

          if ((this.get('name') == undefined) || (!char_regex.test(this.get('name')))) {
            return "Name cannot be blank!";
          } else if ((this.get('label') == undefined) || (!char_regex.test(this.get('label')))) {
            return "Label cannot be blank!";
          } else if ((this.get('label_for_restaurant') == undefined) || (!char_regex.test(this.get('label_for_restaurant')))) {
            return "Label for Restaurant cannot be blank!";
          } else if (_.contains([undefined, ""], this.get('min')) || _.contains([undefined, ""], this.get('max')) || (!number_regex.test(this.get('min'))) || (!number_regex.test(this.get('max')))) {
            return "Min and Max should be numbers. Max should be greater than 0";
          } else if (parseInt(this.get('max')) < parseInt(this.get('min'))) {
            return "Max cannot be less than Min";
          } else if (parseInt(this.get('max')) < 1) {
            return "Max cannot be less than 1";
          } else if ((this.get('options') == undefined) || (this.get('options').length == 0)) {
            return "Doesn't contain any choice options!";
          // } else if (_.isEmpty(this.get('defaults'))) {
          //   return "Default was not set. Please set atleast one default option";
          } else if (this.validate_default_price()) {
            return "Default choice option's price should be 0";
          } else if (this.get('options').length < parseInt(this.get('max'))) {
            return "Max cannot be greater than number of choice options";
          } else {
            if (this.get('defaults') != undefined) {
              if (this.get('defaults').length < parseInt(this.get('min'))) {
                return "Number of defaults cannot be less than min value";
              } else if (this.get('defaults').length > parseInt(this.get('max'))) {
                return "Number of defaults cannot be more than max value";
              } else {
                return "";
              }
            } else if (parseInt(this.get('min')) > 0) {
              return "Number of defaults cannot be less than min value";
            } else {
              return "";
            }
          }
        },

        validate_options: function(options_collection) {
          if (options_collection.length == 1) {
            return "Choice needs to have atleast one option!";
          } else if (options_collection.filter(function (option) { if (option.get('id').split('_')[0] != 'new') { return true; } }).length < 2) {
              return "Please save your new option before deleting the only assigned!";
            }
          else {
            return "";
          }
        },

        validate_default_price: function () {
          var dirty = false;

          _.each(this.get('defaults'), function (option_id) {
            var option = dataEntryClient.Models.ChoiceOption.find({ id : option_id});

            if (option == null) {
              dirty = true;
              return dirty;
            }
            
            if (option.get('price') != 0) {
              dirty = true;
            }
          });
          return dirty;
        },

        validate_option_names: function (options) {
          var names = [];
          var dish_type = [];
          var dirty = false;

          _.each(options, function (option) {
            var name = remove_spaces(option.get('name')).toUpperCase();
            var dish = option.get('veg_type');
            var index = names.indexOf(name);

            if ((index > -1) && (dish == dish_type[index])) {
              generate_alert(false, (option.get('choice').get('label') + " -> " + "Repeated option not allowed"));
              dirty = true;
            } else {
              names.push(name);
              dish_type.push(dish);
            }
          });

          return dirty;
        },

        parse: function(response, options) {
            return response;
        }
    });

})();