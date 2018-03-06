

// $('.menu__link, .menu-mobile__link').on('click', function(e){
// 	e.preventDefault();

// 		if( $(this).attr('class') == 'menu-mobile__link' ){
// 			$('.menu-mobile').toggleClass('menu-mobile_visible_true');
// 			$('.hamburger > .hamburger__bar').toggleClass('hamburger__bar_active_true');
// 		}
		
	
// 	var scrollTo = $(this).attr('href');

// 	console.log(scrollTo);

// 	$('.parllax').animate({
// 		scrollTop: $(scrollTo).offset().top
// 	}, 1200, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(scrollTo);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           }
//       }
//           );

// });


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