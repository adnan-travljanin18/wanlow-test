document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".instagram-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    });
  });
  