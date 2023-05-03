function toggleNav() {
    var nav = document.querySelector('.navbar');
    if (nav.classList.contains('collapsed')) {
      nav.classList.remove('collapsed');
    } else {
      nav.classList.add('collapsed');
    }
  }
  