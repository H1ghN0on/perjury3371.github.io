$(document).ready(function() {
  $('.slide-one').owlCarousel({
  	items:1,
  	loop:true,
  	autoplay:true,
  	autoplayTimeout:5000,
  	autoplaySpeed:1000,
  	nav:true,
  	navText:['<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>'],
  });
});

$(document).ready(function() {
  $('.slide-two').owlCarousel({
  	items:1,
  	loop:true,
  	autoplay:true,
  	autoplayTimeout:5000,
  	autoplaySpeed:1000,
  	nav:true,
  	navText:['<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>'],
  });
});

$(document).ready(function() {
  $('.slider-three').owlCarousel({
  	items:4,
  	autoplay:true,
  	autoplayTimeout:5000,
  	autoplaySpeed:1000,
  	nav:true,
  	loop:true,
  	navText:['<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>'],
  });
});

$(document).ready(function() {
  $('.slider-four').owlCarousel({
  	items:4,
  	autoplay:true,
  	autoplayTimeout:5000,
  	autoplaySpeed:1000,
  	nav:true,
  	loop:true,
  	navText:['<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>'],
  });
});

$(document).ready(function() {
  $('.slider-five').owlCarousel({
  	items:3,
  	autoplay:true,
  	autoplayTimeout:5000,
  	autoplaySpeed:1000,
  	nav:true,
  	loop:true,
  	row:2,
  	margin:10,
  	navText:['<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>'],
  });
});
