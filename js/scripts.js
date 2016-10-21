$(document).ready(function() {

	$("nav").find("li").click(function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});

	$(".mobile-top-header-nav").find(".search-btn").click(function() {
		$(this).toggleClass("active");
		$(".mobile-search").toggle();
	});
});