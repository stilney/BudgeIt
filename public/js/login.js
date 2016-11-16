
$(document).ready(function() {
	console.log("Page is ready!");
});

var form = $('#loginForm');

form.submit(function(event) {
	event.preventDefault();
	var username = $('#inputEmail').val();
	var password = $('#inputPassword').val();
	$.post('/login', {
		username: username,
		password: password
	}).done(function() {
		window.location.href = "/overview";
	})
	.fail(function() {
		console.log("Incorrect account info");
	});




});



// var form = $('form');


