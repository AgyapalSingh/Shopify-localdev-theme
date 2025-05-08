document.addEventListener('DOMContentLoaded', function () {
  const tabNavItems = document.querySelectorAll('.tab-nav-item');
  const tabContentItems = document.querySelectorAll('.tab-content-item');

  tabNavItems.forEach((item) => {
    item.addEventListener('click', function () {
      const target = this.getAttribute('data-tab');

      tabNavItems.forEach((nav) => nav.classList.remove('active'));
      tabContentItems.forEach((content) => content.classList.remove('active'));

      this.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
});
