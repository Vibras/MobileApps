var app = {
    initialize: function() {
        document.addEventListener(
            'deviceready',
            this.onDeviceReady.bind(this),
            false
        );
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var currentHeading = navigator.compass.getCurrentHeading(
            this.onSuccess,
            this.onError
        );
    },

    onSuccess: function(heading) {
        alert('Heading: ' + heading.magneticHeading);
    },

    onError: function(error) {
        alert('CompassError: ' + error.code);
    }
};

app.initialize();