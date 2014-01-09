//crear un array de objetos en javascript
$(document).ready(function(){
	var users = [
		{
			'role':120,
			'name': "Giovanny R",
			'email': 'Giovanny@agilapps.co'
		},

		{
			'role':180,
			'name': "Edwin G",
			'email': 'Edwin@agilapps.co'
		},
		{
			'role':130,
			'name': "Daniel R",
			'email': 'Daniel@agilapps.co'
		},
		{
			'role':145,
			'name': "Manuel P",
			'email': 'Manuel@agilapps.co'
		},
		{
			'role':105,
			'name': "Alejandro R",
			'email': 'Alejandro@agilapps.co'
		},
	];

	$.each(users, function(index, value){ //
		$('table#listOfValues').append('<tr><td>'+ value.role + '</td><td>' + value.name + '</td><td>' + value.email +'</td></tr>');
	});
});