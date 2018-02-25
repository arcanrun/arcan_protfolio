$('.menu__cross-mobile').on('click', function(){
	var menu = $('.header__menu');
	menu.addClass('header__menu_visible_none');
	menu.removeClass('header__menu_mobile_true');
});