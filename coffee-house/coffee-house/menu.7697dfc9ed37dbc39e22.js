/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ 483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/images/logo.svg";

/***/ }),

/***/ 606:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/cc9a450e87de971dbe21.ico";

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
/******/ 			860: 0
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
;// CONCATENATED MODULE: ./src/pages/menu/menu.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(606), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(483), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\r\n  <title>Coffee Menu</title>\r\n</head>\r\n<body>\r\n  <header class=\"header\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"header__header-container header-container\">\r\n        <div class=\"logo\">\r\n          <a href=\"../index.html\" class=\"logo__link\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Logo\" class=\"log__img\">\r\n          </a>\r\n        </div>\r\n        <nav>\r\n          <ul class=\"header__menu menu\">\r\n            <li class=\"menu__item\"><a href=\"../index.html#favorite-coffee\" class=\"menu__link link\">Favorite coffee</a></li>\r\n            <li class=\"menu__item\"><a href=\"../index.html#about\" class=\"menu__link link\">About</a></li>\r\n            <li class=\"menu__item\"><a href=\"../index.html#mobile-app\" class=\"menu__link link\">Mobile app</a></li>\r\n            <li class=\"menu__item\"><a href=\"../index.html#contact-us\" class=\"menu__link link\">Contact us</a></li>\r\n          </ul>\r\n          <div class=\"burger\">\r\n            <div class=\"burger__burger-icon burger-icon\">\r\n              <div class=\"burger-icon__line burger-icon__line_top\"></div>\r\n              <div class=\"burger-icon__line burger-icon__line_bottom\"></div>\r\n            </div>\r\n            <div class=\"burger__overlay\"></div>\r\n          </div>\r\n        </nav>\r\n        <div class=\"header__coffee-menu coffee-menu coffee-menu__link_unactive\">\r\n          <a href=\"/menu.html\" class=\"coffee-menu__link link\">\r\n            <p class=\"coffee-menu__text\">Menu</p>\r\n            <div class=\"coffee-menu__icon\"></div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <main class=\"main\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"coffe-menu\">\r\n        <div class=\"coffee-menu__title title title_coffee-menu\">\r\n          <h1 class=\"title__text title__text_coffee-menu\">Behind each of our cups hides an <span class=\"text-accent\">amazing surprise</span></h1>\r\n        </div>\r\n        <div class=\"coffee-menu__price price\">\r\n          <div class=\"price__tabs tabs\">\r\n            <div class=\"tabs__tab tab\">\r\n              <div class=\"tab__icon tab__icon_coffee\"></div>\r\n              <div class=\"tab__name\">Coffee</div>\r\n            </div>\r\n            <div class=\"tabs__tab tab\">\r\n              <div class=\"tab__icon tab__icon_tea\"></div>\r\n              <div class=\"tab__name\">Tea</div>\r\n            </div>\r\n            <div class=\"tabs__tab tab\">\r\n              <div class=\"tab__icon tab__icon_dessert\"></div>\r\n              <div class=\"tab__name\">Dessert</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"price__grid grid\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n  <footer class=\"footer\" id=\"footer\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"footer__container\">\r\n        <div class=\"footer__col\">\r\n          <div class=\"footer__content\">\r\n            <div class=\"footer__title title\">\r\n              <h2 class=\"title__text title__text_footer\">Sip, Savor, Smile. <span class=\"text-accent\">It’s coffee time!</span></h2>\r\n            </div>\r\n            <div class=\"footer__social social\">\r\n              <a href=\"#!\" class=\"social__button\">\r\n                <svg class=\"social__button_btn\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/>\r\n                  <path class=\"social__button_path social__button_btn\" d=\"M41 21.0101C41 21.0101 38.9821 22.2022 37.86 22.5401C37.2577 21.8476 36.4573 21.3567 35.567 21.134C34.6767 20.9112 33.7395 20.9673 32.8821 21.2945C32.0247 21.6218 31.2884 22.2045 30.773 22.9638C30.2575 23.7231 29.9877 24.6224 30 25.5401V26.5401C28.2426 26.5856 26.5013 26.1959 24.931 25.4055C23.3607 24.6151 22.0103 23.4487 21 22.0101C21 22.0101 17 31.0101 26 35.0101C23.9405 36.408 21.4872 37.109 19 37.0101C28 42.0101 39 37.0101 39 25.5101C38.9991 25.2315 38.9723 24.9537 38.92 24.6801C39.9406 23.6735 41 21.0101 41 21.0101Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                  </svg>\r\n              </a>\r\n              <a href=\"#!\" class=\"social__button\">\r\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <rect class=\"social__button_btn\" x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/>\r\n                  <path class=\"social__button_path social__button_btn\" d=\"M30 34C32.2091 34 34 32.2091 34 30C34 27.7909 32.2091 26 30 26C27.7909 26 26 27.7909 26 30C26 32.2091 27.7909 34 30 34Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                  <path class=\"social__button_path\" d=\"M21 34V26C21 23.2386 23.2386 21 26 21H34C36.7614 21 39 23.2386 39 26V34C39 36.7614 36.7614 39 34 39H26C23.2386 39 21 36.7614 21 34Z\" stroke=\"#E1D4C9\"/>\r\n                  <path class=\"social__button_path social__button_btn\" d=\"M35.5 24.51L35.51 24.4989\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                  </svg>\r\n              </a>\r\n              <a href=\"#!\" class=\"social__button\">\r\n                <svg class=\"social__button_btn\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/>\r\n                  <path class=\"social__button_path social__button_btn\" d=\"M35 20H32C30.6739 20 29.4021 20.5268 28.4645 21.4645C27.5268 22.4021 27 23.6739 27 25V28H24V32H27V40H31V32H34L35 28H31V25C31 24.7348 31.1054 24.4804 31.2929 24.2929C31.4804 24.1054 31.7348 24 32 24H35V20Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                  </svg>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer__col\">\r\n          <div class=\"footer__content\">\r\n            <div class=\"footer__contacts contacts\">\r\n              <div class=\"contacts__title\">\r\n                <h3 id=\"contact-us\">Contact us</h3>\r\n              </div>\r\n              <ul class=\"contacts__list\">\r\n                <li class=\"contacts__item  link link_contacts\">\r\n                  <a class=\"contacts__link\" href=\"https://maps.app.goo.gl/JvMWnb7fodqZK21DA\" target=\"_blank\">\r\n                    <i class=\"contacts__icon contacts__icon_geo\"></i>8558 Green Rd., LA\r\n                  </a>\r\n                </li>\r\n                <li class=\"contacts__item  link link_contacts\">\r\n                  <a class=\"contacts__link\" href=\"tel:+16035550123\" target=\"_blank\">\r\n                    <i class=\"contacts__icon contacts__icon_phone\"></i>+1 (603) 555-0123\r\n                  </a>\r\n                </li>\r\n                <li class=\"contacts__item\">\r\n                  <div class=\"contacts__link\">\r\n                    <i class=\"contacts__icon contacts__icon_open\"></i>Mon-Sat: 9:00 AM – 23:00 PM\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ var menu = ((/* unused pure expression or super */ null && (code)));
// EXTERNAL MODULE: ./src/components/header/burger.js
var burger = __webpack_require__(949);
;// CONCATENATED MODULE: ./src/components/menu/grid.js
class GridItem {
  constructor(_ref) {
    let {
      name,
      description,
      price,
      category,
      urlToImage,
      ...rest
    } = _ref;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.urlToImage = urlToImage;
  }
  generateItem() {
    let template = '';
    let item = document.createElement('div');
    item.className = 'grid__grid-item grid-item';
    item.setAttribute('data-category', this.category);
    template += `<div class="grid-item__picture-container picture-container">`;
    this.urlToImage && (template += `<img class="picture-container__picture" src="${this.urlToImage}" alt="${this.name}">`);
    template += `</div>`;
    template += `<div class="grid-item__grid-content grid-content">`;
    template += `<div class="grid-conent__container">`;
    this.name && (template += `<div class="grid-item__title">${this.name}</div>`);
    this.description && (template += `<p class="grid-item__description">${this.description}</p>`);
    template += `</div>`;
    this.description && (template += `<div class="grid-item__cost">$${this.price}</div>`);
    template += `</div>`;
    item.innerHTML = template;
    return item;
  }
}
;// CONCATENATED MODULE: ./src/components/menu/products.js
const products = [{
  "name": "Irish coffee",
  "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
  "price": "7.00",
  "category": "coffee",
  "urlToImage": "../assets/images/coffee-1.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Kahlua coffee",
  "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
  "price": "7.00",
  "category": "coffee",
  "urlToImage": "../assets/images/coffee-2.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Honey raf",
  "description": "Espresso with frothed milk, cream and aromatic honey",
  "price": "5.50",
  "category": "coffee",
  "urlToImage": "../assets/images/coffee-3.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Ice cappuccino",
  "description": "Cappuccino with soft thick foam in summer version with ice",
  "price": "5.00",
  "category": "coffee",
  "urlToImage": "../assets/images/coffee-4.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Espresso",
  "description": "Classic black coffee",
  "price": "4.50",
  "category": "coffee",
  "urlToImage": "../assets/images/coffee-5.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Latte",
  "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
  "price": "5.50",
  "category": "coffee",
  "urlToImage": "../assets/images/coffee-6.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Latte macchiato",
  "description": "Espresso with frothed milk and chocolate",
  "price": "5.50",
  "category": "coffee",
  "urlToImage": "../assets/images/coffee-7.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Coffee with cognac",
  "description": "Fragrant black coffee with cognac and whipped cream",
  "price": "6.50",
  "category": "coffee",
  "urlToImage": "../assets/images/coffee-8.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Cinnamon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Moroccan",
  "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
  "price": "4.50",
  "category": "tea",
  "urlToImage": "../assets/images/tea-1.jpg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Lemon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Ginger",
  "description": "Original black tea with fresh ginger, lemon and honey",
  "price": "5.00",
  "category": "tea",
  "urlToImage": "../assets/images/tea-2.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Lemon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Cranberry",
  "description": "Invigorating black tea with cranberry and honey",
  "price": "5.00",
  "category": "tea",
  "urlToImage": "../assets/images/tea-3.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Lemon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Sea buckthorn",
  "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
  "price": "5.50",
  "category": "tea",
  "urlToImage": "../assets/images/tea-4.jpeg",
  "sizes": {
    "s": {
      "size": "200 ml",
      "add-price": "0.00"
    },
    "m": {
      "size": "300 ml",
      "add-price": "0.50"
    },
    "l": {
      "size": "400 ml",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Sugar",
    "add-price": "0.50"
  }, {
    "name": "Lemon",
    "add-price": "0.50"
  }, {
    "name": "Syrup",
    "add-price": "0.50"
  }]
}, {
  "name": "Marble cheesecake",
  "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
  "price": "3.50",
  "category": "dessert",
  "urlToImage": "../assets/images/dessert-1.jpeg",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Red velvet",
  "description": "Layer cake with cream cheese frosting",
  "price": "4.00",
  "category": "dessert",
  "urlToImage": "../assets/images/dessert-2.jpeg",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Cheesecakes",
  "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
  "price": "4.50",
  "category": "dessert",
  "urlToImage": "../assets/images/dessert-3.jpeg",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Creme brulee",
  "description": "Delicate creamy dessert in a caramel basket with wild berries",
  "price": "4.00",
  "category": "dessert",
  "urlToImage": "../assets/images/dessert-4.jpeg",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Pancakes",
  "description": "Tender pancakes with strawberry jam and fresh strawberries",
  "price": "4.50",
  "category": "dessert",
  "urlToImage": "../assets/images/dessert-5.jpeg",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Honey cake",
  "description": "Classic honey cake with delicate custard",
  "price": "4.50",
  "category": "dessert",
  "urlToImage": "../assets/images/dessert-6.jpeg",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Chocolate cake",
  "description": "Cake with hot chocolate filling and nuts with dried apricots",
  "price": "5.50",
  "category": "dessert",
  "urlToImage": "../assets/images/dessert-7.jpeg",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}, {
  "name": "Black forest",
  "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
  "price": "6.50",
  "category": "dessert",
  "urlToImage": "../assets/images/dessert-8.jpeg",
  "sizes": {
    "s": {
      "size": "50 g",
      "add-price": "0.00"
    },
    "m": {
      "size": "100 g",
      "add-price": "0.50"
    },
    "l": {
      "size": "200 g",
      "add-price": "1.00"
    }
  },
  "additives": [{
    "name": "Berries",
    "add-price": "0.50"
  }, {
    "name": "Nuts",
    "add-price": "0.50"
  }, {
    "name": "Jam",
    "add-price": "0.50"
  }]
}];
;// CONCATENATED MODULE: ./src/img/coffee-1.jpeg
var coffee_1_namespaceObject = __webpack_require__.p + "assets/images/coffee-1.jpeg";
;// CONCATENATED MODULE: ./src/img/coffee-2.jpeg
var coffee_2_namespaceObject = __webpack_require__.p + "assets/images/coffee-2.jpeg";
;// CONCATENATED MODULE: ./src/img/coffee-3.jpeg
var coffee_3_namespaceObject = __webpack_require__.p + "assets/images/coffee-3.jpeg";
;// CONCATENATED MODULE: ./src/img/coffee-4.jpeg
var coffee_4_namespaceObject = __webpack_require__.p + "assets/images/coffee-4.jpeg";
;// CONCATENATED MODULE: ./src/img/coffee-5.jpeg
var coffee_5_namespaceObject = __webpack_require__.p + "assets/images/coffee-5.jpeg";
;// CONCATENATED MODULE: ./src/img/coffee-6.jpeg
var coffee_6_namespaceObject = __webpack_require__.p + "assets/images/coffee-6.jpeg";
;// CONCATENATED MODULE: ./src/img/coffee-7.jpeg
var coffee_7_namespaceObject = __webpack_require__.p + "assets/images/coffee-7.jpeg";
;// CONCATENATED MODULE: ./src/img/coffee-8.jpeg
var coffee_8_namespaceObject = __webpack_require__.p + "assets/images/coffee-8.jpeg";
;// CONCATENATED MODULE: ./src/img/tea-1.jpg
var tea_1_namespaceObject = __webpack_require__.p + "assets/images/tea-1.jpg";
;// CONCATENATED MODULE: ./src/img/tea-2.jpeg
var tea_2_namespaceObject = __webpack_require__.p + "assets/images/tea-2.jpeg";
;// CONCATENATED MODULE: ./src/img/tea-3.jpeg
var tea_3_namespaceObject = __webpack_require__.p + "assets/images/tea-3.jpeg";
;// CONCATENATED MODULE: ./src/img/tea-4.jpeg
var tea_4_namespaceObject = __webpack_require__.p + "assets/images/tea-4.jpeg";
;// CONCATENATED MODULE: ./src/img/dessert-1.jpeg
var dessert_1_namespaceObject = __webpack_require__.p + "assets/images/dessert-1.jpeg";
;// CONCATENATED MODULE: ./src/img/dessert-2.jpeg
var dessert_2_namespaceObject = __webpack_require__.p + "assets/images/dessert-2.jpeg";
;// CONCATENATED MODULE: ./src/img/dessert-3.jpeg
var dessert_3_namespaceObject = __webpack_require__.p + "assets/images/dessert-3.jpeg";
;// CONCATENATED MODULE: ./src/img/dessert-4.jpeg
var dessert_4_namespaceObject = __webpack_require__.p + "assets/images/dessert-4.jpeg";
;// CONCATENATED MODULE: ./src/img/dessert-5.jpeg
var dessert_5_namespaceObject = __webpack_require__.p + "assets/images/dessert-5.jpeg";
;// CONCATENATED MODULE: ./src/img/dessert-6.jpeg
var dessert_6_namespaceObject = __webpack_require__.p + "assets/images/dessert-6.jpeg";
;// CONCATENATED MODULE: ./src/img/dessert-7.jpeg
var dessert_7_namespaceObject = __webpack_require__.p + "assets/images/dessert-7.jpeg";
;// CONCATENATED MODULE: ./src/img/dessert-8.jpeg
var dessert_8_namespaceObject = __webpack_require__.p + "assets/images/dessert-8.jpeg";
;// CONCATENATED MODULE: ./src/components/menu/Modal.js
class Modal {
  constructor(classes) {
    this.classes = classes;
    this.overlayModal = '';
    this.modal = '';
    this.modalContainer = '';
  }
  buildModal(content) {
    //Overlay Modal

    this.overlayModal = this.createDomNode(this.overlayModal, 'div', 'overlay-modal');

    // Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    // this.modalContainer  = this.createDomNode(this.modalContainer, 'div', 'modal__container');

    this.setContent(content);
    this.appendModalElements();

    //Bind Events 

    this.bindEvents();
    this.openModal();
  }
  setContent(content) {
    if (typeof content === 'string') {
      this.modal = content;
    } else {
      this.modal.innerHTML = '';
      this.modal.append(content);
    }
  }
  appendModalElements() {
    this.overlayModal.append(this.modal);
  }
  createDomNode(node, element) {
    node = document.createElement(element);
    for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classes[_key - 2] = arguments[_key];
    }
    node.classList.add(...classes);
    return node;
  }
  bindEvents() {
    this.overlayModal.addEventListener('click', this.closeModal);
  }
  openModal() {
    document.body.append(this.overlayModal);
  }
  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay-modal') || classes.contains('modal-content__close-button')) {
      document.querySelector('.overlay-modal').remove();
    }
  }
}
;// CONCATENATED MODULE: ./src/components/menu/GridModal.js

class GridModal extends Modal {
  constructor(classes, _ref) {
    let {
      name,
      description,
      price,
      category,
      urlToImage,
      sizes,
      additives
    } = _ref;
    super(classes);
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.urlToImage = urlToImage;
    this.sizes = sizes;
    this.additives = additives;
    this.costS = sizes.s.add - price;
    this.costM = sizes.m.add - price;
    this.costL = sizes.l.add - price;
    this.additive = additives;
    this.sum = 0;
  }
  generateContainer() {
    let template = '';
    let container = '';
    container = this.createDomNode(container, 'div', 'modal__container');
    template += `<div class="modal__column">`;
    template += `<div class="modal__picture-container">`;
    this.urlToImage && (template += `<img class="modal__picture" src="${this.urlToImage}" alt="${this.name}">`);
    template += `</div>`;
    template += `</div>`;
    template += `<div class="modal__column">`;
    template += `<div class="modal-content">`;
    this.name && (template += `<p class="modal-content__title">${this.name}</p>`);
    this.description && (template += `<p class="modal-content__description">${this.description}</p>`);
    if (this.sizes) {
      template += `<div class="modal-content__option option">`;
      template += `<p class="option__heading">Size</p>`;
      template += `<div class="option__tabs tabs tabs_option tabs_modal">`;
      if (this.sizes.s) {
        template += `<div class="tabs__tab tab" data-type="size">`;
        template += `<p class="tab__icon tab__icon_text">S</p>`;
        template += `<p class="tab__name">${this.sizes.s.size}</p>`;
        template += `</div>`;
      }
      if (this.sizes.m) {
        template += `<div class="tabs__tab tab" data-type="size">`;
        template += `<p class="tab__icon tab__icon_text">M</p>`;
        template += `<p class="tab__name">${this.sizes.m.size}</p>`;
        template += `</div>`;
      }
      if (this.sizes.l) {
        template += `<div class="tabs__tab tab" data-type="size">`;
        template += `<p class="tab__icon tab__icon_text">L</p>`;
        template += `<p class="tab__name">${this.sizes.l.size}</p>`;
        template += `</div>`;
      }
      template += `</div>`;
      template += `</div>`;
    }
    if (this.additives) {
      template += `<div class="modal-content__option option">`;
      template += `<p class="option__heading">Additives</p>`;
      template += `<div class="option__tabs tabs tabs_option tabs_modal">`;
      template += `<div class="tabs__tab tab" data-type="additive">`;
      template += `<p class="tab__icon tab__icon_text">1</p>`;
      template += `<p class="tab__name">${this.additives[0].name}</p>`;
      template += `</div>`;
      template += `<div class="tabs__tab tab" data-type="additive">`;
      template += `<p class="tab__icon tab__icon_text">2</p>`;
      template += `<p class="tab__name">${this.additives[1].name}</p>`;
      template += `</div>`;
      template += `<div class="tabs__tab tab" data-type="additive">`;
      template += `<p class="tab__icon tab__icon_text">3</p>`;
      template += `<p class="tab__name">${this.additives[2].name}</p>`;
      template += `</div>`;
      template += `</div>`;
      template += `</div>`;
    }
    template += `<div class="modal-content__total-price total-price">`;
    template += `<p class="total-price__heading">Total:</p>`;
    template += `<p class="total-price__cost">${this.price}</p>`;
    template += `</div>`;
    template += `<div class="modal-content__warning warning">
    <div class="warning__icon"></div>
      <p class="warning__description">
        The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
      </p>
    </div> `;
    template += `<button class="modal-content__close-button">Close</button>`;
    template += `</div>`;
    template += `</div>`;
    container.innerHTML = template;
    return container;
  }
  renderModal() {
    let content = this.generateContainer();
    super.buildModal(content);
    this.tabsClickHandler();
  }
  tabsClickHandler() {
    let tabsModal = document.querySelectorAll('.tabs_modal');
    tabsModal.forEach(tabs => tabs.addEventListener('click', e => {
      if (e.target.closest('.tab')) {
        const tab = e.target.closest('.tab');
        let isActive = false;
        let tabData = null;
        const dataType = this.getDataType(tab);
        if (dataType === 'size') {
          tabData = e.target.closest('.tab').querySelector('.tab__icon').textContent;
        } else if (dataType === 'additive') {
          tabData = e.target.closest('.tab').querySelector('.tab__name').textContent;
        }
        if (tab.classList.contains('tab_active')) {
          isActive = true;
          tab.classList.remove('tab_active');
        } else {
          tab.classList.add('tab_active');
        }
        this.calculatePrice(tabData, isActive, dataType);
      }
    }));
  }
  calculatePrice(data, isActive, dataType) {
    let additivePrice = null;
    let sizePrice = null;
    console.log();
    if (dataType === 'size') {
      sizePrice = this.sizes[data.toLowerCase()]['add-price'];
    } else if (dataType === 'additive') {
      additivePrice = this.additives.find(aditive => aditive.name === data)["add-price"];
    }
    const cost = document.querySelector('.total-price__cost');
    let currentPrice = cost.textContent;
    if (!isActive) {
      cost.textContent = (Number(currentPrice) + Number(sizePrice || additivePrice || 0)).toFixed(2);
    } else {
      cost.textContent = (Number(currentPrice) - Number(sizePrice || additivePrice || 0)).toFixed(2);
    }
  }
  getDataType(tab) {
    return tab.getAttribute('data-type');
  }
}
;// CONCATENATED MODULE: ./src/components/menu/RefreshButton.js
class RefreshButton {
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
    for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classes[_key - 2] = arguments[_key];
    }
    this.classes = classes;
    this.dataArray = [];
    this.refreshButton = '';
  }
  buildButton() {
    this.refreshButton = document.createElement('div');
    this.refreshButton.classList.add('refresh-button', ...this.classes);
    this.refreshButton.innerHTML = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="#665F55"/>
    <path d="M39.8883 31.5C39.1645 36.3113 35.013 40 30 40C24.4772 40 20 35.5228 20 30C20 24.4772 24.4772 20 30 20C34.1006 20 37.6248 22.4682 39.1679 26" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35 26H39.4C39.7314 26 40 25.7314 40 25.4V21" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
    this.refreshButtonEvent();
    this.appendButton();
  }
  appendButton() {
    document.querySelector(`.${this.parent}`).append(this.refreshButton);
  }
  getContent() {
    return document.querySelectorAll(`.${this.data}`);
  }
  hideContent() {
    const content = this.getContent();
    content.forEach((item, index) => {
      item.classList.add(`${this.data}_unactive`);
      if (index < 4) {
        item.classList.remove(`${this.data}_unactive`);
      }
    });
  }
  showContent() {
    const content = this.getContent();
    content.forEach(item => {
      item.classList.remove(`${this.data}_unactive`);
    });
  }
  checkResolution(resolution) {
    if (resolution > 768) {
      this.removeButton();
      this.showContent();
    } else if (!document.querySelector('.refresh-button')) {
      this.buildButton();
      this.hideContent();
    }
  }
  removeButton() {
    if (document.querySelector('.refresh-button')) {
      document.querySelector('.refresh-button').remove();
    }
  }
  refreshButtonEvent() {
    this.refreshButton.addEventListener('click', () => this.refreshButtonClickHandler());
  }
  refreshButtonClickHandler() {
    const content = this.getContent();
    const contentLength = content.length;
    if (contentLength > 4) {
      content.forEach(item => {
        if (!item.classList.contains(`${this.data}_unactive`)) {
          item.classList.add(`${this.data}_active`);
          this.dataArray.push(item);
        } else {
          item.classList.remove(`${this.data}_unactive`);
          item.classList.add(`${this.data}_active`);
        }
      });
      this.dataArray.forEach((item, index) => {
        if (index < 4) {
          item.classList.add(`${this.data}_unactive`);
          item.classList.remove(`${this.data}_active`);
        }
      });
      this.dataArray = [];
    }
  }
}
;// CONCATENATED MODULE: ./src/components/menu/menu.js






























window.onload = function () {
  //Render Grid Items
  if (products) {
    renderGridItemToDom();
  }

  //Tabs
  addTabsClickHandler();

  //Modal Window
  addGridItemClickHandler();

  //Refresh Button
  checkRefreshButtonState();
};
const addTabsClickHandler = () => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab, indexClickedTab) => tab.addEventListener('click', e => {
    removeSelectedTab();
    selectClickedTab(tab, indexClickedTab);
    filterCategoryBySelectedTab(indexClickedTab);
  }));
  selectClickedTab(tabs[0], 0);
};
//toDo: сделать через погружение

const removeSelectedTab = () => {
  let tabs = document.querySelectorAll('.tab');
  let tabsIcons = document.querySelectorAll('.tab__icon');
  let tabsNames = document.querySelectorAll('.tab__name');
  tabs.forEach(tab => tab.classList.remove('tab_active'));
  tabsIcons.forEach(icon => icon.classList.remove('tab__icon_active'));
  tabsNames.forEach(name => name.classList.remove('tab__name_active'));
};
const selectClickedTab = (clickedTab, indexClickedTab) => {
  let tabIcon = document.querySelectorAll('.tab__icon')[indexClickedTab];
  let tabName = document.querySelectorAll('.tab__name')[indexClickedTab];
  clickedTab.classList.add('tab_active');
  tabIcon.classList.add('tab__icon_active');
  tabName.classList.add('tab__name_active');
};
const filterCategoryBySelectedTab = indexClickedTab => {
  const tabName = document.querySelectorAll('.tab__name')[indexClickedTab].textContent;
  renderGridItemToDom(tabName.toLowerCase());
};
const renderGridItemToDom = function () {
  let filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'coffee';
  const data = products.filter(product => product.category === filter);
  let grid = getGrid();
  generateGridItems(data).forEach(item => {
    grid.append(item.generateItem());
  });
};
const getGrid = () => {
  const grid = document.querySelector('.grid');
  grid.innerHTML = '';
  return grid;
};
const generateGridItems = products => {
  let items = [];
  products.forEach(item => {
    items.push(new GridItem(item));
  });
  return items;
};
const addGridItemClickHandler = () => {
  document.querySelector('.grid').addEventListener('click', e => {
    if (e.target.closest('.grid-item')) {
      let clickedGridItem = e.target.closest('.grid-item').querySelector('.grid-item__title');
      let clickedGridItemName = clickedGridItem.textContent;
      let clickedGridItemData = getClickedData(clickedGridItemName);
      renderGridItemModalWindow(clickedGridItemData);
    }
  });
};
const getClickedData = name => {
  return products.find(product => product.name === name);
};
const renderGridItemModalWindow = content => {
  let modal = new GridModal('grid__modal', content);
  modal.renderModal();
};
const getResolution = () => window.innerWidth;
const checkRefreshButtonState = () => {
  window.addEventListener('resize', () => {
    renderRefreshButton(getResolution());
  });
};
const renderRefreshButton = resolution => {
  let refreshButton = new RefreshButton('price', 'grid-item', 'price__refresh-button');
  refreshButton.checkResolution(resolution);
};
}();
/******/ })()
;