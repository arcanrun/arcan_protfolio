 $('.examples__card-site-block').waypoint(function() {
  	  console.log('waypoint examples__card-site-block')

      $('.examples__card-site-block .examples__card-site:nth-child(2)').css('animation-delay', '.2s');
	  $('.examples__card-site-block .examples__card-site:nth-child(3)').css('animation-delay', '.3s');
	  $('.examples__card-site-block .examples__card-site:nth-child(4)').css('animation-delay', '.4s');

	  $('.examples__card-site').addClass('animated fadeInUp');
      

  }, { offset: '1850px', context: document.getElementsByClassName('parllax') });

 