//Array de Filtrado para mostrar solo los datos deseados
$(document).ready(function(){
	var members = ["Giovanny" ,"Edwin", "Daniel Alejandro","Alejandro", "Manuel"];

	$('p.allmen').html(members.join("<br/>"));
	members = $.grep(members, function(v){ //Buscar Elementos en un array 
		return v.length >5;

	});
	$('p.selected').html(members.join("<br/>"));
});