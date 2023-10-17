document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".instagram-slider", {
    slidesPerView: 4,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,  // Show 3 slides per view on tablets (width >= 768px)
      },
      0: {
        slidesPerView: 2,  // Show 2 slides per view on mobile (width >= 576px)
      }
    }
  });
});