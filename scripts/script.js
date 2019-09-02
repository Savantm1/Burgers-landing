var hamburger_btn = document.querySelector('.hamburger_link');
var hamburger_menu = document.querySelector('.hamburger__menu');
var close_btn = document.querySelector('.close_link');



hamburger_btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  hamburger_menu.style.display = 'block';

})

close_btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  hamburger_menu.style.display = 'none';
})
