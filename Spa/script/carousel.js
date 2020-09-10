// Carousel Feature

//Features

$(document).ready (function() {
	$('.slide-one').owlCarousel({
		items:4,

	});
})

//Testimonials

$(document).ready (function() {
	$('.slide-two').owlCarousel({
		items:1,
		margin:0,
		rewind:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		autoplaySpeed:2000,
		dots:true,
		dotsEach:true,
		dragSpeed:1000,

	});
})





