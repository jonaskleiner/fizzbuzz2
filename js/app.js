$(document).ready(function() {
	// button submit (id formVal) pushes an input string 
	// grab input string from form id "fizzCount"
	// check if input string is a number
	// convert input string to an integer
	// assign the integer to a variable called "the_count"
	// print the value of "the_count" in console.log

	function processInput() {
		event.preventDefault(); // prevents form from refreshing page
		var process_string = $("#fizzCount").val();
		console.log(process_string);

	}
	
	$("#getCountNumber").on('submit', processInput);

		// fizz buzz starts here

	// for ( var i = 1; i <= 2; i++ ) {
		
	// 	if (i % 3 === 0 && i % 5 === 0 ) {
	// 		$("#theValues").append("<p>fizzbuzz</p>");
	// 	} else if (i % 3 === 0) {
	// 		$("#theValues").append("<p>fizz</p>");
	// 	} else if (i % 5 === 0) {
	// 		$("#theValues").append("<p>buzz</p>");
	// 	} else {
	// 		$("#theValues").append("<p>"+i+"</p>");
	// 	}
	// }
});