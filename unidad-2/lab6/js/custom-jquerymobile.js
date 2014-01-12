$(document).bind("mobileinit", function(){// bind tiene mas caracteristicas que un evento click y permite mas eventos
// mobileinit configura unos parametros estandar 
	$.mobile.defaultPageTransition = 'fade'; // Existen seis tipos de transiciones 
	$.mobile.loadingMessage = 'Please wait!';
	//$.moblieloadingMessage = false;
	$.mobile.pageLoadErrorMessage = 'There was an error, please try again';
});