/*global DataEntryPanel, Backbone*/

dataEntryClient.Models = dataEntryClient.Models || {};

(function () {
    'use strict';

    dataEntryClient.Models.DocumentModel = Backbone.RelationalModel.extend({

        url: function(){
            return "restaurants/documents/"+this.id;
        },

        initialize: function(options) {
            this.id = options.id;
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        buildObj: function(obj) {            
                      
        },

        parse: function(response, options)  {
            if (options == undefined) return response;
            return response.payload;
        }
    });

})();
