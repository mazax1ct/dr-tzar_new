//слайдер дизайнов
const designSlider = new Swiper('.js-design-slider', {
    loop: true,
    navigation: {
        nextEl: '.js-design-slider .swiper-button-next',
        prevEl: '.js-design-slider .swiper-button-prev',
    },
    slidesPerView: 1,
    observer: true,
    observeParents: true
});

//тултипы
$(document).on('click', '.info', function () {
  if($(this).hasClass('is-open')) {
    $(this).removeClass('is-open');
  } else {
    $(this).addClass('is-open');
  }
  return false;
});

//открытие попапа
$(document).on('click', '.js-popup-opener', function () {
  var popup = $(this).attr('data-popup');
  $('.popup').hide();
  $('.' + popup).show();
  $('.popup-shade').fadeIn();

  if(popup === 'js-popup-test') {
    //обновление свайпера
    testsSlider.update();
    testsSlider2.update();
  }
  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-closer', function () {
  $('.popup-shade').fadeOut();
  $('.popup').hide();
  return false;
});

$(document).ready(function () {
  //кастомный селект
  $('.js-select').each(function() {
   var $p = $(this).closest('.select-wrapper');
   $(this).select2({
		 minimumResultsForSearch: Infinity,
     dropdownPosition: 'below',
     dropdownParent: $p
   });
	}).on("select2:open", function (e) {
		var $p = $(this).closest('.select-wrapper');
		$p.addClass('open');
	}).on("select2:close", function (e) {
		var $p = $(this).closest('.select-wrapper');
		$p.removeClass('open');
	});
});

const testsSlider = new Swiper('.js-tests-slider', {
    loop: true,
    navigation: {
        nextEl: '#tests_1_next',
        prevEl: '#tests_1_prev',
    },
    slidesPerView: 5,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 7,
        spaceBetween: 9
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 4
      },
      1900: {
        slidesPerView: 10,
        spaceBetween: 12
      }
    }
});

const testsSlider2 = new Swiper('.js-tests-slider-3', {
    loop: false,
    navigation: {
      nextEl: '#tests_3_next',
      prevEl: '#tests_3_prev',
    },
    slidesPerView: 5,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 7,
        spaceBetween: 9
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 4
      },
      1900: {
        slidesPerView: 10,
        spaceBetween: 12
      }
    }
});

const testsSlider3 = new Swiper('.js-tests-slider-5', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
      1200: {
        spaceBetween: 12
      }
    }
});

//откртие фильтра
$(document).on('click', '.js-tests-filter-opener', function () {
  $('.tests-filter').addClass('is-open');
  return false;
});

//закрытие фильтра
$(document).on('click', '.js-tests-filter-closer', function () {
  $('.tests-filter').removeClass('is-open');
  return false;
});

//автосаггест
$(document).on('focus', '.tests-search__input', function () {
  $(this).closest('.tests-search').find('.tests-search__dropdown').show();
  testsSlider3.update();
});

//диалог
$(document).on('click', '.js-open-inner', function () {
  var inner = $(this).attr('data-inner');
  $(this).closest('.popup').find('.popup__inner').hide();
  $('.popup__inner[data-inner='+inner+']').show();
  return false;
});
