$(document).ready(function(){
	$('.test-input').typeintent();
	$('.test-input').change(function(){
		console.log($(this).val());
	})
});