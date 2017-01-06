window.$ = window.jQuery =  require('jquery');
window.slick =              require('../../bower_components/slick-carousel/slick/slick');
window.GMaps =              require('../../bower_components/gmaps/gmaps');


jQuery(document).ready(function($){  

  /* Hamburger */
  $('.hamburger').click(function(e) { 
      e.preventDefault();    
      $('.nav__wrapper').slideToggle();
  });
  $(window).resize(function(){
    if ($(window).width() > 768) {
      $('.nav__wrapper').show();
    } else {
      $('.nav__wrapper').hide();
    }
  });

  /* banner gallery */
  $('.banner__gallery').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });

  /* reviews gallery */
  $('.reviews__gallery').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });


    /* Map */
    var map = new GMaps({
        el: '.contacts__map',
        lat: 59.478373,
        lng: 30.010118,
        scrollwheel: false
    });
    map.addMarker({
        lat: 59.478373,
        lng: 30.010118,
        icon: "/img/pin-red.png"
    });

});


