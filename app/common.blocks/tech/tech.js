
 
  $('.tech__introduction').waypoint(function() {
  		console.log('waypoint');
      $('.tech__introduction').addClass('animated fadeInUpBig');
  }, 
    {
   offset: '130%', 
   context: document.getElementsByClassName('parllax') 
	}
);