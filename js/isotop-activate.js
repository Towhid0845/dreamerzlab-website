$(document).ready(function () {
  // init Isotope
  let $grid = $('.menu-body-container').isotope({
    // options
  });
  // filter items on button click
  $('.menu').on('click', 'button', function () {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  $(".menu button").on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  })
});