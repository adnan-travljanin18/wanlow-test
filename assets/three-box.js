var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 0.5,
  });