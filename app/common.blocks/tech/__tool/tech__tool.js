 $('.tech__tool').waypoint(function() {
  		

      $('.tech__tool_2').css('animation-delay', '.2s');
	  $('.tech__tool_3').css('animation-delay', '.3s');
	  $('.tech__tool_4').css('animation-delay', '.4s');

	  $('.tech__tool_1').addClass('animated fadeInUpBig');
      $('.tech__tool_2').addClass('animated fadeInUpBig');
      $('.tech__tool_3').addClass('animated fadeInUpBig');
      $('.tech__tool_4').addClass('animated fadeInUpBig');

  }, { offset: '140%', context: document.getElementsByClassName('parllax') });

 