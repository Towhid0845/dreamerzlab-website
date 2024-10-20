(function ($) {
  "use strict";

  // banner image slider js
  $('.banner-img-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  })
  
  // // our works slider js
    $(".slider-main").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: "0",
      prevArrow: '<i class="bi bi bi-arrow-left arrow left ar-active load"></i>',
      nextArrow: '<i class="bi bi bi-arrow-right arrow right ar-active"></i>',
      slickFilter: '.red',
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }]
    });
  
    $(".filter li").on('click', function(){
      var filter = $(this).data('filter');
      $(".slider-main").slick('slickUnfilter');
      
      if(filter == 'red'){
        $(".slider-main").slick('slickFilter','.red');
      }
      else if(filter == 'yellow'){
        $(".slider-main").slick('slickFilter','.yellow');
      }
      else if(filter == 'blue'){
        $(".slider-main").slick('slickFilter','.blue');
      }
      else if(filter == 'all'){
        $(".slider-main").slick('slickFilter','.blue');
      }
    })
  
      // arrow active
      $(document).ready(function () {
        $(".load").addClass("ac");
      })
      
      $(".ar-active").on("click",function () {
        // $(".sl-arrow").addClass("active");
        $(".ar-active").removeClass("ac");
        $(this).addClass("ac");
      })

  // testimonial slider js
  $('.testi-image-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: '<i class="bi bi-chevron-left arrow left"></i>',
    // nextArrow: '<i class="bi bi-chevron-right arrow right"></i>',
    nextArrow: "",
    asNavFor: ".testi-text-slider",
    customPaging: function (slider, i) {
      let thumb = $(slider.$slides[i]).data();
      let v = Number(i + 1);
      return '<button>' + '0' + v + '</button>';
    },
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    }]
  })

  $('.testi-text-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".testi-image-slider",
    prevArrow: '<i class="bi bi-chevron-left arrow left"></i>',
    nextArrow: '<i class="bi bi-chevron-right arrow right"></i>',
    fade: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  })

  // blog slider js
  $('.blog-image-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".blog-text-slider",
  })


// blog text slider
var $st = $(".pagination");
var $slickEl = $(".blog-text-slider");

$slickEl.slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 1,
  autoplay:false,
  customPaging: (i) => {
    const activeIndex = i?.currentSlide + 1;
    document.getElementById("active-index").innerText = `0${activeIndex}`;
    document.getElementById("pre-index").innerText = `${i?.slideCount < 10 ? "0"+i?.slideCount : i?.slideCount}`;
    document.getElementById("next-index").innerText =
      i?.slideCount === activeIndex ? "01" : `0${activeIndex + 1}`;
  },
  dots: true,
  fade: true,
  arrows:true,
  infinite: true,
  asNavFor: ".blog-image-slider",
  prevArrow: '<i class="bi bi-chevron-left arrow left"></i>',
  nextArrow: '<i class="bi bi-chevron-right arrow right"></i>',
});

$slickEl.on(
  "afterChange",
  function (event, { slideCount: count }, currentSlide, nextSlide) {
    const activeIndex = currentSlide + 1;
    // const activeIndex = item.index + 1;
    document.getElementById("active-index").innerText = `${activeIndex < 10 ? "0":""}${activeIndex}`;
    document.getElementById("pre-index").innerText =
      activeIndex - 1 > 0 ? `${activeIndex - 1 < 10 ? "0":""}${activeIndex - 1}` : `${count}`;
    document.getElementById("next-index").innerText =
      count === currentSlide + 1 ? "01" : `${activeIndex + 1 < 10 ? "0":""}${activeIndex + 1}`;
  }
);

  // technology slider js
  $('.technology-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  })

  // solutions slider js
  $('.solutions-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="bi bi-arrow-left arrow sl-arrow left arrow-active"></i>',
    nextArrow: '<i class="bi bi-arrow-right arrow sl-arrow right"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  })

    // arrow active
    $(document).ready(function () {
      $(".arrow-active").addClass("sl-active");
    })
    
    $(".sl-arrow").on("click",function () {
      // $(".sl-arrow").addClass("active");
      $(".sl-arrow").removeClass("sl-active");
      $(this).addClass("sl-active");
    })
  

  
// model slider js

var $st = $(".pagination");
var $slickEl = $(".model-slider");

$slickEl.slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 1,
  autoplay:false,
  draggable: false,
  customPaging: (i) => {
    const activeIndex = i?.currentSlide + 1;
    document.getElementById("active-index").innerText = `0${activeIndex}`;
    document.getElementById("pre-index").innerText = `${i?.slideCount < 10 ? "0"+i?.slideCount : i?.slideCount}`;
    document.getElementById("next-index").innerText =
      i?.slideCount === activeIndex ? "01" : `0${activeIndex + 1}`;
  },
  dots: true,
  fade: true,
  arrows:true,
  infinite: true,
  prevArrow: '<i class="bi bi-chevron-left arrow left"></i>',
  nextArrow: '<i class="bi bi-chevron-right arrow right"></i>',
});

$slickEl.on(
  "afterChange",
  function (event, { slideCount: count }, currentSlide, nextSlide) {
    const activeIndex = currentSlide + 1;
    // const activeIndex = item.index + 1;
    document.getElementById("active-index").innerText = `${activeIndex < 10 ? "0":""}${activeIndex}`;
    document.getElementById("pre-index").innerText =
      activeIndex - 1 > 0 ? `${activeIndex - 1 < 10 ? "0":""}${activeIndex - 1}` : `${count}`;
    document.getElementById("next-index").innerText =
      count === currentSlide + 1 ? "01" : `${activeIndex + 1 < 10 ? "0":""}${activeIndex + 1}`;
  }
);
  
var $st = $(".pagination");
var $slickEl = $(".games-slider");

$slickEl.slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 5,
  autoplay:false,
  customPaging: (i) => {
    const activeIndex = i?.currentSlide + 1;
    document.getElementById("active-index").innerText = `0${activeIndex}`;
    document.getElementById("pre-index").innerText = `${i?.slideCount < 10 ? "0"+i?.slideCount : i?.slideCount}`;
    document.getElementById("next-index").innerText =
      i?.slideCount === activeIndex ? "01" : `0${activeIndex + 1}`;
  },
  dots: true,
  arrows:true,
  infinite: true,
  centerPadding: "0",
  prevArrow: '<i class="bi bi-chevron-left arrow left"></i>',
  nextArrow: '<i class="bi bi-chevron-right arrow right"></i>',
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
    , {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
    ,{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
    , {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
});

$slickEl.on(
  "afterChange",
  function (event, { slideCount: count }, currentSlide, nextSlide) {
    const activeIndex = currentSlide + 1;
    // const activeIndex = item.index + 1;
    document.getElementById("active-index").innerText = `${activeIndex < 10 ? "0":""}${activeIndex}`;
    document.getElementById("pre-index").innerText =
      activeIndex - 1 > 0 ? `${activeIndex - 1 < 10 ? "0":""}${activeIndex - 1}` : `${count}`;
    document.getElementById("next-index").innerText =
      count === currentSlide + 1 ? "01" : `${activeIndex + 1 < 10 ? "0":""}${activeIndex + 1}`;
  }
);

  // features game slider js
  $('.project-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="bi bi-chevron-left arrow psl-arrow  left pslarrow-active"></i>',
    nextArrow: '<i class="bi bi-chevron-right arrow psl-arrow right"></i>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  })
      // arrow active
      $(document).ready(function () {
        $(".pslarrow-active").addClass("psl-active");
      })
      
      $(".psl-arrow").on("click",function () {
        // $(".sl-arrow").addClass("active");
        $(".psl-arrow").removeClass("psl-active");
        $(this).addClass("psl-active");
      })
    

  // blog details  banner slider js
  $('.blog-details-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  })

  // -----Country Code Selection
  $("#mobile_code").intlTelInput({
    initialCountry: "bd",
    separateDialCode: true,
  });

  // back to top js
  var btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  // fixed menu js
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.navbar').addClass('sticky-navbar');
    } else {
      $('.navbar').removeClass('sticky-navbar');
    }
  });

  // fixed mobile menu js
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.mobile-menu').addClass('mobile-sticky-top');
    } else {
      $('.mobile-menu').removeClass('mobile-sticky-top');
    }
  });

  // mobile menu js
  $('.mobile-topbar .icon').click(function () {
    $('.mobile-menu-main').addClass('show-mobile-menu')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })

  $('.sub-menu ul').hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });


  // video player js
  const player = new Plyr('#player');
  
  
// init Isotope
var $grid = $('.menu-body-container').isotope({
  itemSelector: '.isotope',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter on select change
$('.filters-select').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
  
  // new product game about image slider js
  $('.about-game-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="bi bi-caret-left arrow left"></i>',
    nextArrow: '<i class="bi bi-caret-right arrow right"></i>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  })
  
  // new product game gallery image slider js
  $('.new-product-gallery-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="bi bi-arrow-left arrow left"></i>',
    nextArrow: '<i class="bi bi-arrow-right arrow right"></i>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  })
  
  
})(jQuery);