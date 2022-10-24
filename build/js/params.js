//тогглер параметров
$(document).on('click', '.js-params-toggler', function () {
  $('.config__left-block').toggleClass('is-open');
  return false;
});

//закрытие параметров
$(document).on('click', '.js-params-closer', function () {
  $('.config__left-block').removeClass('is-open');
  return false;
});

//тогглер раздела параметров
$(document).on('click', '.js-section-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.params__section').find('.params__section-dropdown').slideToggle(function () {
    $(this).toggleClass('is-active');
  });

  return false;
});

//тогглер списка чекбоксов
$(document).on('click', '.js-list-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass('is-active');
    $(this).find('span').text('Свернуть');
    $(this).closest('.params__section-dropdown').find('.params__section-list-outer').addClass('is-active');
  } else {
    $(this).removeClass('is-active');
    $(this).find('span').text('Показать всё');
    $(this).closest('.params__section-dropdown').find('.params__section-list-outer').removeClass('is-active');
  }

  return false;
});

//тогглер подраздела параметров
$(document).on('click', '.js-subsection-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.params__subsection').find('.params__subsection-dropdown').slideToggle(function () {
    $(this).toggleClass('is-active');
  });

  return false;
});

//кнопка применить
$(document).on('change', '.params input[type="checkbox"]', function () {
  var topOffset = $(this).closest('label').offset().top - $(this).closest('.params').offset().top + $(this).closest('label').height()/2;
  $('.params__apply').css('top', topOffset).addClass('is-active');
});

$(document).on('click', '.params__apply', function () {
  $(this).removeClass('is-active');

  return false;
});
