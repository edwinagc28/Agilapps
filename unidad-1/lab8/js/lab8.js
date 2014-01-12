//Viewing names in arrays arguments for presentation to recommend'' sencila and double quotes "" to texts 
//arguments for presentation to recommend'' sencila and double quotes "" to texts
$(document).ready(function(){
	
	var members = ["Daniel", "Edwin", "Giovanny", "Alejandro", "Manuel"];
	members = $.map(members, function(n,i){
		return(i + 1 + "." + n);
	});
	$('p').html(members.join("<br/>"))
});