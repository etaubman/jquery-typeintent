$(document).ready(function(){
	$('.test-input').typeintent();
	$('.test-input').on('typeintent',function(e){
		var val = $(this).val();
		console.log( val.match(/\w+/g) );
	})
});