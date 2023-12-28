const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.burger-icon');
const burgerIconLineTop = document.querySelector('.burger-icon__line_top');
const burgerIconLineBottom = document.querySelector('.burger-icon__line_bottom');
const burgerOverlay = document.querySelector('.burger__overlay');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu__item');
const coffeeMenu = document.querySelector('.coffee-menu');

const closeBurger = () => {
  burgerIconLineTop.classList.remove('burger-icon__line_top_active');
  burgerIconLineBottom.classList.remove('burger-icon__line_bottom_active');
  burgerOverlay.classList.remove('burger__overlay_active');
  menu.classList.remove('menu_mobile');
  coffeeMenu.classList.remove('coffee-menu_mobile');
}

const getWidth = () => document.documentElement.clientWidth;

const checkWidth = () => {
  const width = getWidth();
  if (width > 768) {
    closeBurger();
  }
  return;
}

const burgerClick = (e) => {
  const target = e.target;
  burgerIconLineTop.classList.toggle('burger-icon__line_top_active');
  burgerIconLineBottom.classList.toggle('burger-icon__line_bottom_active');
  burgerOverlay.classList.toggle('burger__overlay_active');
  menu.classList.toggle('menu_mobile');
  coffeeMenu.classList.toggle('coffee-menu_mobile');
}

const menuClick = (e) => {
  const target = e.target;
  if (burgerOverlay.classList.contains('burger__overlay_active')) closeBurger();    
}

window.addEventListener('resize', () => checkWidth());

menuItem.forEach((item) => item.addEventListener('click', (e) => {
  menuClick(e);
}));

burger.addEventListener('click', (e) => burgerClick(e));

// toDod: refactor: убрать вложение в стрелочную функцию в EventListener