document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tabs-collection-button');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabPanels.forEach((panel) => panel.classList.remove('active'));

      button.classList.add('active');
      const target = button.getAttribute('data-tab');
      document.getElementById(target).classList.add('active');
    });
  });
});
