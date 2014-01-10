//Array de filtrado para mostrar solo los datos deseados 
$(document).ready(function(){
    $('.buttons').bind('click', function(){
    	alert('Usted hace click en: ' + $(this).text() + ' boton');
    });

    $('.bold').trigger('click');
});