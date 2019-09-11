var hamburger_btn = document.querySelector('.hamburger_link');
var hamburger_menu = document.querySelector('.hamburger__menu');
var close_btn = document.querySelector('.close_link');
var toggle_btn = document.querySelectorAll('.item__link');
var accordeon__item = document.querySelectorAll('.accordeon__item');
var i;
var paginator_item = document.querySelectorAll('.paginator__link');


hamburger_btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  hamburger_menu.style.height = '100%';
  hamburger_menu.style.overflow = 'scroll';
});

close_btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  hamburger_menu.style.height = '0%';
  hamburger_menu.style.overflow = 'hidden';
});

// acco -team

$(".item__link").on("click", function (e) {
  e.preventDefault();
  const item = this.parentNode;

  if ($(item).hasClass("accordeon_item--active")) $(item).removeClass("accordeon_item--active");
  else {
    $(".accordeon_item").removeClass("accordeon_item--active");
    $(item).addClass("accordeon_item--active");
  }
});


// acco - burger

$(".menu-acco__trigger").on("click", function (e) {
  e.preventDefault();
  const item = this.parentNode;

  if ($(item).hasClass("active")) $(item).removeClass("active");
  else {
    $(".menu-acco__trigger").removeClass("active");
    $(item).addClass("active");
  }
});


//slider

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#slides");
const item = document.querySelector(".slide");

const minRight = 0;
const maxRight = 400;
const step = 100;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function () {
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "%";
  } else {
    currentRight = minRight;
    items.style.right = currentRight + "%";
  }
});

left.addEventListener("click", function () {
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "%";
  } else {
    currentRight = maxRight;
    items.style.right = currentRight + "%";
  }
});


//menu

$(document).ready(function () {
  $(".hamburger__list").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    hamburger_menu.style.height = '0%';
    hamburger_menu.style.overflow = 'hidden';
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({
      scrollTop: top
    }, 500);
  });
});


//paginator

$(document).ready(function () {
  $(".paginator").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({
      scrollTop: top
    }, 500);
  });
});

//main_nav

$(document).ready(function () {
  $(".header").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({
      scrollTop: top
    }, 500);
  });
});
