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

function new_contact() {
    var options = new ContactFindOptions();
    options.filter = "Bob";
    var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
}

function onSuccess(contacts) {
    for (var i = 0; i < contacts.length; i++) {
        alert("El nombre es = " + contacts[i].displayName);
    }
}

function onError(contactError) {
    alert('Fallo la busqueda de contactos!');
}

function create_contact() {
    var myContact = navigator.contacts.create({"displayName": "Test User"});
    myContact.note = "El contacto se ha agregado correctamente.";
    console.log("Contacto, " + myContact.displayName + ", Nota: " + myContact.note);
}

