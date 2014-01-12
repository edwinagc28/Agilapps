//Convert a numeric array into a string and substring search
$(document).ready(function(){
	var members = [14, 15, 56 , 8888, 544, 31231243, 321312313];

	$('.originalArray').html(members.join('<br/>'));

	var strs = members.join(" ,");
	
	$('.stringArray').text(strs);

	var subStr = strs.substr(0, 3);

	console.log(typeof(subStr));

	$('.partArray').text(subStr);

});