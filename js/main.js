$(document).ready(function () {
  lazyLoad();
  /************************************ Menu ************************************/
  if ($(window).width() <= 1299) {
    $(".menu-btn").click(function () {
      $(".menu-overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });
    $(".menu-close,.menu-overlay").click(function () {
      $(".menu-overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });
  }
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Cats Slider ************************************/
  var catsSwiper = new Swiper(".cats-slider .swiper", {
    // loop: true,

    pagination: {
      el: ".cats-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".cats-cont .swiper-button-next",
      prevEl: ".cats-cont .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        freeMode: false,
        loop: true,
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2,
        freeMode: false,
        loop: true,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 3,
        freeMode: true,
        loop: false,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 3.46,
        freeMode: true,
        loop: false,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Services Slider ************************************/
  var servicesSwiper = new Swiper(".services-slider .swiper", {
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2,
        loop: true,
        allowTouchMove: true,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
      },
    },
  });
  /************************************ Blogs Slider ************************************/
  var blogsSwiper = new Swiper(".blogs-slider .swiper", {
    pagination: {
      el: ".blogs-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2,
        loop: true,
        allowTouchMove: true,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Projects Slider ************************************/
  var projectsSwiper = new Swiper(".projects-slider .swiper", {
    pagination: {
      el: ".projects-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2,
        loop: true,
        allowTouchMove: true,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Partners Slider ************************************/
  var partnersSwiper = new Swiper(".partners-slider .swiper", {
    loop: true,
    pagination: {
      el: ".partners-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Footer ************************************/
  if ($(window).width() <= 767) {
    $(".footer-list .footer-title").click(function () {
      $(".footer-list .footer-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-list .footer-title").not(this).siblings().slideUp(500);
    });
  }
  /************************************ Subcat ************************************/
  $(".desc-toggle-btn").click(function (e) {
    var text = $(this).parents(".subsubcat-item").find(".subsubcat-desc");
    var height = text.prop("scrollHeight");
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      text.height(height).addClass("active");
    } else {
      text.height(24).removeClass("active");
    }
  });
  /************************************ lattest ************************************/
  if ($(window).width() <= 991) {
    var lattestSwiper = new Swiper(".lattest-slider .swiper", {
      loop: true,
      pagination: {
        el: ".lattest-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        767: {
          spaceBetween: 15,
          slidesPerView: 2,
        },
      },
      on: {
        init: function (swiper) {
          lazyLoad();
        },
      },
    });
  }
});

/************************************ Lazyload ************************************/
function lazyLoad() {
  const images = document.querySelectorAll(".lazy-img");

  const optionsLazyLoad = {
    //  rootMargin: '-50px',
    // threshold: 1
  };

  const imageObserver = new IntersectionObserver(function (enteries) {
    enteries.forEach(function (entery) {
      if (!entery.isIntersecting) {
        return;
      } else {
        preloadImage(entery.target);
        imageObserver.unobserve(entery.target);
      }
    });
  }, optionsLazyLoad);

  images.forEach(function (image) {
    imageObserver.observe(image);
  });
}

function preloadImage(img) {
  img.src = img.getAttribute("data-src");
  img.onload = function () {
    img.parentElement.classList.remove("loading-img");
    img.parentElement.classList.add("loaded-img");
    img.parentElement.parentElement.classList.add("lazy-head-img");
  };
}
