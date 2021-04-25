let mainNav = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');

mainNav.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-navigation--closed')) {
    mainNav.classList.remove('main-navigation--closed');
    mainNav.classList.add('main-navigation--opened');
  } else {
    mainNav.classList.add('main-navigation--closed');
    mainNav.classList.remove('main-navigation--opened');
  }
});
