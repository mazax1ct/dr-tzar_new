
$(document).on('click', '.js-section-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.params__section').find('.params__section-dropdown').slideToggle(function () {
    $(this).toggleClass('is-active');
  });

  return false;
});

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

$(document).on('click', '.js-subsection-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.params__subsection').find('.params__subsection-dropdown').slideToggle(function () {
    $(this).toggleClass('is-active');
  });

  return false;
});
