
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listener
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler 
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function funGeolocalization() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '+ position.coords.latitude + '<br />' +
                            'Longitude:'+ position.coords.longitude + '<br />' +
                            'Altitude: '+ position.coords.altitude + '<br />' +
                            'Accuracy: '+ position.coords.accuracy + '<br />' +
                            'Altitude Accuracy: '+ position.coords.altitudeAccuracy + '<br />' +
                            'Heading: '+ position.coords.heading + '<br />' +
                            'Speed: '+ position.coords.speed + '<br />' +
                            'Timestamp: '+ position.timestamp + '<br />';
    }

    // onError Callback receives a PositionError object
    function onError(error) {
        alert('Codigo: '    + error.code    + '\n' +
              'Mensaje: ' + error.message + '\n');
    }
