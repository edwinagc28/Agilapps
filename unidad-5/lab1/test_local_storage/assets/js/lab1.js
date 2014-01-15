$(document).ready(function(){
	$('#buttonMyName').bind('click', function(){
		var myName = $('#myName').val();
		var myLastName = $('#myLastName').val();
		var myDirection = $('#myDirection').val();
		var myPhone = $('#myPhone').val();


		window.localStorage.setItem("name", myName);
		$('#buttonMyName').append('<h2>'+ myName + '</h2>');

		
		window.localStorage.setItem("lastname", myLastName);
		$('#buttonMyName').append('<h2>'+ myLastName + '</h2>');

		window.localStorage.setItem("direction", myDirection);
		$('#buttonMyName').append('<h2>'+ myDirection + '</h2>');

		window.localStorage.setItem("phone", myPhone);
		$('#buttonMyName').append('<h2>'+ myPhone + '</h2>');
	});

});