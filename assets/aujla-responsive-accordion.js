document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.custom-responsive-accordion-header');

  headers.forEach((header) => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const isOpen = content.classList.contains('open');

      headers.forEach((h) => {
        h.classList.remove('active');
        h.nextElementSibling.style.maxHeight = null;
        h.nextElementSibling.classList.remove('open');
        h.querySelector('.custom-accordion-add-icon').textContent = '+';
      });

      if (!isOpen) {
        this.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('open');
        this.querySelector('.custom-accordion-add-icon').textContent = '−';
      }
    });
  });
});
