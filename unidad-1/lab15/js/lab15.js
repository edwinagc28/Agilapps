//Working Events in javascript and jquery
$(document).ready(function(){
	$('.bold').bind('click', function(){ // Registra un evento y carga los controladores
		alert('Click  en boton bold');
	});
	$('.italic').bind('click', function(){
		alert('Click  en boton italic');
	});
});