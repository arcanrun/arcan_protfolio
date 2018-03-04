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
$('.hamburger').on('click', function(){
	$('.hamburger > .hamburger__bar').toggleClass('hamburger__bar_active_true');
	$('.menu-mobile').toggleClass('menu-mobile_visible_true');
});
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
var width = win.width();
var height = win.height();
function menuToMobileAndBack(){
	var win = $(window);
	var width = win.width();
 	var burger = $('.hamburger');
 	var burgerBar = $('.hamburger > .hamburger__bar');
	var menu = $('.header__menu');
	var mobileMnu = $('.menu-mobile');

  
	if( width < 992 ) {
		burger.addClass('hamburger_visible_true');
		menu.addClass('header__menu_visible_none');
		

	}
	else {
		burgerBar.removeClass('hamburger__bar_active_true');
		mobileMnu.removeClass('menu-mobile_visible_true');
		burger.removeClass('hamburger_visible_true');
		menu.removeClass('header__menu_visible_none');
		menu.removeClass('header__menu_mobile_true');
		
		$('.header__menu > .menu__item').removeClass('menu__item_mobile_true');
		$('.header__menu > .menu__item > .menu__link').removeClass('menu__link_mobile_true');

	}
}

menuToMobileAndBack();	


win.resize(function(){
	
	console.log('new' + $(this).width() + "   old" + width)
	if($(this).width() != width){
		width = $(this).width();
		menuToMobileAndBack();
	}
	
	
	
})



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