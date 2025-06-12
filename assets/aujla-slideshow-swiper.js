document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
