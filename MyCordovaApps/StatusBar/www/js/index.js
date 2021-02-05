var app = {
    initialize: function() {
        document.addEventListener(
            'deviceready',
            this.onDeviceReady.bind(this),
            false
        );
    },

    onDeviceReady: function() {
        if (cordova.platformId == 'android') {
            StatusBar.backgroundColorByHexString('#f00');
            StatusBar.styleLightContent();
        }
    }
};

app.initialize();