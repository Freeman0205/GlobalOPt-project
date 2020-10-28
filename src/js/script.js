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


    //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow');
    });

    $('input[name=phone]').mask("+7 (999) 999-9999");
    
    function validateForms(form) {
      $(form).validate({
        rules: {
          name: 'required',
          phone: 'required',
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: 'Пожалуйста введите Ваше имя',
          phone: 'Пожалуйста введите свой телефон',
          email: {
            required: 'Нам нужен Ваш email для связи',
            email: 'Некорректный адрес электронной почты'
          }
        }
      });
    }

    validateForms('.feed-form');
    validateForms('#consultation-form');
    validateForms('#consultation form');

  });