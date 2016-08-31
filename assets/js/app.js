$(function() {
    $("header").load("partials/header.html");
    $("footer").load("partials/footer.html");
    $("#menu").load("partials/menu.html", attachHandlers);
    $("#main-content").load("partials/home.html");    

	function attachHandlers () {

		$('#home').click(function () {
			$("a.menu-link").removeClass("active");
			$("#home a").addClass("active");
			$("#header-content").text("Home page");
			$("#main-content").load("partials/home.html");
		});

		$('#my-projects').click(function () {
			$("a.menu-link").removeClass("active");
			$("#my-projects a").addClass("active");
			$("#header-content").text("My Projects");
			$("#main-content").load("partials/my-projects.html");
		});

		$('#resources').click(function () {
			$("a.menu-link").removeClass("active");
			$("#resources a").addClass("active");
			$("#header-content").text("Resources");
			$("#main-content").load("partials/resources.html");
		});

		$('#login').click(function () {
			$("a.menu-link").removeClass("active");
			$("#login a").addClass("active");
			$("#header-content").text("Login");
			$("#main-content").load("partials/login.html");
		});

		$('#register').click(function () {
			$("a.menu-link").removeClass("active");
			$("#register a").addClass("active");
			$("#header-content").text("Register");
			$("#main-content").load("partials/register.html");
		});

		$('#about-me').click(function () {
			$("a.menu-link").removeClass("active");
			$("#about-me a").addClass("active");
			$("#header-content").text("About me");
			$("#main-content").load("partials/about.html");
		});

		$('#contact').click(function () {
			$("a.menu-link").removeClass("active");
			$("#contact a").addClass("active");
			$("#header-content").text("Contact me");
			$("#main-content").load("partials/contact.html", createContactForm);
		});
	}
});