var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 0.5,
    on: {
      resize: function () {
        swiper.params.slidesPerView = getSlidesPerView();
        swiper.update();
      }
    }
  });

  function getSlidesPerView() {
    if (window.innerWidth >= 1024) {
      return 3; // 3 blocks per view on desktop
    } else if (window.innerWidth >= 768) {
      return 2; // 2 blocks per view on tablets
    } else {
      return 1.5; // 1.5 blocks per view on mobile
    }
  }