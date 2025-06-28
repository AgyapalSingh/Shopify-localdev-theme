function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2;
}

function handleScroll() {
  if (window.innerWidth <= 767) {
    const divs = document.querySelectorAll('.icon-item-flex');
    divs.forEach((div) => {
      if (isInViewport(div)) {
        div.classList.add('icon-item-flex-active');
      } else {
        div.classList.remove('icon-item-flex-active');
      }
    });
  } else {
    const divs = document.querySelectorAll('.icon-item-flex');
    divs.forEach((div) => {
      div.classList.remove('icon-item-flex-active');
    });
  }
}

window.addEventListener('scroll', handleScroll);

handleScroll();
