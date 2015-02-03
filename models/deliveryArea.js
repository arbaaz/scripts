define([       

    'underscore',
    'jquery',
    'backbone',
    
],
function( _, $, Backbone)
{ 
  'use strict';
    dataEntryClient.Models.DeliveryareaModel = Backbone.Model.extend({

        urlRoot: 'delivery_areas',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

        buildObj: function(obj) {
            var count = parseInt(obj['delivery_area_count']);
            var deliveryAreas = [];

            for (var i = 0; i < count; i++) {
                var deliveryArea = {};
                deliveryArea['id'] = obj['locality_' + i];
                //deliveryArea['locality_id'] = obj['locality_id_' + i];
                deliveryArea['locality_group_id'] = $('#locality_id_'+ i ).val();
                deliveryArea['min_delivery_amount'] = obj['min_delivery_amount_' + i];
                deliveryArea['rush_hour_delivery_time'] = to_seconds(obj['rush_hour_delivery_time_' + i]);
                deliveryArea['delivery_time'] = to_seconds(obj['delivery_time_' + i]);
                deliveryArea['delivery_charges'] = obj['delivery_charges_' + i];
                deliveryArea['delivery_type'] = $('#delivery_type_id_'+ i ).is(':checked')==true ? window.collections.delivery_type.EXPRESS : window.collections.delivery_type.DEFAULT;
                deliveryArea['key'] = obj['key_' + i];
                deliveryArea['to_delete'] = obj['delete_' + i];
                // building timing objects
                var timings = [];
                for (var j = 0; j < obj['timing_count_' + i]; j++) {
                    var timing_obj = {};
                    if (obj['timing_id_' + i + '_' + j] != undefined) {
                        timing_obj['id'] = obj['timing_id_' + i + '_' + j];
                        timing_obj['start'] = obj['timing_start_' + i + '_' + j];
                        timing_obj['end'] = obj['timing_end_' + i + '_' + j];

                        var time_start = timing_obj['start'].split(":");
                        var time_end = timing_obj['end'].split(":");
                        // converting to seconds
                        var start = (parseInt(time_start[0])*3600 + parseInt(time_start[1])*60);
                        var end = (parseInt(time_end[0])*3600 + parseInt(time_end[1])*60);
                        timing_obj.start_in_secs = start;
                        timing_obj.end_in_secs = end;

                        timings.push(timing_obj);
                    }
                }

                deliveryArea['timings'] = timings;
                if(!(deliveryArea['to_delete'] == 'true' && deliveryArea['id'] == 'new')){
                    deliveryAreas.push(deliveryArea);
                }
            };
            return deliveryAreas;
        }
    });

});
