(() => {
  const toggler = document.querySelector('.menu-toggle');
  const nav = document.getElementById('navigator');

  toggler.addEventListener('click', () => {
    if (nav.classList.contains('expanded')) {
      nav.classList.remove('expanded');
    } else {
      nav.classList.add('expanded');
    }
  });
})();
