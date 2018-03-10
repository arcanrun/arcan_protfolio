$(document).ready(function(){$('.about').waypoint(function() {
  		console.log('waypoint:about');


      $('.about__introduction').addClass('animated fadeInUp');

     $('.about__img').css('animation-delay', '.3s').addClass('animated fadeInUp');
     $('.about__title').css('animation-delay', '.5s').addClass('animated fadeInUp');


      $('.about__container .about__info:nth-child(1)').css('animation-delay', '.5s').addClass('animated fadeInUp');
      $('.about__container .about__info:nth-child(2)').css('animation-delay', '.7s').addClass('animated fadeInUp');
      $('.about__container .about__info:nth-child(3)').css('animation-delay', '.9s').addClass('animated fadeInUp');
      $('.about__container .about__info:nth-child(4)').css('animation-delay', '1.1s').addClass('animated fadeInUp');
      $('.about__container .about__info:nth-child(5)').css('animation-delay', '1.3s').addClass('animated fadeInUp');
       $('.about__container .about__info:nth-child(6)').css('animation-delay', '1.5s').addClass('animated fadeInUp');
       $('.about__container .about__info:nth-child(7)').css('animation-delay', '1.7s').addClass('animated fadeInUp');
      $('.about__contacts').css('animation-delay', '1.9s').addClass('animated fadeInUp');

  }, 
    {
   offset: '10%', 
   context: document.getElementsByClassName('parllax') 
	}
);



function onTuch(){
    if( device.mobile() || device.tablet() || device.ios() || device.ipad() || device.iphone() ||   device.ipod() || device.android()) {
        $('#scroller').kinetic({
	        x: false,
	        cursor: false,
	        filterTarget: function(target, e){
	        
	           if (!/down|start/.test(e.type))
	           {
	            return !(/area|a|input/i.test(target.tagName));
	        }
	        
    }
    });
    } 
}

onTuch();



// $('.introduction').waypoint(function() {
//   		console.log('waypoint');
//       $('.introduction').addClass('animated fadeInUpBig');
//   }, { offset: '100%', context: document.getElementsByClassName('parllax') });
$('.skill__inner').owlCarousel({
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
});

// $('.skills__inner').on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });

 
  $('.tech__introduction').waypoint(function() {
  		console.log('waypoint');
      $('.tech__introduction').addClass('animated fadeInUp');
  }, 
    {
   offset: '130%', 
   context: document.getElementsByClassName('parllax') 
	}
);
 $('.examples').waypoint(function() {
  	  console.log('waypoint examples__card-site-block')

      $('.examples__card-site-block .examples__card-site:nth-child(2)').css('animation-delay', '.2s');
	  $('.examples__card-site-block .examples__card-site:nth-child(3)').css('animation-delay', '.3s');
	  $('.examples__card-site-block .examples__card-site:nth-child(4)').css('animation-delay', '.4s');

	  $('.examples__card-site').addClass('animated fadeInUp');
      

  }, { offset: '20%', context: document.getElementsByClassName('parllax') });

 
 
  $('.examples').waypoint(function() {
  		console.log('waypoint:examples__introduction');
      $('.examples__introduction').addClass('animated fadeInUpBig ');
  }, 
    {
   offset: '20%', 
   context: document.getElementsByClassName('parllax') 
	}
);
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
setInterval(function(){$('.header__heart').toggleClass('animated pulse')}, 500)
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

// touchScroll('scroller')



menuToMobileAndBack();	




win.resize(function(){
	
	// console.log('new' + $(this).width() + "   old" + width)
	if($(this).width() != width){
		width = $(this).width();
		menuToMobileAndBack();
	}

	
})





  $('.menu__link, .menu-mobile__link, .footer__link').click( function(e) {
  	e.preventDefault();
  	if( $(this).attr('class') == 'menu-mobile__link' ){
			$('.menu-mobile').toggleClass('menu-mobile_visible_true');
			$('.hamburger > .hamburger__bar').toggleClass('hamburger__bar_active_true');
		}


    $('.parllax').scrollTo(
      $(this).attr("href"),
      {
        duration: 2000,
        offset: {  }
      }
    );

  });
$('.modal__back-btn').on('click', function(){
	$('.modal').removeClass('modal_active_true');
});
$('.modal__show_btn').on('click', function(e){
	e.preventDefault();
	$('.modal').addClass('modal_active_true');
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
})
  $('.skills').waypoint(function() {
  		console.log('waypoint:skills__introduction');

      $('.skills__introduction').addClass('animated fadeInUp');
      $('.skills__inner').css('animation-delay', '.3s');
      $('.skills__inner').addClass('animated fadeInLeft');

  }, 
    {
   offset: '30%', 
   context: document.getElementsByClassName('parllax') 
	}
);
$('.targets').waypoint(function() {
  		console.log('waypoint:targets__inner:first-child');

  	$('.targets__inner .targets__info:first-child .targets__right').addClass('animated fadeInLeft');
  	$('.targets__inner .targets__info:first-child .targets__left').addClass('animated fadeInRight');

  	$('.targets__inner .targets__info:nth-child(2) .targets__right').css('animtaion-delay', '.5s').addClass('animated fadeInLeft');
  	$('.targets__inner .targets__info:nth-child(2) .targets__left').css('animtaion-delay', '.5s').addClass('animated fadeInRight');
     

    $('.targets__inner .targets__info:nth-child(3) .targets__right').css('animtaion-delay', '.7s').addClass('animated fadeInLeft');
  	$('.targets__inner .targets__info:nth-child(3) .targets__left').css('animtaion-delay', '.7s').addClass('animated fadeInRight');

  }, 
    {
   
   context: document.getElementsByClassName('parllax') 
	}
);









  $('.targets').waypoint(function() {
  		console.log('waypoint:targets');

      $('.targets__introduction').addClass('animated fadeInUp');
     

  }, 
    {
   offset: '0%', 
   context: document.getElementsByClassName('parllax') 
	}
);


 $('.tech__tool').waypoint(function() {
  		

      $('.tech__tool_2').css('animation-delay', '.2s');
	  $('.tech__tool_3').css('animation-delay', '.3s');
	  $('.tech__tool_4').css('animation-delay', '.4s');

	  $('.tech__tool_1').addClass('animated fadeInUp');
      $('.tech__tool_2').addClass('animated fadeInUp');
      $('.tech__tool_3').addClass('animated fadeInUp');
      $('.tech__tool_4').addClass('animated fadeInUp');

  }, { offset: '140%', context: document.getElementsByClassName('parllax') });

 });