/*
	Creating nodes on the fly
	prepent it does is create a node before an existing node and added to the DOM
*/

$(document).ready(function(){
	$('p').prepend('<h2>Power of selector</h2>');
	$('<h2>Power of selector</h2>').prependTo('p');
	$('h2').clone().prependTo('p');
});