$(document).ready(function(){
  $('.form-control').on('submit', function(event){
  	event.preventDefault();
  });
  var requiredFields = $('input[required]');

  $(requiredFields).each(function(){
  	for(var i = 0; i < requiredFields.length; i++){
  		console.log();
  	}
  });
});
