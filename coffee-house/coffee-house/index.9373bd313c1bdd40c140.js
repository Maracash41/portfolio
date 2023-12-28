/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 545:
/***/ (function() {

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
};
const slideMoveRight = () => {
  step -= 1;
  if (step < 0) step = slide.length - 1;
  sliderItem.style.left = `-${step}00%`;
  slideTimeIntervalStop();
  slideTimeIntervalStart();
  controlBackgroundUnFill();
};
const touchStartHandle = e => {
  isPressed = true;
  cursorX = e.touches[0].clientX;
};
const touchMoveHandle = e => {
  e.preventDefault();
  if (!isPressed) return false;
  if (e.touches[0].clientX < cursorX) {
    sliderItem.style.transform = `translateX(-10%)`;
  } else if (e.touches[0].clientX > cursorX) {
    sliderItem.style.transform = `translateX(10%)`;
  }
  return;
};
const touchEndHandle = e => {
  sliderItem.style.transform = `translateX(0%)`;
  isPressed = false;
  if (e.changedTouches[0].clientX < cursorX) {
    slideMoveLeft();
  } else if (e.changedTouches[0].clientX > cursorX) {
    slideMoveRight();
  }
  return;
};
const controlBackgroundFill = () => {
  const controlBackground = document.querySelectorAll('.control__background');
  let w = parseInt(window.getComputedStyle(controlBackground[step]).getPropertyValue('width'));
  if (w >= 100) return;
  controlBackground[step].style.width = `${++w}px`;
};
const controlBackgroundUnFill = () => {
  const controlBackground = document.querySelectorAll('.control__background');
  controlBackground.forEach(item => item.style.width = `0%`);
};
const slideTimeIntervalStart = () => {
  slideTime = setInterval(slideMoveLeft, 4000);
};
slideTimeIntervalStart();
const slideTimeIntervalStop = () => {
  clearInterval(slideTime);
};
const backgroundFillInterval = setInterval(controlBackgroundFill, 100);
sliderRow.addEventListener('touchstart', touchStartHandle);
sliderRow.addEventListener('touchmove', touchMoveHandle);
sliderRow.addEventListener('touchend', touchEndHandle);

//ToDo: Сделать заполнение фона через добавление класс

/***/ }),

/***/ 949:
/***/ (function() {

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
};
const getWidth = () => document.documentElement.clientWidth;
const checkWidth = () => {
  const width = getWidth();
  if (width > 768) {
    closeBurger();
  }
  return;
};
const burgerClick = e => {
  const target = e.target;
  burgerIconLineTop.classList.toggle('burger-icon__line_top_active');
  burgerIconLineBottom.classList.toggle('burger-icon__line_bottom_active');
  burgerOverlay.classList.toggle('burger__overlay_active');
  menu.classList.toggle('menu_mobile');
  coffeeMenu.classList.toggle('coffee-menu_mobile');
};
const menuClick = e => {
  const target = e.target;
  if (burgerOverlay.classList.contains('burger__overlay_active')) closeBurger();
};
window.addEventListener('resize', () => checkWidth());
menuItem.forEach(item => item.addEventListener('click', e => {
  menuClick(e);
}));
burger.addEventListener('click', e => burgerClick(e));

// toDod: refactor: убрать вложение в стрелочную функцию в EventListener

/***/ }),

/***/ 91:
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/coffee-slider-1.png";

/***/ }),

/***/ 55:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/coffee-slider-2.png";

/***/ }),

/***/ 203:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/coffee-slider-3.png";

/***/ }),

/***/ 483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/logo.svg";

/***/ }),

/***/ 501:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/mobile.png";

/***/ }),

/***/ 606:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/cc9a450e87de971dbe21.ico";

/***/ }),

/***/ 393:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/3a19fd1210d63dc1b79d.mp4";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(91);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(606), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(483), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(393), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(796), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(55), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(203), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(501), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Coffee House</title>\r\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\r\n</head>\r\n<body>\r\n  <header class=\"header\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"header__header-container header-container\">\r\n        <div class=\"logo\">\r\n          <a href=\"../index.html\" class=\"logo__link\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Logo\" class=\"log__img\">\r\n          </a>\r\n        </div>\r\n        <nav>\r\n          <ul class=\"header__menu menu\">\r\n            <li class=\"menu__item\"><a href=\"#favorite-coffee\" class=\"menu__link link\">Favorite coffee</a></li>\r\n            <li class=\"menu__item\"><a href=\"#about\" class=\"menu__link link\">About</a></li>\r\n            <li class=\"menu__item\"><a href=\"#mobile-app\" class=\"menu__link link\">Mobile app</a></li>\r\n            <li class=\"menu__item\"><a href=\"#contact-us\" class=\"menu__link link\">Contact us</a></li>\r\n          </ul>\r\n          <div class=\"burger\">\r\n            <div class=\"burger__burger-icon burger-icon\">\r\n              <div class=\"burger-icon__line burger-icon__line_top\"></div>\r\n              <div class=\"burger-icon__line burger-icon__line_bottom\"></div>\r\n            </div>\r\n            <div class=\"burger__overlay\"></div>\r\n          </div>\r\n        </nav>\r\n        <div class=\"header__coffee-menu coffee-menu\">\r\n          <a href=\"./pages/menu.html\" class=\"coffee-menu__link link\">\r\n            <p class=\"coffee-menu__text\">Menu</p>\r\n            <div class=\"coffee-menu__icon\"></div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <main class=\"main\">\r\n    <section class=\"hero\" id=\"hero\">\r\n\r\n      <div class=\"wrapper\">\r\n        <div class=\"hero__hero-container hero-container\">\r\n          <video class=\"hero-container__video\"  autoplay=\"\" muted=\"\" loop=\"\">\r\n            <source src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" type=\"video/mp4\"></source>\r\n          </video>\r\n          <div class=\"hero__hero-content hero-content\">\r\n            <div class=\"hero-content__slogan slogan\">\r\n              <h1 class=\"slogan__text\"><span class=\"text-accent\">Enjoy</span> premium coffee at our charming cafe</h1>\r\n            </div>\r\n            <div class=\"hero-content__text\">\r\n              <p>\r\n                With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.\r\n              </p>\r\n            </div>\r\n            <a href=\"./pages/menu.html\" class=\"btn btn_primary\">\r\n              <div class=\"btn-icon\">Menu</div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"favorite-coffee\" id=\"favorite-coffee\">\r\n      <div class=\"wrapper\">\r\n        <div class=\"favorite-coffee__favorite-container favorite-container\">\r\n          <div class=\"favorite-coffee__title title\">\r\n            <h2 class=\"title__text title__text_favorite-coffee\">Choose your <span class=\"text-accent\">favorite</span> coffee</h2>\r\n          </div>\r\n          <div class=\"favorite-coffee__slider slider\">\r\n            <div class=\"slider__buttons\">\r\n              <svg class=\"slider__button slider__button_left\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#665F55\"/>\r\n                <path class=\"slider__button_arrow\" d=\"M24 30H36.5M36.5 30L30.5 24M36.5 30L30.5 36\" stroke=\"#403F3D\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n              </svg>\r\n              <svg class=\"slider__button slider__button_right\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#665F55\"/>\r\n                <path class=\"slider__button_arrow\" d=\"M24 30H36.5M36.5 30L30.5 24M36.5 30L30.5 36\" stroke=\"#403F3D\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n              </svg>\r\n            </div>\r\n            <div class=\"slider__row\">\r\n              <div class=\"slider__item\">\r\n              <div class=\"slider__slide slide\">\r\n                <div class=\"slide__image\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Frapuccino\">\r\n                </div>\r\n                <div class=\"slide__title\">S’mores Frappuccino</div>\r\n                <div class=\"slide__desk\">\r\n                  <p>\r\n                    This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.\r\n                  </p>\r\n                </div>\r\n                <div class=\"slide__cost\">$5.50</div>\r\n              </div>\r\n              <div class=\"slider__slide slide\">\r\n                <div class=\"slide__image\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Frapuccino\">\r\n                </div>\r\n                <div class=\"slide__title\">S’mores Frappuccino</div>\r\n                <div class=\"slide__desk\">\r\n                  <p>\r\n                    This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.\r\n                  </p>\r\n                </div>\r\n                <div class=\"slide__cost\">$5.50</div>\r\n              </div>\r\n              <div class=\"slider__slide slide\">\r\n                <div class=\"slide__image\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Frapuccino\">\r\n                </div>\r\n                <div class=\"slide__title\">S’mores Frappuccino</div>\r\n                <div class=\"slide__desk\">\r\n                  <p>\r\n                    This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.\r\n                  </p>\r\n                </div>\r\n                <div class=\"slide__cost\">$5.50</div>\r\n              </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"slider__slider-controls slider-controls\">\r\n              <div class=\"slider-controls__control control\"><span class=\"control__background\"></span></div>\r\n              <div class=\"slider-controls__control control\"><span class=\"control__background\"></span></div>\r\n              <div class=\"slider-controls__control control\"><span class=\"control__background\"></span></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"about\" id=\"about\">\r\n      <div class=\"wrapper\">\r\n        <div class=\"about__title title\">\r\n          <h2 class=\"title__text title__text_about\">\r\n            Resource is <span class=\"text-accent\">the perfect and cozy place</span> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.\r\n          </h2>\r\n        </div>\r\n        <div class=\"about__images images\">\r\n          <div class=\"images__col\">\r\n            <div class=\"images__image-container image-container\">\r\n              <div class=\"image-container__image image-container__image_1\"></div>\r\n            </div>\r\n            <div class=\"images__image-container image-container image-container_mob\">\r\n              <div class=\"image-container__image image-container__image_2\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"images__col\">\r\n            <div class=\"images__image-container image-container image-container_mob\">\r\n              <div class=\"image-container__image image-container__image_3\"></div>\r\n            </div>\r\n            <div class=\"images__image-container image-container\">\r\n              <div class=\"image-container__image image-container__image_4\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"mobile-app\" id=\"mobile-app\">\r\n      <div class=\"wrapper\">\r\n        <div class=\"mobile-app__mobile-container\">\r\n          <div class=\"mobile-app__col\">\r\n            <div class=\"mobile-app__content\">\r\n              <div class=\"mobile-app__title title\">\r\n                <h2 class=\"title__text title__text_mobile-app\"><span class=\"text-accent\">Download</span> our apps to start ordering</h2>\r\n              </div>\r\n              <div class=\"mobile-app__desk\">\r\n                <p>\r\n                  Download the Resource app today and experience the comfort of ordering your favorite cofee from wherever you are\r\n                </p>\r\n              </div>\r\n              <div class=\"mobile-app__buttons\">\r\n                <div class=\"mobile-app__button\">\r\n                  <svg class=\"mobile-app_bg\" width=\"200\" height=\"64\" viewBox=\"0 0 200 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect x=\"0.5\" y=\"0.5\" width=\"199\" height=\"63\" rx=\"31.5\" stroke=\"#665F55\"/>\r\n                    <path class=\"mobile-app_path\" d=\"M46.7073 32.6307C46.6704 28.6324 50.065 26.6872 50.2203 26.5966C48.2977 23.8637 45.3178 23.4903 44.2707 23.4605C41.7679 23.2037 39.3403 24.9206 38.0654 24.9206C36.765 24.9206 34.8017 23.4853 32.6858 23.5275C29.9629 23.5684 27.4157 25.1055 26.0186 27.4923C23.1354 32.359 25.2857 39.5108 28.048 43.4446C29.4298 45.3712 31.0444 47.5223 33.1578 47.4466C35.2254 47.3635 35.9978 46.1614 38.4929 46.1614C40.9651 46.1614 41.6903 47.4466 43.8457 47.3983C46.0647 47.3635 47.4618 45.463 48.7952 43.519C50.392 41.3108 51.0333 39.1362 51.0588 39.0245C51.0066 39.0071 46.7493 37.4229 46.7073 32.6307Z\" fill=\"#403F3D\"/>\r\n                    <path class=\"mobile-app_path\" d=\"M42.6357 20.8727C43.7477 19.5168 44.5086 17.672 44.2974 15.8C42.6879 15.8695 40.675 16.8855 39.5159 18.2117C38.4903 19.3803 37.5742 21.2957 37.8109 23.097C39.6189 23.2285 41.4753 22.2075 42.6357 20.8727Z\" fill=\"#403F3D\"/>\r\n                    <path class=\"mobile-app_path\" d=\"M65.748 23H64.3417L66.9021 15.7273H68.5285L71.0924 23H69.6862L67.7437 17.2188H67.6869L65.748 23ZM65.7941 20.1484H69.6294V21.2067H65.7941V20.1484ZM76.1821 17.5455L74.2396 23H72.8192L70.8767 17.5455H72.2474L73.501 21.5973H73.5578L74.8149 17.5455H76.1821ZM78.485 23.1101C78.1394 23.1101 77.828 23.0485 77.551 22.9254C77.2764 22.8 77.0586 22.6153 76.8976 22.3714C76.739 22.1276 76.6597 21.8269 76.6597 21.4695C76.6597 21.1617 76.7165 20.9072 76.8302 20.706C76.9438 20.5047 77.0989 20.3438 77.2954 20.223C77.4919 20.1023 77.7132 20.0111 77.9594 19.9496C78.208 19.8857 78.4649 19.8395 78.73 19.8111C79.0496 19.7779 79.3089 19.7483 79.5077 19.7223C79.7066 19.6939 79.851 19.6513 79.941 19.5945C80.0333 19.5353 80.0795 19.4441 80.0795 19.321V19.2997C80.0795 19.0322 80.0001 18.825 79.8415 18.6783C79.6829 18.5315 79.4545 18.4581 79.1562 18.4581C78.8413 18.4581 78.5915 18.5268 78.4069 18.6641C78.2246 18.8014 78.1015 18.9635 78.0376 19.1506L76.8373 18.9801C76.932 18.6487 77.0882 18.3717 77.306 18.1491C77.5238 17.9242 77.7902 17.7562 78.105 17.6449C78.4199 17.5312 78.7679 17.4744 79.1491 17.4744C79.4118 17.4744 79.6734 17.5052 79.9339 17.5668C80.1943 17.6283 80.4322 17.7301 80.6476 17.8722C80.8631 18.0118 81.0359 18.2024 81.1661 18.4439C81.2987 18.6854 81.365 18.9872 81.365 19.3494V23H80.1292V22.2507H80.0866C80.0084 22.4022 79.8983 22.5443 79.7563 22.6768C79.6166 22.8071 79.4403 22.9124 79.2272 22.9929C79.0165 23.071 78.7691 23.1101 78.485 23.1101ZM78.8188 22.1655C79.0769 22.1655 79.3006 22.1146 79.49 22.0128C79.6794 21.9086 79.825 21.7713 79.9268 21.6009C80.0309 21.4304 80.083 21.2446 80.083 21.0433V20.4006C80.0428 20.4337 79.9741 20.4645 79.877 20.4929C79.7823 20.5213 79.6758 20.5462 79.5574 20.5675C79.4391 20.5888 79.3219 20.6077 79.2059 20.6243C79.0899 20.6409 78.9893 20.6551 78.904 20.6669C78.7123 20.6929 78.5406 20.7356 78.3891 20.7947C78.2376 20.8539 78.118 20.9368 78.0305 21.0433C77.9429 21.1475 77.8991 21.2824 77.8991 21.4482C77.8991 21.6849 77.9855 21.8636 78.1583 21.9844C78.3311 22.1051 78.5513 22.1655 78.8188 22.1655ZM82.6576 23V17.5455H83.9431V23H82.6576ZM83.3039 16.7713C83.1003 16.7713 82.9251 16.7038 82.7783 16.5689C82.6315 16.4316 82.5581 16.267 82.5581 16.0753C82.5581 15.8812 82.6315 15.7166 82.7783 15.5817C82.9251 15.4444 83.1003 15.3757 83.3039 15.3757C83.5099 15.3757 83.685 15.4444 83.8295 15.5817C83.9762 15.7166 84.0496 15.8812 84.0496 16.0753C84.0496 16.267 83.9762 16.4316 83.8295 16.5689C83.685 16.7038 83.5099 16.7713 83.3039 16.7713ZM86.5505 15.7273V23H85.265V15.7273H86.5505ZM89.442 23.1101C89.0964 23.1101 88.7851 23.0485 88.5081 22.9254C88.2335 22.8 88.0157 22.6153 87.8547 22.3714C87.6961 22.1276 87.6167 21.8269 87.6167 21.4695C87.6167 21.1617 87.6736 20.9072 87.7872 20.706C87.9008 20.5047 88.0559 20.3438 88.2524 20.223C88.4489 20.1023 88.6702 20.0111 88.9165 19.9496C89.165 19.8857 89.4219 19.8395 89.6871 19.8111C90.0067 19.7779 90.2659 19.7483 90.4648 19.7223C90.6636 19.6939 90.808 19.6513 90.898 19.5945C90.9903 19.5353 91.0365 19.4441 91.0365 19.321V19.2997C91.0365 19.0322 90.9572 18.825 90.7986 18.6783C90.6399 18.5315 90.4115 18.4581 90.1132 18.4581C89.7983 18.4581 89.5486 18.5268 89.3639 18.6641C89.1816 18.8014 89.0585 18.9635 88.9946 19.1506L87.7943 18.9801C87.889 18.6487 88.0452 18.3717 88.2631 18.1491C88.4809 17.9242 88.7472 17.7562 89.0621 17.6449C89.3769 17.5312 89.7249 17.4744 90.1061 17.4744C90.3689 17.4744 90.6305 17.5052 90.8909 17.5668C91.1513 17.6283 91.3892 17.7301 91.6047 17.8722C91.8201 18.0118 91.9929 18.2024 92.1231 18.4439C92.2557 18.6854 92.322 18.9872 92.322 19.3494V23H91.0862V22.2507H91.0436C90.9655 22.4022 90.8554 22.5443 90.7133 22.6768C90.5737 22.8071 90.3973 22.9124 90.1842 22.9929C89.9735 23.071 89.7261 23.1101 89.442 23.1101ZM89.7758 22.1655C90.0339 22.1655 90.2576 22.1146 90.447 22.0128C90.6364 21.9086 90.782 21.7713 90.8838 21.6009C90.988 21.4304 91.04 21.2446 91.04 21.0433V20.4006C90.9998 20.4337 90.9311 20.4645 90.8341 20.4929C90.7394 20.5213 90.6328 20.5462 90.5145 20.5675C90.3961 20.5888 90.2789 20.6077 90.1629 20.6243C90.0469 20.6409 89.9463 20.6551 89.8611 20.6669C89.6693 20.6929 89.4977 20.7356 89.3461 20.7947C89.1946 20.8539 89.0751 20.9368 88.9875 21.0433C88.8999 21.1475 88.8561 21.2824 88.8561 21.4482C88.8561 21.6849 88.9425 21.8636 89.1153 21.9844C89.2881 22.1051 89.5083 22.1655 89.7758 22.1655ZM93.6714 23V15.7273H94.9569V18.4474H95.0102C95.0765 18.3149 95.17 18.174 95.2907 18.0249C95.4115 17.8733 95.5748 17.7443 95.7808 17.6378C95.9868 17.5289 96.2496 17.4744 96.5692 17.4744C96.9906 17.4744 97.3705 17.5821 97.7091 17.7976C98.05 18.0107 98.3199 18.3267 98.5187 18.7457C98.72 19.1624 98.8206 19.6738 98.8206 20.2798C98.8206 20.8788 98.7223 21.3878 98.5258 21.8068C98.3293 22.2259 98.0618 22.5455 97.7233 22.7656C97.3847 22.9858 97.0012 23.0959 96.5727 23.0959C96.2602 23.0959 96.001 23.0438 95.795 22.9396C95.589 22.8355 95.4233 22.71 95.2979 22.5632C95.1747 22.4141 95.0789 22.2732 95.0102 22.1406H94.9356V23H93.6714ZM94.9321 20.2727C94.9321 20.6255 94.9818 20.9344 95.0812 21.1996C95.183 21.4647 95.3286 21.6719 95.518 21.821C95.7098 21.9678 95.9418 22.0412 96.214 22.0412C96.4981 22.0412 96.7361 21.9654 96.9278 21.8139C97.1196 21.66 97.264 21.4505 97.3611 21.1854C97.4605 20.9179 97.5102 20.6136 97.5102 20.2727C97.5102 19.9342 97.4617 19.6335 97.3646 19.3707C97.2675 19.108 97.1231 18.902 96.9314 18.7528C96.7396 18.6037 96.5005 18.5291 96.214 18.5291C95.9394 18.5291 95.7062 18.6013 95.5145 18.7457C95.3227 18.8902 95.1771 19.0926 95.0777 19.353C94.9806 19.6134 94.9321 19.92 94.9321 20.2727ZM101.199 15.7273V23H99.9134V15.7273H101.199ZM104.936 23.1065C104.389 23.1065 103.916 22.9929 103.519 22.7656C103.123 22.536 102.819 22.2116 102.606 21.7926C102.393 21.3712 102.286 20.8752 102.286 20.3047C102.286 19.7436 102.393 19.2512 102.606 18.8274C102.822 18.4013 103.122 18.0698 103.508 17.8331C103.894 17.594 104.347 17.4744 104.868 17.4744C105.204 17.4744 105.522 17.5289 105.82 17.6378C106.121 17.7443 106.386 17.91 106.615 18.1349C106.847 18.3598 107.03 18.6463 107.162 18.9943C107.295 19.34 107.361 19.7519 107.361 20.2301V20.6243H102.89V19.7578H106.129C106.126 19.5116 106.073 19.2926 105.969 19.1009C105.865 18.9067 105.719 18.754 105.532 18.6428C105.348 18.5315 105.132 18.4759 104.886 18.4759C104.623 18.4759 104.392 18.5398 104.193 18.6676C103.995 18.7931 103.84 18.9588 103.728 19.1648C103.619 19.3684 103.564 19.5921 103.561 19.8359V20.5923C103.561 20.9096 103.619 21.1818 103.735 21.4091C103.851 21.634 104.014 21.8068 104.222 21.9276C104.43 22.0459 104.674 22.1051 104.953 22.1051C105.14 22.1051 105.31 22.0791 105.461 22.027C105.613 21.9725 105.744 21.8932 105.855 21.7891C105.967 21.6849 106.051 21.5559 106.108 21.402L107.308 21.5369C107.232 21.8542 107.088 22.1312 106.875 22.3679C106.664 22.6023 106.394 22.7846 106.065 22.9148C105.736 23.0426 105.359 23.1065 104.936 23.1065ZM113.308 23.1065C112.776 23.1065 112.314 22.9893 111.923 22.755C111.533 22.5206 111.23 22.1927 111.014 21.7713C110.801 21.3499 110.695 20.8575 110.695 20.294C110.695 19.7306 110.801 19.237 111.014 18.8132C111.23 18.3894 111.533 18.0604 111.923 17.826C112.314 17.5916 112.776 17.4744 113.308 17.4744C113.841 17.4744 114.303 17.5916 114.693 17.826C115.084 18.0604 115.386 18.3894 115.599 18.8132C115.814 19.237 115.922 19.7306 115.922 20.294C115.922 20.8575 115.814 21.3499 115.599 21.7713C115.386 22.1927 115.084 22.5206 114.693 22.755C114.303 22.9893 113.841 23.1065 113.308 23.1065ZM113.315 22.0767C113.604 22.0767 113.846 21.9974 114.04 21.8388C114.234 21.6778 114.378 21.4624 114.473 21.1925C114.57 20.9226 114.619 20.6219 114.619 20.2905C114.619 19.9567 114.57 19.6548 114.473 19.3849C114.378 19.1127 114.234 18.8961 114.04 18.7351C113.846 18.5741 113.604 18.4936 113.315 18.4936C113.02 18.4936 112.773 18.5741 112.577 18.7351C112.383 18.8961 112.237 19.1127 112.14 19.3849C112.045 19.6548 111.998 19.9567 111.998 20.2905C111.998 20.6219 112.045 20.9226 112.14 21.1925C112.237 21.4624 112.383 21.6778 112.577 21.8388C112.773 21.9974 113.02 22.0767 113.315 22.0767ZM118.299 19.804V23H117.013V17.5455H118.242V18.4723H118.306C118.431 18.1669 118.631 17.9242 118.906 17.7443C119.183 17.5644 119.525 17.4744 119.932 17.4744C120.309 17.4744 120.636 17.5549 120.916 17.7159C121.197 17.8769 121.415 18.1101 121.569 18.4155C121.725 18.7209 121.802 19.0914 121.8 19.527V23H120.514V19.7259C120.514 19.3613 120.42 19.076 120.23 18.87C120.043 18.6641 119.784 18.5611 119.453 18.5611C119.228 18.5611 119.028 18.6108 118.853 18.7102C118.68 18.8073 118.544 18.9482 118.444 19.1328C118.347 19.3175 118.299 19.5412 118.299 19.804ZM128.311 17.5455V18.5398H125.175V17.5455H128.311ZM125.949 16.2386H127.235V21.3594C127.235 21.5322 127.261 21.6648 127.313 21.7571C127.368 21.8471 127.439 21.9086 127.526 21.9418C127.614 21.9749 127.711 21.9915 127.817 21.9915C127.898 21.9915 127.971 21.9856 128.038 21.9737C128.106 21.9619 128.158 21.9512 128.194 21.9418L128.41 22.9467C128.342 22.9704 128.244 22.9964 128.116 23.0249C127.99 23.0533 127.836 23.0698 127.654 23.0746C127.332 23.084 127.042 23.0355 126.784 22.929C126.526 22.8201 126.321 22.652 126.17 22.4247C126.021 22.1974 125.947 21.9134 125.949 21.5724V16.2386ZM130.789 19.804V23H129.503V15.7273H130.76V18.4723H130.824C130.952 18.1645 131.15 17.9219 131.417 17.7443C131.687 17.5644 132.031 17.4744 132.447 17.4744C132.826 17.4744 133.156 17.5537 133.438 17.7124C133.72 17.871 133.937 18.103 134.091 18.4084C134.248 18.7138 134.326 19.0866 134.326 19.527V23H133.04V19.7259C133.04 19.3589 132.946 19.0736 132.756 18.87C132.569 18.6641 132.306 18.5611 131.968 18.5611C131.741 18.5611 131.537 18.6108 131.357 18.7102C131.179 18.8073 131.04 18.9482 130.938 19.1328C130.839 19.3175 130.789 19.5412 130.789 19.804ZM138.051 23.1065C137.504 23.1065 137.032 22.9929 136.634 22.7656C136.239 22.536 135.934 22.2116 135.721 21.7926C135.508 21.3712 135.402 20.8752 135.402 20.3047C135.402 19.7436 135.508 19.2512 135.721 18.8274C135.937 18.4013 136.237 18.0698 136.623 17.8331C137.009 17.594 137.463 17.4744 137.983 17.4744C138.32 17.4744 138.637 17.5289 138.935 17.6378C139.236 17.7443 139.501 17.91 139.731 18.1349C139.963 18.3598 140.145 18.6463 140.277 18.9943C140.41 19.34 140.476 19.7519 140.476 20.2301V20.6243H136.005V19.7578H139.244C139.242 19.5116 139.188 19.2926 139.084 19.1009C138.98 18.9067 138.834 18.754 138.647 18.6428C138.463 18.5315 138.247 18.4759 138.001 18.4759C137.738 18.4759 137.508 18.5398 137.309 18.6676C137.11 18.7931 136.955 18.9588 136.843 19.1648C136.735 19.3684 136.679 19.5921 136.677 19.8359V20.5923C136.677 20.9096 136.735 21.1818 136.851 21.4091C136.967 21.634 137.129 21.8068 137.337 21.9276C137.545 22.0459 137.789 22.1051 138.069 22.1051C138.256 22.1051 138.425 22.0791 138.576 22.027C138.728 21.9725 138.859 21.8932 138.971 21.7891C139.082 21.6849 139.166 21.5559 139.223 21.402L140.423 21.5369C140.347 21.8542 140.203 22.1312 139.99 22.3679C139.779 22.6023 139.509 22.7846 139.18 22.9148C138.851 23.0426 138.475 23.1065 138.051 23.1065Z\" fill=\"#403F3D\"/>\r\n                    <path class=\"mobile-app_path\" d=\"M66.642 46H64.392L68.4886 34.3636H71.0909L75.1932 46H72.9432L69.8352 36.75H69.7443L66.642 46ZM66.7159 41.4375H72.8523V43.1307H66.7159V41.4375ZM76.6349 49.2727V37.2727H78.6577V38.7159H78.777C78.883 38.5038 79.0327 38.2784 79.2259 38.0398C79.419 37.7973 79.6804 37.5909 80.0099 37.4205C80.3395 37.2462 80.7599 37.1591 81.2713 37.1591C81.9455 37.1591 82.5535 37.3314 83.0952 37.6761C83.6406 38.017 84.0724 38.5227 84.3906 39.1932C84.7126 39.8598 84.8736 40.678 84.8736 41.6477C84.8736 42.6061 84.7164 43.4205 84.402 44.0909C84.0876 44.7614 83.6596 45.2727 83.1179 45.625C82.5762 45.9773 81.9626 46.1534 81.277 46.1534C80.777 46.1534 80.3622 46.0701 80.0327 45.9034C79.7031 45.7367 79.438 45.536 79.2372 45.3011C79.0402 45.0625 78.8868 44.8371 78.777 44.625H78.6918V49.2727H76.6349ZM78.652 41.6364C78.652 42.2008 78.7315 42.6951 78.8906 43.1193C79.0535 43.5436 79.2865 43.875 79.5895 44.1136C79.8963 44.3485 80.2675 44.4659 80.7031 44.4659C81.1577 44.4659 81.5384 44.3447 81.8452 44.1023C82.152 43.8561 82.383 43.5208 82.5384 43.0966C82.6974 42.6686 82.777 42.1818 82.777 41.6364C82.777 41.0947 82.6993 40.6136 82.544 40.1932C82.3887 39.7727 82.1577 39.4432 81.8509 39.2045C81.544 38.9659 81.1615 38.8466 80.7031 38.8466C80.2637 38.8466 79.8906 38.9621 79.5838 39.1932C79.277 39.4242 79.044 39.7481 78.8849 40.1648C78.7296 40.5814 78.652 41.072 78.652 41.6364ZM86.6349 49.2727V37.2727H88.6577V38.7159H88.777C88.883 38.5038 89.0327 38.2784 89.2259 38.0398C89.419 37.7973 89.6804 37.5909 90.0099 37.4205C90.3395 37.2462 90.7599 37.1591 91.2713 37.1591C91.9455 37.1591 92.5535 37.3314 93.0952 37.6761C93.6406 38.017 94.0724 38.5227 94.3906 39.1932C94.7126 39.8598 94.8736 40.678 94.8736 41.6477C94.8736 42.6061 94.7164 43.4205 94.402 44.0909C94.0876 44.7614 93.6596 45.2727 93.1179 45.625C92.5762 45.9773 91.9626 46.1534 91.277 46.1534C90.777 46.1534 90.3622 46.0701 90.0327 45.9034C89.7031 45.7367 89.438 45.536 89.2372 45.3011C89.0402 45.0625 88.8868 44.8371 88.777 44.625H88.6918V49.2727H86.6349ZM88.652 41.6364C88.652 42.2008 88.7315 42.6951 88.8906 43.1193C89.0535 43.5436 89.2865 43.875 89.5895 44.1136C89.8963 44.3485 90.2675 44.4659 90.7031 44.4659C91.1577 44.4659 91.5384 44.3447 91.8452 44.1023C92.152 43.8561 92.383 43.5208 92.5384 43.0966C92.6974 42.6686 92.777 42.1818 92.777 41.6364C92.777 41.0947 92.6993 40.6136 92.544 40.1932C92.3887 39.7727 92.1577 39.4432 91.8509 39.2045C91.544 38.9659 91.1615 38.8466 90.7031 38.8466C90.2637 38.8466 89.8906 38.9621 89.5838 39.1932C89.277 39.4242 89.044 39.7481 88.8849 40.1648C88.7296 40.5814 88.652 41.072 88.652 41.6364ZM107.018 37.5625C106.965 37.0663 106.742 36.6799 106.348 36.4034C105.958 36.1269 105.45 35.9886 104.825 35.9886C104.386 35.9886 104.009 36.0549 103.695 36.1875C103.38 36.3201 103.14 36.5 102.973 36.7273C102.806 36.9545 102.721 37.214 102.717 37.5057C102.717 37.7481 102.772 37.9583 102.882 38.1364C102.996 38.3144 103.149 38.4659 103.342 38.5909C103.536 38.7121 103.75 38.8144 103.984 38.8977C104.219 38.9811 104.456 39.0511 104.695 39.108L105.786 39.3807C106.225 39.483 106.647 39.6212 107.053 39.7955C107.462 39.9697 107.827 40.1894 108.149 40.4545C108.475 40.7197 108.732 41.0398 108.922 41.4148C109.111 41.7898 109.206 42.2292 109.206 42.733C109.206 43.4148 109.032 44.0152 108.683 44.5341C108.335 45.0492 107.831 45.4527 107.172 45.7443C106.517 46.0322 105.723 46.1761 104.791 46.1761C103.886 46.1761 103.1 46.036 102.433 45.7557C101.77 45.4754 101.251 45.0663 100.876 44.5284C100.505 43.9905 100.304 43.3352 100.274 42.5625H102.348C102.378 42.9678 102.503 43.3049 102.723 43.5739C102.943 43.8428 103.229 44.0436 103.581 44.1761C103.937 44.3087 104.335 44.375 104.774 44.375C105.232 44.375 105.634 44.3068 105.979 44.1705C106.327 44.0303 106.6 43.8371 106.797 43.5909C106.994 43.3409 107.094 43.0492 107.098 42.7159C107.094 42.4129 107.005 42.1629 106.831 41.9659C106.657 41.7652 106.412 41.5985 106.098 41.4659C105.787 41.3295 105.424 41.2083 105.007 41.1023L103.683 40.7614C102.725 40.5152 101.967 40.142 101.411 39.642C100.857 39.1383 100.581 38.4697 100.581 37.6364C100.581 36.9508 100.767 36.3504 101.138 35.8352C101.513 35.3201 102.022 34.9205 102.666 34.6364C103.31 34.3485 104.039 34.2045 104.854 34.2045C105.679 34.2045 106.403 34.3485 107.024 34.6364C107.649 34.9205 108.14 35.3163 108.496 35.8239C108.852 36.3277 109.036 36.9072 109.047 37.5625H107.018ZM115.352 37.2727V38.8636H110.335V37.2727H115.352ZM111.574 35.1818H113.631V43.375C113.631 43.6515 113.672 43.8636 113.756 44.0114C113.843 44.1553 113.956 44.2538 114.097 44.3068C114.237 44.3598 114.392 44.3864 114.562 44.3864C114.691 44.3864 114.809 44.3769 114.915 44.358C115.025 44.339 115.108 44.322 115.165 44.3068L115.511 45.9148C115.402 45.9527 115.244 45.9943 115.04 46.0398C114.839 46.0852 114.593 46.1117 114.301 46.1193C113.786 46.1345 113.322 46.0568 112.909 45.8864C112.496 45.7121 112.169 45.4432 111.926 45.0795C111.688 44.7159 111.57 44.2614 111.574 43.7159V35.1818ZM120.786 46.1705C119.933 46.1705 119.195 45.983 118.57 45.608C117.945 45.233 117.46 44.7083 117.115 44.0341C116.774 43.3598 116.604 42.572 116.604 41.6705C116.604 40.7689 116.774 39.9792 117.115 39.3011C117.46 38.6231 117.945 38.0966 118.57 37.7216C119.195 37.3466 119.933 37.1591 120.786 37.1591C121.638 37.1591 122.376 37.3466 123.001 37.7216C123.626 38.0966 124.109 38.6231 124.45 39.3011C124.795 39.9792 124.967 40.7689 124.967 41.6705C124.967 42.572 124.795 43.3598 124.45 44.0341C124.109 44.7083 123.626 45.233 123.001 45.608C122.376 45.983 121.638 46.1705 120.786 46.1705ZM120.797 44.5227C121.259 44.5227 121.645 44.3958 121.956 44.142C122.267 43.8845 122.498 43.5398 122.649 43.108C122.804 42.6761 122.882 42.1951 122.882 41.6648C122.882 41.1307 122.804 40.6477 122.649 40.2159C122.498 39.7803 122.267 39.4337 121.956 39.1761C121.645 38.9186 121.259 38.7898 120.797 38.7898C120.323 38.7898 119.929 38.9186 119.615 39.1761C119.304 39.4337 119.071 39.7803 118.916 40.2159C118.765 40.6477 118.689 41.1307 118.689 41.6648C118.689 42.1951 118.765 42.6761 118.916 43.108C119.071 43.5398 119.304 43.8845 119.615 44.142C119.929 44.3958 120.323 44.5227 120.797 44.5227ZM126.713 46V37.2727H128.707V38.7273H128.798C128.957 38.2235 129.23 37.8352 129.616 37.5625C130.007 37.286 130.452 37.1477 130.952 37.1477C131.065 37.1477 131.192 37.1534 131.332 37.1648C131.476 37.1723 131.596 37.1856 131.69 37.2045V39.0966C131.603 39.0663 131.465 39.0398 131.276 39.017C131.09 38.9905 130.91 38.9773 130.736 38.9773C130.361 38.9773 130.024 39.0587 129.724 39.2216C129.429 39.3807 129.196 39.6023 129.026 39.8864C128.855 40.1705 128.77 40.4981 128.77 40.8693V46H126.713ZM136.561 46.1705C135.686 46.1705 134.93 45.9886 134.294 45.625C133.661 45.2576 133.175 44.7386 132.834 44.0682C132.493 43.3939 132.322 42.6004 132.322 41.6875C132.322 40.7898 132.493 40.0019 132.834 39.3239C133.179 38.642 133.66 38.1117 134.277 37.733C134.894 37.3504 135.62 37.1591 136.453 37.1591C136.991 37.1591 137.499 37.2462 137.976 37.4205C138.457 37.5909 138.881 37.8561 139.249 38.2159C139.62 38.5758 139.911 39.0341 140.124 39.5909C140.336 40.1439 140.442 40.803 140.442 41.5682V42.1989H133.288V40.8125H138.47C138.466 40.4186 138.381 40.0682 138.214 39.7614C138.048 39.4508 137.815 39.2064 137.516 39.0284C137.22 38.8504 136.875 38.7614 136.482 38.7614C136.061 38.7614 135.692 38.8636 135.374 39.0682C135.055 39.2689 134.807 39.5341 134.629 39.8636C134.455 40.1894 134.366 40.5473 134.362 40.9375V42.1477C134.362 42.6553 134.455 43.0909 134.641 43.4545C134.826 43.8144 135.086 44.0909 135.419 44.2841C135.752 44.4735 136.143 44.5682 136.589 44.5682C136.889 44.5682 137.16 44.5265 137.402 44.4432C137.644 44.3561 137.855 44.2292 138.033 44.0625C138.211 43.8958 138.345 43.6894 138.436 43.4432L140.357 43.6591C140.235 44.1667 140.004 44.6098 139.663 44.9886C139.326 45.3636 138.894 45.6553 138.368 45.8636C137.841 46.0682 137.239 46.1705 136.561 46.1705Z\" fill=\"#403F3D\"/>\r\n                  </svg>\r\n                </div>\r\n                <div class=\"mobile-app__button\">\r\n                  <svg class=\"mobile-app_bg\" width=\"200\" height=\"64\" viewBox=\"0 0 200 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect x=\"0.5\" y=\"0.5\" width=\"199\" height=\"63\" rx=\"31.5\" stroke=\"#665F55\"/>\r\n                    <path class=\"mobile-app_path\" d=\"M23.7558 17.203C23.3933 17.5729 23.1836 18.1488 23.1836 18.8947V45.4994C23.1836 46.2453 23.3933 46.8212 23.7558 47.1911L23.8453 47.2723L39.1359 32.37V32.0181L23.8453 17.1158L23.7558 17.203Z\" fill=\"#403F3D\"/>\r\n                    <path class=\"mobile-app_path\" d=\"M46.0776 37.34L40.9863 32.37V32.0181L46.0837 27.0482L46.1979 27.1128L52.2345 30.4617C53.9573 31.4121 53.9573 32.976 52.2345 33.9324L46.1979 37.2753L46.0776 37.34Z\" fill=\"#403F3D\"/>\r\n                    <path class=\"mobile-app_path\" d=\"M45.2733 38.2007L40.0617 33.1195L24.6816 48.1166C25.2538 48.7031 26.187 48.7737 27.2481 48.1873L45.2733 38.2007Z\" fill=\"#403F3D\"/>\r\n                    <path class=\"mobile-app_path\" d=\"M45.2733 26.1876L27.2481 16.201C26.187 15.6206 25.2538 15.6913 24.6816 16.2777L40.0617 31.2688L45.2733 26.1876Z\" fill=\"#403F3D\"/>\r\n                    <path class=\"mobile-app_path\" d=\"M65.9765 23H64.5702L67.1306 15.7273H68.757L71.3209 23H69.9147L67.9722 17.2188H67.9154L65.9765 23ZM66.0226 20.1484H69.8579V21.2067H66.0226V20.1484ZM76.4106 17.5455L74.4681 23H73.0477L71.1052 17.5455H72.4759L73.7295 21.5973H73.7863L75.0434 17.5455H76.4106ZM78.7135 23.1101C78.3679 23.1101 78.0566 23.0485 77.7796 22.9254C77.5049 22.8 77.2871 22.6153 77.1262 22.3714C76.9675 22.1276 76.8882 21.8269 76.8882 21.4695C76.8882 21.1617 76.945 20.9072 77.0587 20.706C77.1723 20.5047 77.3274 20.3438 77.5239 20.223C77.7204 20.1023 77.9417 20.0111 78.1879 19.9496C78.4365 19.8857 78.6934 19.8395 78.9585 19.8111C79.2781 19.7779 79.5374 19.7483 79.7362 19.7223C79.9351 19.6939 80.0795 19.6513 80.1695 19.5945C80.2618 19.5353 80.308 19.4441 80.308 19.321V19.2997C80.308 19.0322 80.2287 18.825 80.07 18.6783C79.9114 18.5315 79.683 18.4581 79.3847 18.4581C79.0698 18.4581 78.82 18.5268 78.6354 18.6641C78.4531 18.8014 78.33 18.9635 78.2661 19.1506L77.0658 18.9801C77.1605 18.6487 77.3167 18.3717 77.5345 18.1491C77.7523 17.9242 78.0187 17.7562 78.3335 17.6449C78.6484 17.5312 78.9964 17.4744 79.3776 17.4744C79.6404 17.4744 79.902 17.5052 80.1624 17.5668C80.4228 17.6283 80.6607 17.7301 80.8762 17.8722C81.0916 18.0118 81.2644 18.2024 81.3946 18.4439C81.5272 18.6854 81.5935 18.9872 81.5935 19.3494V23H80.3577V22.2507H80.3151C80.2369 22.4022 80.1269 22.5443 79.9848 22.6768C79.8451 22.8071 79.6688 22.9124 79.4557 22.9929C79.245 23.071 78.9976 23.1101 78.7135 23.1101ZM79.0473 22.1655C79.3054 22.1655 79.5291 22.1146 79.7185 22.0128C79.9079 21.9086 80.0535 21.7713 80.1553 21.6009C80.2594 21.4304 80.3115 21.2446 80.3115 21.0433V20.4006C80.2713 20.4337 80.2026 20.4645 80.1056 20.4929C80.0109 20.5213 79.9043 20.5462 79.786 20.5675C79.6676 20.5888 79.5504 20.6077 79.4344 20.6243C79.3184 20.6409 79.2178 20.6551 79.1325 20.6669C78.9408 20.6929 78.7691 20.7356 78.6176 20.7947C78.4661 20.8539 78.3466 20.9368 78.259 21.0433C78.1714 21.1475 78.1276 21.2824 78.1276 21.4482C78.1276 21.6849 78.214 21.8636 78.3868 21.9844C78.5596 22.1051 78.7798 22.1655 79.0473 22.1655ZM82.8861 23V17.5455H84.1716V23H82.8861ZM83.5324 16.7713C83.3288 16.7713 83.1536 16.7038 83.0068 16.5689C82.8601 16.4316 82.7867 16.267 82.7867 16.0753C82.7867 15.8812 82.8601 15.7166 83.0068 15.5817C83.1536 15.4444 83.3288 15.3757 83.5324 15.3757C83.7384 15.3757 83.9136 15.4444 84.058 15.5817C84.2048 15.7166 84.2781 15.8812 84.2781 16.0753C84.2781 16.267 84.2048 16.4316 84.058 16.5689C83.9136 16.7038 83.7384 16.7713 83.5324 16.7713ZM86.779 15.7273V23H85.4935V15.7273H86.779ZM89.6705 23.1101C89.3249 23.1101 89.0136 23.0485 88.7366 22.9254C88.462 22.8 88.2442 22.6153 88.0832 22.3714C87.9246 22.1276 87.8453 21.8269 87.8453 21.4695C87.8453 21.1617 87.9021 20.9072 88.0157 20.706C88.1294 20.5047 88.2844 20.3438 88.4809 20.223C88.6774 20.1023 88.8988 20.0111 89.145 19.9496C89.3936 19.8857 89.6504 19.8395 89.9156 19.8111C90.2352 19.7779 90.4944 19.7483 90.6933 19.7223C90.8921 19.6939 91.0365 19.6513 91.1265 19.5945C91.2188 19.5353 91.265 19.4441 91.265 19.321V19.2997C91.265 19.0322 91.1857 18.825 91.0271 18.6783C90.8685 18.5315 90.64 18.4581 90.3417 18.4581C90.0268 18.4581 89.7771 18.5268 89.5924 18.6641C89.4101 18.8014 89.287 18.9635 89.2231 19.1506L88.0228 18.9801C88.1175 18.6487 88.2738 18.3717 88.4916 18.1491C88.7094 17.9242 88.9757 17.7562 89.2906 17.6449C89.6054 17.5312 89.9535 17.4744 90.3346 17.4744C90.5974 17.4744 90.859 17.5052 91.1194 17.5668C91.3798 17.6283 91.6177 17.7301 91.8332 17.8722C92.0486 18.0118 92.2214 18.2024 92.3517 18.4439C92.4842 18.6854 92.5505 18.9872 92.5505 19.3494V23H91.3147V22.2507H91.2721C91.194 22.4022 91.0839 22.5443 90.9419 22.6768C90.8022 22.8071 90.6258 22.9124 90.4127 22.9929C90.202 23.071 89.9546 23.1101 89.6705 23.1101ZM90.0044 22.1655C90.2624 22.1655 90.4861 22.1146 90.6755 22.0128C90.8649 21.9086 91.0105 21.7713 91.1123 21.6009C91.2165 21.4304 91.2686 21.2446 91.2686 21.0433V20.4006C91.2283 20.4337 91.1597 20.4645 91.0626 20.4929C90.9679 20.5213 90.8614 20.5462 90.743 20.5675C90.6246 20.5888 90.5074 20.6077 90.3914 20.6243C90.2754 20.6409 90.1748 20.6551 90.0896 20.6669C89.8978 20.6929 89.7262 20.7356 89.5747 20.7947C89.4231 20.8539 89.3036 20.9368 89.216 21.0433C89.1284 21.1475 89.0846 21.2824 89.0846 21.4482C89.0846 21.6849 89.171 21.8636 89.3438 21.9844C89.5167 22.1051 89.7368 22.1655 90.0044 22.1655ZM93.8999 23V15.7273H95.1855V18.4474H95.2387C95.305 18.3149 95.3985 18.174 95.5193 18.0249C95.64 17.8733 95.8034 17.7443 96.0093 17.6378C96.2153 17.5289 96.4781 17.4744 96.7977 17.4744C97.2191 17.4744 97.599 17.5821 97.9376 17.7976C98.2785 18.0107 98.5484 18.3267 98.7472 18.7457C98.9485 19.1624 99.0491 19.6738 99.0491 20.2798C99.0491 20.8788 98.9508 21.3878 98.7544 21.8068C98.5579 22.2259 98.2903 22.5455 97.9518 22.7656C97.6133 22.9858 97.2297 23.0959 96.8012 23.0959C96.4887 23.0959 96.2295 23.0438 96.0235 22.9396C95.8176 22.8355 95.6518 22.71 95.5264 22.5632C95.4033 22.4141 95.3074 22.2732 95.2387 22.1406H95.1642V23H93.8999ZM95.1606 20.2727C95.1606 20.6255 95.2103 20.9344 95.3097 21.1996C95.4115 21.4647 95.5571 21.6719 95.7465 21.821C95.9383 21.9678 96.1703 22.0412 96.4426 22.0412C96.7267 22.0412 96.9646 21.9654 97.1563 21.8139C97.3481 21.66 97.4925 21.4505 97.5896 21.1854C97.689 20.9179 97.7387 20.6136 97.7387 20.2727C97.7387 19.9342 97.6902 19.6335 97.5931 19.3707C97.4961 19.108 97.3517 18.902 97.1599 18.7528C96.9681 18.6037 96.729 18.5291 96.4426 18.5291C96.1679 18.5291 95.9347 18.6013 95.743 18.7457C95.5512 18.8902 95.4056 19.0926 95.3062 19.353C95.2091 19.6134 95.1606 19.92 95.1606 20.2727ZM101.427 15.7273V23H100.142V15.7273H101.427ZM105.164 23.1065C104.617 23.1065 104.145 22.9929 103.747 22.7656C103.352 22.536 103.048 22.2116 102.835 21.7926C102.622 21.3712 102.515 20.8752 102.515 20.3047C102.515 19.7436 102.622 19.2512 102.835 18.8274C103.05 18.4013 103.351 18.0698 103.737 17.8331C104.122 17.594 104.576 17.4744 105.097 17.4744C105.433 17.4744 105.75 17.5289 106.048 17.6378C106.349 17.7443 106.614 17.91 106.844 18.1349C107.076 18.3598 107.258 18.6463 107.391 18.9943C107.523 19.34 107.59 19.7519 107.59 20.2301V20.6243H103.119V19.7578H106.357C106.355 19.5116 106.302 19.2926 106.198 19.1009C106.093 18.9067 105.948 18.754 105.761 18.6428C105.576 18.5315 105.361 18.4759 105.114 18.4759C104.852 18.4759 104.621 18.5398 104.422 18.6676C104.223 18.7931 104.068 18.9588 103.957 19.1648C103.848 19.3684 103.792 19.5921 103.79 19.8359V20.5923C103.79 20.9096 103.848 21.1818 103.964 21.4091C104.08 21.634 104.242 21.8068 104.45 21.9276C104.659 22.0459 104.903 22.1051 105.182 22.1051C105.369 22.1051 105.538 22.0791 105.69 22.027C105.841 21.9725 105.973 21.8932 106.084 21.7891C106.195 21.6849 106.279 21.5559 106.336 21.402L107.536 21.5369C107.461 21.8542 107.316 22.1312 107.103 22.3679C106.892 22.6023 106.622 22.7846 106.293 22.9148C105.964 23.0426 105.588 23.1065 105.164 23.1065ZM113.537 23.1065C113.004 23.1065 112.543 22.9893 112.152 22.755C111.761 22.5206 111.458 22.1927 111.243 21.7713C111.03 21.3499 110.923 20.8575 110.923 20.294C110.923 19.7306 111.03 19.237 111.243 18.8132C111.458 18.3894 111.761 18.0604 112.152 17.826C112.543 17.5916 113.004 17.4744 113.537 17.4744C114.07 17.4744 114.531 17.5916 114.922 17.826C115.312 18.0604 115.614 18.3894 115.827 18.8132C116.043 19.237 116.15 19.7306 116.15 20.294C116.15 20.8575 116.043 21.3499 115.827 21.7713C115.614 22.1927 115.312 22.5206 114.922 22.755C114.531 22.9893 114.07 23.1065 113.537 23.1065ZM113.544 22.0767C113.833 22.0767 114.074 21.9974 114.268 21.8388C114.463 21.6778 114.607 21.4624 114.702 21.1925C114.799 20.9226 114.847 20.6219 114.847 20.2905C114.847 19.9567 114.799 19.6548 114.702 19.3849C114.607 19.1127 114.463 18.8961 114.268 18.7351C114.074 18.5741 113.833 18.4936 113.544 18.4936C113.248 18.4936 113.002 18.5741 112.805 18.7351C112.611 18.8961 112.466 19.1127 112.369 19.3849C112.274 19.6548 112.226 19.9567 112.226 20.2905C112.226 20.6219 112.274 20.9226 112.369 21.1925C112.466 21.4624 112.611 21.6778 112.805 21.8388C113.002 21.9974 113.248 22.0767 113.544 22.0767ZM118.527 19.804V23H117.242V17.5455H118.47V18.4723H118.534C118.66 18.1669 118.86 17.9242 119.134 17.7443C119.411 17.5644 119.753 17.4744 120.161 17.4744C120.537 17.4744 120.865 17.5549 121.144 17.7159C121.426 17.8769 121.644 18.1101 121.798 18.4155C121.954 18.7209 122.031 19.0914 122.028 19.527V23H120.743V19.7259C120.743 19.3613 120.648 19.076 120.459 18.87C120.272 18.6641 120.013 18.5611 119.681 18.5611C119.456 18.5611 119.256 18.6108 119.081 18.7102C118.908 18.8073 118.772 18.9482 118.673 19.1328C118.576 19.3175 118.527 19.5412 118.527 19.804Z\" fill=\"#403F3D\"/>\r\n                    <path class=\"mobile-app_path\" d=\"M72.9432 38.0795C72.8485 37.7727 72.7178 37.4981 72.5511 37.2557C72.3883 37.0095 72.1913 36.7992 71.9602 36.625C71.733 36.4508 71.4716 36.3201 71.1761 36.233C70.8807 36.142 70.5587 36.0966 70.2102 36.0966C69.5852 36.0966 69.0284 36.2538 68.5398 36.5682C68.0511 36.8826 67.6667 37.3447 67.3864 37.9545C67.1098 38.5606 66.9716 39.2992 66.9716 40.1705C66.9716 41.0492 67.1098 41.7936 67.3864 42.4034C67.6629 43.0133 68.0473 43.4773 68.5398 43.7955C69.0322 44.1098 69.6042 44.267 70.2557 44.267C70.8466 44.267 71.358 44.1534 71.7898 43.9261C72.2254 43.6989 72.5606 43.3769 72.7955 42.9602C73.0303 42.5398 73.1477 42.0473 73.1477 41.483L73.625 41.5568H70.4659V39.9091H75.1875V41.3068C75.1875 42.303 74.9754 43.1648 74.5511 43.892C74.1269 44.6193 73.5436 45.1799 72.8011 45.5739C72.0587 45.964 71.2064 46.1591 70.2443 46.1591C69.1723 46.1591 68.2311 45.9186 67.4205 45.4375C66.6136 44.9527 65.983 44.2652 65.5284 43.375C65.0777 42.4811 64.8523 41.4205 64.8523 40.1932C64.8523 39.2538 64.9848 38.4148 65.25 37.6761C65.5189 36.9375 65.8939 36.3106 66.375 35.7955C66.8561 35.2765 67.4205 34.8826 68.0682 34.6136C68.7159 34.3409 69.4205 34.2045 70.1818 34.2045C70.8258 34.2045 71.4261 34.2992 71.983 34.4886C72.5398 34.6742 73.0341 34.9394 73.4659 35.2841C73.9015 35.6288 74.2595 36.0379 74.5398 36.5114C74.8201 36.9848 75.0038 37.5076 75.0909 38.0795H72.9432ZM80.9418 46.1705C80.0895 46.1705 79.3509 45.983 78.7259 45.608C78.1009 45.233 77.616 44.7083 77.2713 44.0341C76.9304 43.3598 76.7599 42.572 76.7599 41.6705C76.7599 40.7689 76.9304 39.9792 77.2713 39.3011C77.616 38.6231 78.1009 38.0966 78.7259 37.7216C79.3509 37.3466 80.0895 37.1591 80.9418 37.1591C81.794 37.1591 82.5327 37.3466 83.1577 37.7216C83.7827 38.0966 84.2656 38.6231 84.6065 39.3011C84.9512 39.9792 85.1236 40.7689 85.1236 41.6705C85.1236 42.572 84.9512 43.3598 84.6065 44.0341C84.2656 44.7083 83.7827 45.233 83.1577 45.608C82.5327 45.983 81.794 46.1705 80.9418 46.1705ZM80.9531 44.5227C81.4152 44.5227 81.8016 44.3958 82.1122 44.142C82.4228 43.8845 82.6539 43.5398 82.8054 43.108C82.9607 42.6761 83.0384 42.1951 83.0384 41.6648C83.0384 41.1307 82.9607 40.6477 82.8054 40.2159C82.6539 39.7803 82.4228 39.4337 82.1122 39.1761C81.8016 38.9186 81.4152 38.7898 80.9531 38.7898C80.4796 38.7898 80.0857 38.9186 79.7713 39.1761C79.4607 39.4337 79.2277 39.7803 79.0724 40.2159C78.9209 40.6477 78.8452 41.1307 78.8452 41.6648C78.8452 42.1951 78.9209 42.6761 79.0724 43.108C79.2277 43.5398 79.4607 43.8845 79.7713 44.142C80.0857 44.3958 80.4796 44.5227 80.9531 44.5227ZM90.6761 46.1705C89.8239 46.1705 89.0852 45.983 88.4602 45.608C87.8352 45.233 87.3504 44.7083 87.0057 44.0341C86.6648 43.3598 86.4943 42.572 86.4943 41.6705C86.4943 40.7689 86.6648 39.9792 87.0057 39.3011C87.3504 38.6231 87.8352 38.0966 88.4602 37.7216C89.0852 37.3466 89.8239 37.1591 90.6761 37.1591C91.5284 37.1591 92.267 37.3466 92.892 37.7216C93.517 38.0966 94 38.6231 94.3409 39.3011C94.6856 39.9792 94.858 40.7689 94.858 41.6705C94.858 42.572 94.6856 43.3598 94.3409 44.0341C94 44.7083 93.517 45.233 92.892 45.608C92.267 45.983 91.5284 46.1705 90.6761 46.1705ZM90.6875 44.5227C91.1496 44.5227 91.536 44.3958 91.8466 44.142C92.1572 43.8845 92.3883 43.5398 92.5398 43.108C92.6951 42.6761 92.7727 42.1951 92.7727 41.6648C92.7727 41.1307 92.6951 40.6477 92.5398 40.2159C92.3883 39.7803 92.1572 39.4337 91.8466 39.1761C91.536 38.9186 91.1496 38.7898 90.6875 38.7898C90.214 38.7898 89.8201 38.9186 89.5057 39.1761C89.1951 39.4337 88.9621 39.7803 88.8068 40.2159C88.6553 40.6477 88.5795 41.1307 88.5795 41.6648C88.5795 42.1951 88.6553 42.6761 88.8068 43.108C88.9621 43.5398 89.1951 43.8845 89.5057 44.142C89.8201 44.3958 90.214 44.5227 90.6875 44.5227ZM100.399 49.4545C99.6605 49.4545 99.026 49.3542 98.4957 49.1534C97.9654 48.9564 97.5393 48.6913 97.2173 48.358C96.8954 48.0246 96.6719 47.6553 96.5469 47.25L98.3991 46.8011C98.4825 46.9716 98.6037 47.1402 98.7628 47.3068C98.9219 47.4773 99.1359 47.6174 99.4048 47.7273C99.6776 47.8409 100.02 47.8977 100.433 47.8977C101.017 47.8977 101.5 47.7557 101.882 47.4716C102.265 47.1913 102.456 46.7292 102.456 46.0852V44.4318H102.354C102.248 44.6439 102.092 44.8617 101.888 45.0852C101.687 45.3087 101.42 45.4962 101.087 45.6477C100.757 45.7992 100.342 45.875 99.8423 45.875C99.1719 45.875 98.5639 45.7178 98.0185 45.4034C97.4768 45.0852 97.045 44.6117 96.723 43.983C96.4048 43.3504 96.2457 42.5587 96.2457 41.608C96.2457 40.6496 96.4048 39.8409 96.723 39.1818C97.045 38.5189 97.4787 38.017 98.0241 37.6761C98.5696 37.3314 99.1776 37.1591 99.848 37.1591C100.359 37.1591 100.78 37.2462 101.109 37.4205C101.443 37.5909 101.708 37.7973 101.905 38.0398C102.102 38.2784 102.251 38.5038 102.354 38.7159H102.467V37.2727H104.496V46.142C104.496 46.8883 104.318 47.5057 103.962 47.9943C103.606 48.483 103.119 48.8485 102.501 49.0909C101.884 49.3333 101.183 49.4545 100.399 49.4545ZM100.416 44.2614C100.852 44.2614 101.223 44.1553 101.53 43.9432C101.837 43.7311 102.07 43.4261 102.229 43.0284C102.388 42.6307 102.467 42.1534 102.467 41.5966C102.467 41.0473 102.388 40.5663 102.229 40.1534C102.073 39.7405 101.842 39.4205 101.536 39.1932C101.232 38.9621 100.859 38.8466 100.416 38.8466C99.9579 38.8466 99.5753 38.9659 99.2685 39.2045C98.9616 39.4432 98.7306 39.7708 98.5753 40.1875C98.42 40.6004 98.3423 41.0701 98.3423 41.5966C98.3423 42.1307 98.42 42.5985 98.5753 43C98.7344 43.3977 98.9673 43.7083 99.2741 43.9318C99.5848 44.1515 99.9654 44.2614 100.416 44.2614ZM108.661 34.3636V46H106.604V34.3636H108.661ZM114.639 46.1705C113.764 46.1705 113.009 45.9886 112.372 45.625C111.74 45.2576 111.253 44.7386 110.912 44.0682C110.571 43.3939 110.401 42.6004 110.401 41.6875C110.401 40.7898 110.571 40.0019 110.912 39.3239C111.257 38.642 111.738 38.1117 112.355 37.733C112.973 37.3504 113.698 37.1591 114.531 37.1591C115.069 37.1591 115.577 37.2462 116.054 37.4205C116.535 37.5909 116.959 37.8561 117.327 38.2159C117.698 38.5758 117.99 39.0341 118.202 39.5909C118.414 40.1439 118.52 40.803 118.52 41.5682V42.1989H111.366V40.8125H116.548C116.545 40.4186 116.459 40.0682 116.293 39.7614C116.126 39.4508 115.893 39.2064 115.594 39.0284C115.298 38.8504 114.954 38.7614 114.56 38.7614C114.139 38.7614 113.77 38.8636 113.452 39.0682C113.134 39.2689 112.885 39.5341 112.707 39.8636C112.533 40.1894 112.444 40.5473 112.44 40.9375V42.1477C112.44 42.6553 112.533 43.0909 112.719 43.4545C112.904 43.8144 113.164 44.0909 113.497 44.2841C113.83 44.4735 114.221 44.5682 114.668 44.5682C114.967 44.5682 115.238 44.5265 115.48 44.4432C115.723 44.3561 115.933 44.2292 116.111 44.0625C116.289 43.8958 116.423 43.6894 116.514 43.4432L118.435 43.6591C118.313 44.1667 118.082 44.6098 117.741 44.9886C117.404 45.3636 116.973 45.6553 116.446 45.8636C115.92 46.0682 115.317 46.1705 114.639 46.1705ZM124.32 46V34.3636H128.683C129.577 34.3636 130.327 34.5303 130.933 34.8636C131.543 35.197 132.003 35.6553 132.314 36.2386C132.628 36.8182 132.786 37.4773 132.786 38.2159C132.786 38.9621 132.628 39.625 132.314 40.2045C132 40.7841 131.536 41.2405 130.922 41.5739C130.308 41.9034 129.553 42.0682 128.655 42.0682H125.763V40.3352H128.371C128.893 40.3352 129.321 40.2443 129.655 40.0625C129.988 39.8807 130.234 39.6307 130.393 39.3125C130.556 38.9943 130.638 38.6288 130.638 38.2159C130.638 37.803 130.556 37.4394 130.393 37.125C130.234 36.8106 129.986 36.5663 129.649 36.392C129.316 36.214 128.886 36.125 128.359 36.125H126.428V46H124.32ZM136.582 34.3636V46H134.526V34.3636H136.582ZM141.209 46.1761C140.656 46.1761 140.158 46.0777 139.714 45.8807C139.275 45.6799 138.927 45.3845 138.669 44.9943C138.415 44.6042 138.288 44.1231 138.288 43.5511C138.288 43.0587 138.379 42.6515 138.561 42.3295C138.743 42.0076 138.991 41.75 139.305 41.5568C139.62 41.3636 139.974 41.2178 140.368 41.1193C140.766 41.017 141.177 40.9432 141.601 40.8977C142.112 40.8447 142.527 40.7973 142.845 40.7557C143.163 40.7102 143.394 40.642 143.538 40.5511C143.686 40.4564 143.76 40.3106 143.76 40.1136V40.0795C143.76 39.6515 143.633 39.3201 143.379 39.0852C143.125 38.8504 142.76 38.733 142.283 38.733C141.779 38.733 141.379 38.8428 141.084 39.0625C140.792 39.2822 140.595 39.5417 140.493 39.8409L138.572 39.5682C138.724 39.0379 138.974 38.5947 139.322 38.2386C139.671 37.8788 140.097 37.6098 140.601 37.4318C141.105 37.25 141.661 37.1591 142.271 37.1591C142.692 37.1591 143.11 37.2083 143.527 37.3068C143.944 37.4053 144.324 37.5682 144.669 37.7955C145.014 38.0189 145.29 38.3239 145.499 38.7102C145.711 39.0966 145.817 39.5795 145.817 40.1591V46H143.839V44.8011H143.771C143.646 45.0436 143.47 45.2708 143.243 45.483C143.019 45.6913 142.737 45.8598 142.396 45.9886C142.059 46.1136 141.663 46.1761 141.209 46.1761ZM141.743 44.6648C142.156 44.6648 142.514 44.5833 142.817 44.4205C143.12 44.2538 143.353 44.0341 143.516 43.7614C143.682 43.4886 143.766 43.1913 143.766 42.8693V41.8409C143.701 41.8939 143.591 41.9432 143.436 41.9886C143.285 42.0341 143.114 42.0739 142.925 42.108C142.735 42.142 142.548 42.1723 142.362 42.1989C142.177 42.2254 142.016 42.2481 141.879 42.267C141.572 42.3087 141.298 42.3769 141.055 42.4716C140.813 42.5663 140.622 42.6989 140.482 42.8693C140.341 43.036 140.271 43.2519 140.271 43.517C140.271 43.8958 140.41 44.1818 140.686 44.375C140.963 44.5682 141.315 44.6648 141.743 44.6648ZM148.851 49.2727C148.571 49.2727 148.311 49.25 148.072 49.2045C147.838 49.1629 147.65 49.1136 147.51 49.0568L147.987 47.4545C148.286 47.5417 148.554 47.5833 148.788 47.5795C149.023 47.5758 149.23 47.5019 149.408 47.358C149.589 47.2178 149.743 46.983 149.868 46.6534L150.044 46.1818L146.879 37.2727H149.061L151.072 43.8636H151.163L153.18 37.2727H155.368L151.874 47.0568C151.711 47.5189 151.495 47.9148 151.226 48.2443C150.957 48.5777 150.627 48.8314 150.237 49.0057C149.851 49.1837 149.389 49.2727 148.851 49.2727Z\" fill=\"#403F3D\"/>\r\n                    </svg>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mobile-app__col\">\r\n            <div class=\"mobile-app__picture\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"mobile screens\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <footer class=\"footer\" id=\"footer\">\r\n      <div class=\"wrapper\">\r\n        <div class=\"footer__container\">\r\n          <div class=\"footer__col\">\r\n            <div class=\"footer__content\">\r\n              <div class=\"footer__title title\">\r\n                <h2 class=\"title__text title__text_footer\">Sip, Savor, Smile. <span class=\"text-accent\">It’s coffee time!</span></h2>\r\n              </div>\r\n              <div class=\"footer__social social\">\r\n                <a href=\"#!\" class=\"social__button\">\r\n                  <svg class=\"social__button_btn\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/>\r\n                    <path class=\"social__button_path social__button_btn\" d=\"M41 21.0101C41 21.0101 38.9821 22.2022 37.86 22.5401C37.2577 21.8476 36.4573 21.3567 35.567 21.134C34.6767 20.9112 33.7395 20.9673 32.8821 21.2945C32.0247 21.6218 31.2884 22.2045 30.773 22.9638C30.2575 23.7231 29.9877 24.6224 30 25.5401V26.5401C28.2426 26.5856 26.5013 26.1959 24.931 25.4055C23.3607 24.6151 22.0103 23.4487 21 22.0101C21 22.0101 17 31.0101 26 35.0101C23.9405 36.408 21.4872 37.109 19 37.0101C28 42.0101 39 37.0101 39 25.5101C38.9991 25.2315 38.9723 24.9537 38.92 24.6801C39.9406 23.6735 41 21.0101 41 21.0101Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                </a>\r\n                <a href=\"#!\" class=\"social__button\">\r\n                  <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect class=\"social__button_btn\" x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/>\r\n                    <path class=\"social__button_path social__button_btn\" d=\"M30 34C32.2091 34 34 32.2091 34 30C34 27.7909 32.2091 26 30 26C27.7909 26 26 27.7909 26 30C26 32.2091 27.7909 34 30 34Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    <path class=\"social__button_path\" d=\"M21 34V26C21 23.2386 23.2386 21 26 21H34C36.7614 21 39 23.2386 39 26V34C39 36.7614 36.7614 39 34 39H26C23.2386 39 21 36.7614 21 34Z\" stroke=\"#E1D4C9\"/>\r\n                    <path class=\"social__button_path social__button_btn\" d=\"M35.5 24.51L35.51 24.4989\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                </a>\r\n                <a href=\"#!\" class=\"social__button\">\r\n                  <svg class=\"social__button_btn\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/>\r\n                    <path class=\"social__button_path social__button_btn\" d=\"M35 20H32C30.6739 20 29.4021 20.5268 28.4645 21.4645C27.5268 22.4021 27 23.6739 27 25V28H24V32H27V40H31V32H34L35 28H31V25C31 24.7348 31.1054 24.4804 31.2929 24.2929C31.4804 24.1054 31.7348 24 32 24H35V20Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"footer__col\">\r\n            <div class=\"footer__content\">\r\n              <div class=\"footer__contacts contacts\">\r\n                <div class=\"contacts__title\">\r\n                  <h3 id=\"contact-us\">Contact us</h3>\r\n                </div>\r\n                <ul class=\"contacts__list\">\r\n                  <li class=\"contacts__item  link link_contacts\">\r\n                    <a class=\"contacts__link\" href=\"https://maps.app.goo.gl/JvMWnb7fodqZK21DA\" target=\"_blank\">\r\n                      <i class=\"contacts__icon contacts__icon_geo\"></i>8558 Green Rd., LA\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"contacts__item  link link_contacts\">\r\n                    <a class=\"contacts__link\" href=\"tel:+16035550123\" target=\"_blank\">\r\n                      <i class=\"contacts__icon contacts__icon_phone\"></i>+1 (603) 555-0123\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"contacts__item\">\r\n                    <div class=\"contacts__link\">\r\n                      <i class=\"contacts__icon contacts__icon_open\"></i>Mon-Sat: 9:00 AM – 23:00 PM\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </main>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ var src = ((/* unused pure expression or super */ null && (code)));
// EXTERNAL MODULE: ./src/components/header/burger.js
var burger = __webpack_require__(949);
// EXTERNAL MODULE: ./src/components/favorite/slider.js
var slider = __webpack_require__(545);
;// CONCATENATED MODULE: ./src/app.js




console.log('48/90 доделаю до окончания кроссчека. Спасибо проверяющему! Удачи!');
}();
/******/ })()
;