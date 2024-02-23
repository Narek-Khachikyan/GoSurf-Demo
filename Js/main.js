$(document).ready(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slider-arrows"><img src="./IMG/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slider-arrows"><img src="./IMG/arrows-right.svg" alt=""></button>',
    asNavFor: '.slider-dotshead',
    autoplay: true,

  });
  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    responsive: [
      {
        breakpoint: 961,
        settings: {
          settings: "unslick",
        }
      },
    ],

  });
  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slider-arrows"><img src="./IMG/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slider-arrows"><img src="./IMG/arrows-right.svg" alt=""></button>',
    asNavFor: '.slider-map',
    autoplay: true,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
    ]
  });
  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrow: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true
  });
  $('.holder__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slider-arrows"><img src="./IMG/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slider-arrows"><img src="./IMG/arrows-right.svg" alt=""></button>',

  });

  $('.shop__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slider-arrows"><img src="./IMG/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slider-arrows"><img src="./IMG/arrows-right.svg" alt=""></button>',
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="IMG/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="IMG/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
  $('.quantity-button').on('click', function () {
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests ').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ)
  });
  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests ').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$' + summ)

  $('.surfboard-box__circle').on('click', function () {
    $(this).toggleClass('active')
  })
  new WOW().init();
});

const burger = document.querySelector('.menu-btn');
const navMenu = document.querySelector(".menu");
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.add('lock');
})

const burgerMenuLinks = navMenu.getElementsByTagName("a");
for (let i = 0; i < burgerMenuLinks.length; i++) {
  burgerMenuLinks[i].addEventListener("click", function () {
    navMenu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('lock');
  });
}


