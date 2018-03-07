

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