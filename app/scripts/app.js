import $ from "jquery";

$(() => {
	console.log("Ready");

	$(".cookie__button").on("click", () => {
		$(".cookie").removeClass("is-active");
	});
});
