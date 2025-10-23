document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tabs-content-button');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');

        tabButtons.forEach((btn) => btn.classList.remove('active'));
        tabPanels.forEach((panel) => panel.classList.remove('active'));

        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }
});
