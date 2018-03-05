 
  $('.examples__introduction').waypoint(function() {
  		console.log('waypoint:examples__introduction');
      $('.examples__introduction').addClass('animated fadeInUpBig');
  }, 
    {
   offset: '250%', 
   context: document.getElementsByClassName('parllax') 
	}
);