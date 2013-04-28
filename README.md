jQuery TypeIntent
==================

A jQuery plugin that will fire the a custom event on an input box when the user stops typing or optionally when the user completes a word.

##Usage

    $('#my-input-box').typeintent();

    $('#my-input-box').typeintent({
		wait: 1400, // Time to wait in milliseconds before deciding that the user is done (default: 1200)
		words: true // Will fire event every time the space bar is hit after a word is entered (default: false)
    });
    
    $('#my-input-box;).on('typeintent',function(e){
    	//do stuff
    });
