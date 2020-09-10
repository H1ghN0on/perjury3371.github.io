// MenuCategoriesSlide

$(document).ready(() => {

$('.burger__nav.first ul').hide();
$('.burger__nav.second ul').hide();
$('.categories').hide();



let flagNav1 = false;
let flagNav2 = false;
let flagCategories = false;

$('.menu .btn').on('click', slideCategories);
$('.header__nav .burger').on('click', slideNav1);
$('.header__right .row.justify-content-center .burger').on('click', slideNav2);

function slideNav1() {
	if (flagNav1 == false) {
		$('.burger__nav.first ul').fadeIn();
		flagNav1 = true;
	} else {
		$('.burger__nav.first ul').fadeOut();
		flagNav1 = false;
	}
}

function slideNav2() {
	if (flagNav2 == false) {
		$('.burger__nav.second ul').fadeIn();
		flagNav2 = true;
	} else {
		$('.burger__nav.second ul').fadeOut();
		flagNav2 = false;
	}
}


function slideCategories() {
	if (flagCategories == false) {
		$('.categories').slideDown(450);
		flagCategories = true;
		$('aside').css({'top':'550px'});
	} else {
		$('.categories').slideUp(550);
		flagCategories = false;
		$('aside').css({'top':'0px'});
	}
}

});


