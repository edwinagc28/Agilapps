$(document).bind("mobileinit", function(){// bind tiene mas caracteristicas que un evento click y permite mas eventos
// mobileinit configura unos parametros estandar
	$.mobile.page.prototype.options.domCache = true; // El dom cache queda predefinido  como verdadero 
	$.mobile.defaultPageTransition = 'fade'; // Existen seis tipos de transiciones 
});