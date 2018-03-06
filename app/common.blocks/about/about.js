$('.about').waypoint(function() {
  		console.log('waypoint:about');


      $('.about__introduction').addClass('animated fadeInUp');

     $('.about__img').css('animation-delay', '.3s').addClass('animated fadeInUp');
     $('.about__title').css('animation-delay', '.5s').addClass('animated fadeInUp');


      $('.about__container .about__info:nth-child(1)').css('animation-delay', '.5s').addClass('animated fadeInUp');
      $('.about__container .about__info:nth-child(2)').css('animation-delay', '.7s').addClass('animated fadeInUp');
      $('.about__container .about__info:nth-child(3)').css('animation-delay', '.9s').addClass('animated fadeInUp');
      $('.about__container .about__info:nth-child(4)').css('animation-delay', '1.1s').addClass('animated fadeInUp');
      $('.about__container .about__info:nth-child(5)').css('animation-delay', '1.3s').addClass('animated fadeInUp');
       $('.about__container .about__info:nth-child(6)').css('animation-delay', '1.5s').addClass('animated fadeInUp');
       $('.about__container .about__info:nth-child(7)').css('animation-delay', '1.7s').addClass('animated fadeInUp');
      $('.about__contacts').css('animation-delay', '1.9s').addClass('animated fadeInUp');

  }, 
    {
   offset: '10%', 
   context: document.getElementsByClassName('parllax') 
	}
);

