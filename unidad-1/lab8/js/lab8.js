
$(document).ready(function(){
	
	var members = ["Daniel", "Edwin", "Giovanny", "Alejandro", "Manuel"];
	members = $.map(members, function(n,i){
		return(i + 1 + "." + n);
	});
	$('p').html(members.join("<br/>"))
});