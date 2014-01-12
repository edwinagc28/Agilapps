//I find out which button is clicked in javascript 
$(document).ready(function(){
    $('.buttons').bind('click', function(){
    	alert('Usted hace click en: ' + $(this).text() + ' boton');
    });

    $('.bold').trigger('click');
});