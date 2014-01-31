var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready',this.onDeviceReady, false);
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

function propertiesDevice(){

    var element = document.getElementById('deviceProperties');

    alert('Modelo del dispositivo: '+ device.model+
          'Cordova dispositivo : '  + device.cordova+ 
          'Plataforma del dispositivo: '+ device.platform +
          'UUID del dispositivo: '      + device.uuid     + 
          'Versión del dispositivo'     + device.version );
}
