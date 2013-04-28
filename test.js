$(document).ready(function(){
	$('.test-input').typeintent();
	$('.test-input').on('typeintent',function(e){
		console.log($(this).val());
	})
});
