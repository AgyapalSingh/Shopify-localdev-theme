document.addEventListener('DOMContentLoaded', function () {
  const swiperEl = document.querySelector('.mini-slideshow-left');
  const autoplayDelay = parseInt(swiperEl.dataset.autoplayDelay) || 4000;

  new Swiper(swiperEl, {
    loop: true,
    autoplay: {
      delay: autoplayDelay,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
