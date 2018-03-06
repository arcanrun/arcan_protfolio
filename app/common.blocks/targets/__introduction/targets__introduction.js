  $('.targets').waypoint(function() {
  		console.log('waypoint:targets');

      $('.targets__introduction').addClass('animated fadeInUp');
     

  }, 
    {
   offset: '0%', 
   context: document.getElementsByClassName('parllax') 
	}
);

