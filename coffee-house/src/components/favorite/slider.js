const sliderRow = document.querySelector('.slider__row');
const sliderItem = document.querySelector('.slider__item');
const slide = document.querySelectorAll('.slide');
const sliderButtonLeft = document.querySelector('.slider__button_left');
const sliderButtonRight = document.querySelector('.slider__button_right');
const sliderControl = document.querySelectorAll('.slider-controls__control');

let step = 0;
let isPressed = false;
let cursorX = null;
let slideTime = null;


sliderButtonRight.addEventListener('click', () => {
  slideMoveLeft();
});

sliderButtonLeft.addEventListener('click', () => {
  slideMoveRight();
});


const slideMoveLeft = () => {
  step += 1;
  if (step > slide.length - 1) step = 0;
  sliderItem.style.left = `-${step}00%`;
  slideTimeIntervalStop();
  slideTimeIntervalStart();
  controlBackgroundUnFill();
}

const slideMoveRight = () => {
  step -= 1;
  if (step < 0) step = slide.length - 1;
  sliderItem.style.left = `-${step}00%`;
  slideTimeIntervalStop();
  slideTimeIntervalStart();
  controlBackgroundUnFill();
}

const touchStartHandle = (e) => {
  isPressed = true;
  cursorX = e.touches[0].clientX;
}

const touchMoveHandle = (e) => {
  e.preventDefault();
  if (!isPressed) return false;
  if (e.touches[0].clientX < cursorX) {
    sliderItem.style.transform = `translateX(-10%)`;
  } else if (e.touches[0].clientX > cursorX) {
    sliderItem.style.transform = `translateX(10%)`;
  }
  return;
}

const touchEndHandle = (e) => {
  sliderItem.style.transform = `translateX(0%)`;
  isPressed = false;
  if (e.changedTouches[0].clientX < cursorX) {
    slideMoveLeft();
  } else if (e.changedTouches[0].clientX > cursorX){
    slideMoveRight();
  }
  return;
}

const controlBackgroundFill = () => {
  const controlBackground = document.querySelectorAll('.control__background');
  let w = parseInt(window.getComputedStyle(controlBackground[step]).getPropertyValue('width'));
  if (w >= 100) return;
  controlBackground[step].style.width = `${++w}px`;
}

const controlBackgroundUnFill = () => {
  const controlBackground = document.querySelectorAll('.control__background');
  controlBackground.forEach(item => item.style.width = `0%`);
}

const slideTimeIntervalStart = () => {
  slideTime = setInterval(slideMoveLeft, 4000);
} 

slideTimeIntervalStart();

const slideTimeIntervalStop = () => {
  clearInterval(slideTime);
} 

const backgroundFillInterval = setInterval(controlBackgroundFill, 100);

sliderRow.addEventListener('touchstart', touchStartHandle);
sliderRow.addEventListener('touchmove', touchMoveHandle);
sliderRow.addEventListener('touchend', touchEndHandle);



//ToDo: Сделать заполнение фона через добавление класс