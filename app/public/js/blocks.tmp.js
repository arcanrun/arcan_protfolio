$(document).ready(function(){$('.skill__inner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.header__bars').on('click', function(){
	var menu = $('.header__menu');
	menu.addClass('header__menu_mobile_true');
	menu.removeClass('header__menu_visible_none');
	$('.header__menu > .menu__item').addClass('menu__item_mobile_true');
	$('.header__menu > .menu__item > .menu__link').addClass('menu__link_mobile_true');
});
// on resize
	//function : if width add modidicator
var win = $(window);

function menuToMobileAndBack(){
	var width = win.width()
	var menu = $('.header__menu');
	var cross = $('.menu__cross-mobile');

	menu.removeClass('header__menu_mobile_true');

	if( width < 992 ) {
		menu.addClass('header__menu_visible_none');
		cross.addClass('menu__cross-mobile_visible_true');

	}
	else {
		menu.removeClass('header__menu_visible_none');
		menu.removeClass('header__menu_visible_none');
		cross.removeClass('menu__cross-mobile_visible_true');
		$('.header__menu > .menu__item').removeClass('menu__item_mobile_true');
		$('.header__menu > .menu__item > .menu__link').removeClass('menu__link_mobile_true');

	}
}

menuToMobileAndBack();	


win.resize(function(){
	menuToMobileAndBack();
})


$('.menu__cross-mobile').on('click', function(){
	var menu = $('.header__menu');
	menu.addClass('header__menu_visible_none');
	menu.removeClass('header__menu_mobile_true');
});
$('.skills__inner').owlCarousel({
    loop:true,
    margin:10,
    center: true,
    autoWidth:true,
    nav:false,
    responsive:{
        768:{
            items:1
        },
        992:{
            items:3
        },
        1000:{
            items:5
        }
    }
})});