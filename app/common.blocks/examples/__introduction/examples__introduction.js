 
  $('.examples').waypoint(function() {
  		console.log('waypoint:examples__introduction');
      $('.examples__introduction').addClass('animated fadeInUpBig ');
  }, 
    {
   offset: '0%', 
   context: document.getElementsByClassName('parllax') 
	}
);