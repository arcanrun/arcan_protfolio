$('.menu__link, .menu-mobile__link').on('click', function(e){
	e.preventDefault();

		if( $(this).attr('class') == 'menu-mobile__link' ){
			$('.menu-mobile').toggleClass('menu-mobile_visible_true');
			$('.hamburger > .hamburger__bar').toggleClass('hamburger__bar_active_true');
		}
		
	
	var scrollTo = '#' + $(this).attr('href');
	console.log(scrollTo);
	$('.parllax').animate({
		scrollTop: $(scrollTo).offset().top
	}, 1200);
});

