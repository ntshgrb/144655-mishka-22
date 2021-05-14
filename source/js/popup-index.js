const link = document.querySelector('.trending-good__to-cart');
const popup = document.querySelector('.popup');

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('popup--closed');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains('popup--closed')) {
      evt.preventDefault();
      popup.classList.add('popup--closed');
    }
  }
});
