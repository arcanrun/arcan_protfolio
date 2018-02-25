$('.header__bars').on('click', function(){
	var menu = $('.header__menu');
	menu.addClass('header__menu_mobile_true');
	menu.removeClass('header__menu_visible_none');
	$('.header__menu > .menu__item').addClass('menu__item_mobile_true');
	$('.header__menu > .menu__item > .menu__link').addClass('menu__link_mobile_true');
});