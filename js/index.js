$("#about-us-pictures div").mouseenter(function() {
	$(this).find("h4, img").css("display", "block");
});

$("#about-us-pictures div").mouseleave(function() {
	$(this).find("h4, img").css("display", "none");
})

$(".our-team-pictures div").mouseenter(function() {
	$(this).find("nav").css("display", "block");
})

$(".our-team-pictures div").mouseleave(function() {
	$(this).find("nav").css("display", "none");
})

$(".work-pictures div div").mouseenter(function() {
	$(this).find("img, h5, p").css("display", "block");
})

$(".work-pictures div").mouseleave(function() {
	$(this).find("img, h5, p").css("display", "none");
})

$(".jelly-fish").mouseenter(function() {
	$(this).find("img, h5, p").css("display", "block");
})

$(".jelly-fish").mouseleave(function() {
	$(this).find("img, h5, p").css("display", "none");
})