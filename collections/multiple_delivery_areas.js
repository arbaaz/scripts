/*global dataEntryClient, Backbone*/

dataEntryClient.Collections = dataEntryClient.Collections || {};

(function() {
    'use strict';
    dataEntryClient.Collections.MultipleDeliveryAreasCollection = Backbone.Collection.extend({

        // model: dataEntryClient.Models.MutlipleDeliveryAreasModel,
        url: function() {
            return 'restaurants/multiple_delivery_areas';
        },

        initialize: function(options) {
            this.options = options;   
        },

        parse: function(response) {
            return response.data;
        }
          
    });

})();

    
    var SearchedLocation = Backbone.Model.extend({})

    var SearchedLocations = Backbone.Collection.extend({
        model : 'SearchedLocation'
    })
