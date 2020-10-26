$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_nav.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_nav.png"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true
            }
        }
      ]
    });
    $('input[name=phone]').mask("+7 (999) 999-9999");
  });