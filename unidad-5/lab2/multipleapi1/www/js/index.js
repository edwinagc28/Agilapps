var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        document.addEventListener("backbutton", backButtonPress, false);
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
    //Backbutton
};

function backButtonPress(){
        myDevice = document.getElementById('info');

        myDevice.innerHTML = 'Cargando Información del dispositivo: ' + '<br/>' + 
        'Nombre del dispositivo:' + device.name + '<br/>'+
        'dispositivo Phonegap: ' + device.cordova + '<br>'+ 
        'plataforma: ' + device.platform + '<br/>'+
        'UIID : ' + device.uuid + '<br/>' +
        'version: ' device.version;
    }

//check connection
function checkConnection(){
    var network = navigator.network.connection.type;
    var statesConnection = {};

    statesConnection[connection.UNKANOW] = 'Conexion Desaconocida';
    statesConnection[connection.ETHERNET] = 'Conexion por ethernet';
    statesConnection[connection.WIFI] = 'Conexion por wifi';
    statesConnection[connection.CELL_2G] = 'Conexion por  2G';
    statesConnection[connection.CELL_3G] = 'Conexion por 3G';
    statesConnection[connection.CELL_4G] = 'Conexion por 4G';
    statesConnection[connection.NONE]  = 'No hay conexion a red';

    alert ('La Conexión que esta usando es: ' + statesConnection[network]);

} 

function alertCallback(button){
    myDevice = document.getElementById('info');

    myDevice.innerHTML = '<h1>API Alert</h1>'
}

function confirmCallback(button){
    alert('El boton presionado es ' + button);

}

//USE the API of Phonegap Alert

function showAlert(){
    navigator.notification.alert(
        'MultipleAPI', 
        alertCallback,
        'Hola MultipleAPI',
        'Aceptar'

        );
}

//Use the API of Phonegap Notification
function onConfirm(){
    navigator.notification.confirm(
    'MultipleAPI'
    confirmCallback,
    'Hola MultipleAPI',
    ['Aceptar','Salir']
    );
}

//
function onBeep(){
    navigator.notification.beep(6);
}

function onVibrate(){
    navigator.notification.vibrate(4000);
}

//En caso de error borrar

