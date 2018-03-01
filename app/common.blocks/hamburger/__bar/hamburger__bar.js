$('.hamburger').on('click', function(){
	$('.hamburger > .hamburger__bar').toggleClass('hamburger__bar_active_true');
	$('.menu-mobile').toggleClass('menu-mobile_visible_true');
});