$('.header').waypoint(function() {
  		console.log('waypoint:targets__inner:first-child');

  	$('.header__text').addClass('animated bounceIn');
  	 $('.header__img_1').addClass('animated bounceInLeft')

  }, 
    {
   
   context: document.getElementsByClassName('parllax') 
	}
);
