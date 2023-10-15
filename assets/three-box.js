var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Display 3 blocks on desktop
    spaceBetween: 30,
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 0.5,
    breakpoints: {
        1024: {
          slidesPerView: 3, // 3 blocks per view on desktop
        },
        768: {
          slidesPerView: 2, // 2 blocks per view on tablets
        },
        576: {
          slidesPerView: 1, // 1 block per view on mobile
        }
      }
  });