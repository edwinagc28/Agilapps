// Visualizacion de un mensaje en jquery
 $(document).ready(function(){
  $(':submit').click(function(e){
  	$(':text').each(function(){
  		if($(this).val().length === 0){
  			$(this).css('border', '2px solid red');
  		} else {
  			$(this).css({
  				'border' : '2px solid blue',
  				'color' : 'blue'
  			});
  		}
  	});
  	e.preventDefault();
  });
});