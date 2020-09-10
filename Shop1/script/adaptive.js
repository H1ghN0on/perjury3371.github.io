

function categoriesListResize() {
	if (window.matchMedia('(max-width: 800px)').matches){
		$('.menu .menu__categories .menu__icon').html(
'<i class="fa fa-list-ul fa-2x" aria-hidden="true"></i>');
	} else {
		$('.menu .menu__categories .menu__icon').html(
'<i class="fa fa-list-ul" aria-hidden="true"></i>');
	}
}



$(window).resize(categoriesListResize);
