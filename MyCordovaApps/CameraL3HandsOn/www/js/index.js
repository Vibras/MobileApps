
var app = {

    initialize: function() {
        document.getElementById("btn").addEventListener('click', app.takePhoto);
    },

    takePhoto: function() {
        console.log("Button Clicked.");

        navigator.camera.getPicture(app.onSuccess, app.onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
            })
        },
        onSuccess: function(imageData) {
            var image = document.getElementById('photo');
            image.src = "data:image/jpeg;base64," + imageData;
        },
        
        onFail: function(message) {
            alert('Failed because: ' + message);
        }
     
    };

app.initialize();
