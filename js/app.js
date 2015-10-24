$(document).ready(function() {

	var n = 0;

	function processInput() {
		event.preventDefault(); // prevents form from refreshing page
		var process_string = $("#fizzCount").val();  // raw form value
		console.log(process_string); // display raw form value
		var n = parseInt(process_string); // convert string to integer
		console.log("parsed num " + n); // display parsed value in console
		$("#userChoice").append("user number is " + n); // display parsed value on page
		$("#fizzCount").val('');
	}
	
	$("#getCountNumber").on('submit', processInput);

	function fizzbuzztime() {

		// fizz buzz starts here

		for ( var i = 1; i <= n; i++ ) {
		
			if (i % 3 === 0 && i % 5 === 0 ) {
				$("#theValues").append("<p>fizzbuzz</p>");
			} else if (i % 3 === 0) {
				$("#theValues").append("<p>fizz</p>");
			} else if (i % 5 === 0) {
				$("#theValues").append("<p>buzz</p>");
			} else {
				$("#theValues").append("<p>"+i+"</p>");
			}
		}
	}
});