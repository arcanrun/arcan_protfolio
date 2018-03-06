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