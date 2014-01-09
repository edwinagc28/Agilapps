// La combianción de Dos Arrays
$(document).ready(function(){
	var membersOne = [34, 55, 56, 76, 89];
	var membersTwo = [12234, 12233, 445, 454, 322, 122];

	$('.firstArray').html(membersOne.join('<br/>'));
	$('.secondArray').html(membersTwo.join('<br/>'));

	members = membersOne.concat(membersTwo);

	$('.combineArray').html(members.join('<br/>'));
});