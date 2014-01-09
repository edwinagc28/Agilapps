/*Creacion de nodos en la marcha*/
/*prepent lo que hace es crear un nodo antes de un nodo ya existente y se agrega al dom */
$(document).ready(function(){
	$('p').prepend('<h2>Power of selector</h2>');
	$('<h2>Power of selector</h2>').prependTo('p');
	$('h2').clone().prependTo('p');
});