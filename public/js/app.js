var Sensor = Backbone.Model.extend({
    constructor: function() {

    },

    defaults: {
        'sensor_name': "NoName sensor"
    }
});

var SensorList = Backbone.Collection.extend({
    model: Sensor
});

var SensorView = Backbone.View.extend({
    tagName: 'div',

    events: {

    },

    initialize: {

    },

    render: function() {
        
    }
});