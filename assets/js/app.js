$(function() {
    $("header").load("partials/header.html");
    $("#menu").load("partials/menu.html", attachHandlers);
    $("#main-content").load("partials/home.html");    

	function attachHandlers () {

		$('#home').click(function () {			
			$("#header-content").text("Home page");
			$("#main-content").load("partials/home.html");			
		});

		$('#my-projects').click(function () {			
			$("#header-content").text("My Projects");
			$("#main-content").load("partials/my-projects.html");			
		});

		$('#resources').click(function () {			
			$("#header-content").text("Resources");
			$("#main-content").load("partials/resources.html");
		});

		$('#about-me').click(function () {			
			$("#header-content").text("About me");			
			$("#main-content").load("partials/about.html");
		});

		$('#contact').click(function () {			
			$("#header-content").text("Contact me");			
			$("#main-content").load("partials/contact.html", createContactForm);
		});
	}
});