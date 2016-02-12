$(document).ready(function(){
  $('.order-form').on('submit', function(){
  	event.preventDefault();
  	$('input[required]').parent().removeClass('has-error')
  	$('.error-message').hide();
  
  	var isValid = true;
	$('input[required]').each(function(){
	  	if($(this).val().length === 0){
	  		$(this).parent().addClass('has-error');
	  		isValid = false;
		} 
 	});

  	if(isValid){
  		alert("Congrats");
  	} else {
  		$('.error-message').show();
  	}
 
 });
});

