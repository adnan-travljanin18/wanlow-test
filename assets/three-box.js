function initializeSwiper() {
    var screenWidth = window.innerWidth;
    var slidesPerView;

    if (screenWidth >= 1024) {
      slidesPerView = 3;
    } else if (screenWidth >= 768) {
      slidesPerView = 2;
    } else {
      slidesPerView = 1;
    }

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: slidesPerView,
      spaceBetween: 30,
      grabCursor: true,
      simulateTouch: true,
      touchRatio: 0.5,
      direction: 'horizontal'
    });
  }

  // Initialize Swiper on page load
  initializeSwiper();

  // Re-initialize Swiper on window resize
  window.addEventListener('resize', function() {
    initializeSwiper();
  });