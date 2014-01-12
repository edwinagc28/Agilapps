//Lab3 count the number of nodes in the DOM and display your text
$(document).ready(function(){
	var $nodes = $('.level-3').children();
	console.log($nodes);
	alert('El numero de nodos es: '+ $nodes.length);
	var  rxt = "";
	$('.level-3').children().each(function(){
		rxt += $(this).text();
	});
	alert(rxt);
});