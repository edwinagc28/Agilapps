//Ordenación de un conjunto de objetos en javascript
$(document).ready(function(){
	var users = [
		{
			'role':103,
			'name': "Giovanny R",
			'email': 'Giovanny@agilapps.co'
		},

		{
			'role':115,
			'name': "Edwin G",
			'email': 'Edwin@agilapps.co'
		},
		{
			'role':120,
			'name': "Daniel R",
			'email': 'Daniel@agilapps.co'
		},
		{
			'role': 190,
			'name': "Manuel P",
			'email': 'Manuel@agilapps.co'
		},
		{
			'role':105,
			'name': "Alejandro R",
			'email': 'Alejandro@agilapps.co'
		},
	];

	users = users.sort(function(a, b){
		return b.bole -a.role;
	});

	$.each(users , function(index, value){ //
		$('table#listOfValues').append('<tr><td>'+ value.role + '</td><td>' + value.name + '</td><td>' + value.email +'</td></tr>');
	});
});