//Dividir un array
$(document).ready(function(){
	var members = [34, 35, 22, 12234, 344, 56];

	$('.allArray').html(members.join('<br/>'));
	memberssecond = members.splice(0,3);

	$('.firstArray').html(memberssecond.join('<br/>'));
	$('.secondArray').html(members.join('<br/>'));
});