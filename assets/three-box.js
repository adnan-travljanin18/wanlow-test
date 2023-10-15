var swiper = new Swiper('.swiper-container', {
    slidesPerView: '3',
    spaceBetween: 30,
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 0.5,
    breakpoints: {
        768: {
          slidesPerView: 2, // 2 blocks per view on tablets
        },
        576: {
          slidesPerView: 1.5, // 1.5 blocks per view on mobile
        }
      }
  
  });