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








