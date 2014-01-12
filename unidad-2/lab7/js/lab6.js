// preloading and caching preloading
$(document).ready(function(){
	$.mobile.loadPage("page3.html",{ // el evento loadpage permite cachear en este caso el argumento que le estamos pasando que es page3.html
		type: false,
		reloadPage: false
	});
});
