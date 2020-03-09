/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  padding:0;\\n  margin:0;\\n  border:0;\\n}\\n#content{\\n  width: 800px;\\n  margin: auto;\\n  padding:50px;\\n  background: aquamarine;\\n  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\\n}\\n.tabs-ul{\\n  background: #998899;;\\n}\\n\\n.tab-content{\\n  background-color: white;\\n  padding:30px;\\n}\\n.tabs-ul li{\\n  display: inline-block;\\n  padding:10px;\\n  cursor:pointer;\\n  background: rgb(253, 58, 58);\\n}\\n\\n.current{\\n  background-color: #FFFFFF !important;\\n}\\n\\nul{\\n  list-style: none;\\n}\\n\\n.foods-ul li{\\n  padding: 10px;\\n  margin:10px 0;\\n  background-color: #FFFFFF;\\n  border-radius: 5px;\\n  position: relative;\\n  height: 70px;\\n}\\n\\n.foods-ul li img{\\n  border:2px solid rgb(253, 58, 58);\\n  border-radius: 5px;\\n  width:100px;\\n  height:70px;\\n  position: absolute;\\n  right:10px;\\n  top:5px\\n}\\n.hours-ul{\\n  margin: 20px 0;\\n  background-color: #FFFFFF;\\n  border-radius: 5px;\\n  padding:10px;\\n}\\n.info-ul{\\n  margin: 20px 0;\\n  background-color: #FFFFFF;\\n  border-radius: 5px;\\n  padding:10px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\n\nfunction contact() {\n  const header = document.createElement('h1');\n  const hours = document.createElement('ul');\n  hours.innerHTML = `\n  <li>Working hours</li>\n  <li>Monday - Thursday : 8am 10pm</li>\n  <li>Friday : 8am - 11pm</li>\n  <li>Weekends : 8am 1am</li>`;\n  const info = document.createElement('ul');\n  info.innerHTML = `\n  <li>Contact information</li>\n  <li>Tel - +233 555 065 430</li>\n  <li>Email :edem.agbenyo@gmail.com</li>\n  <li>Address : Lemon st. Accra, Ghana</li>`;\n  header.innerText = 'Contact us today.';\n\n  // Styling\n  hours.classList = 'hours-ul';\n  info.classList = 'info-ul';\n\n  const body = document.createElement('div');\n  body.append(hours, info);\n  const page = new _page__WEBPACK_IMPORTED_MODULE_0__[\"default\"](header, body);\n  return page.createPage();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/images/banana.jpeg":
/*!********************************!*\
  !*** ./src/images/banana.jpeg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d211143597f0d1308e8caf1a7df304cc.jpeg\");\n\n//# sourceURL=webpack:///./src/images/banana.jpeg?");

/***/ }),

/***/ "./src/images/crispy.jpeg":
/*!********************************!*\
  !*** ./src/images/crispy.jpeg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6a7005f50e1db11b4ae2d5c7db581409.jpeg\");\n\n//# sourceURL=webpack:///./src/images/crispy.jpeg?");

/***/ }),

/***/ "./src/images/flower.jpeg":
/*!********************************!*\
  !*** ./src/images/flower.jpeg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"faa0b1818c0964a949c6f61c40284970.jpeg\");\n\n//# sourceURL=webpack:///./src/images/flower.jpeg?");

/***/ }),

/***/ "./src/images/milk.jpeg":
/*!******************************!*\
  !*** ./src/images/milk.jpeg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"73d6732e95c7c680ab2464cad564dc45.jpeg\");\n\n//# sourceURL=webpack:///./src/images/milk.jpeg?");

/***/ }),

/***/ "./src/images/potatoes.jpeg":
/*!**********************************!*\
  !*** ./src/images/potatoes.jpeg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"02cce3969c447354faaec655564f145d.jpeg\");\n\n//# sourceURL=webpack:///./src/images/potatoes.jpeg?");

/***/ }),

/***/ "./src/images/salad.jpeg":
/*!*******************************!*\
  !*** ./src/images/salad.jpeg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3d6b24b6a9af5eea168db5b40e08ad23.jpeg\");\n\n//# sourceURL=webpack:///./src/images/salad.jpeg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n(() => {\n  const contactpage = Object(_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const menupage = Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const content = document.querySelector('#content');\n  const tabsUl = document.createElement('ul');\n  const tabsLiContact = document.createElement('li');\n  const tabsLiMenu = document.createElement('li');\n  const title = document.createElement('h1');\n\n  // Add text\n  tabsLiContact.innerText = 'Our contact';\n  tabsLiContact.setAttribute('id', 'contact-page');\n  tabsLiMenu.innerText = 'Our Menu';\n  tabsLiMenu.setAttribute('id', 'menu-page');\n  title.innerText = 'Welcome to restaurant El Chapo';\n\n  // Styling\n  tabsUl.classList = 'tabs-ul';\n  tabsLiContact.classList = 'tabs-li';\n  tabsLiMenu.classList = 'tabs-li';\n  tabsUl.append(tabsLiContact, tabsLiMenu);\n  // All tab list to the page\n  content.append(title, tabsUl);\n\n  // show first li on the tabs\n  content.append(contactpage);\n  tabsLiContact.style.backgroundColor = 'white';\n\n\n  tabsUl.addEventListener('click', (e) => {\n    if (e.target.getAttribute('id') === 'contact-page') {\n      content.append(contactpage);\n      tabsLiContact.style.backgroundColor = 'white';\n\n      tabsLiMenu.style.removeProperty('background-color');\n      menupage.remove();\n    } else if (e.target.getAttribute('id') === 'menu-page') {\n      contactpage.remove();\n      content.append(menupage);\n      tabsLiMenu.style.backgroundColor = 'white';\n      tabsLiContact.style.removeProperty('background-color');\n    }\n  });\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n/* harmony import */ var _images_flower_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/flower.jpeg */ \"./src/images/flower.jpeg\");\n/* harmony import */ var _images_banana_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/banana.jpeg */ \"./src/images/banana.jpeg\");\n/* harmony import */ var _images_milk_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/milk.jpeg */ \"./src/images/milk.jpeg\");\n/* harmony import */ var _images_potatoes_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/potatoes.jpeg */ \"./src/images/potatoes.jpeg\");\n/* harmony import */ var _images_crispy_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/crispy.jpeg */ \"./src/images/crispy.jpeg\");\n/* harmony import */ var _images_salad_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/salad.jpeg */ \"./src/images/salad.jpeg\");\n\n\n\n\n\n\n\n\nfunction menu() {\n  const title = document.createElement('h1');\n  const menuFoodUl = document.createElement('ul');\n  menuFoodUl.innerHTML = `\n  <li data-img=\"flower\">Wild Flower Honey Butter Toast - $15</li>\n  <li data-img=\"banana\">Warm Banana Bread - $12</li>\n  <li data-img=\"milk\">Sheep’s Milk Ricotta - $9</li>\n  <li data-img=\"potatoes\">Crispy Fingerling Potatoes - $11</li>\n  <li data-img=\"crispy\">Crispy Cauliflower - $19</li>\n  <li data-img=\"salad\">Salad of Organic Spring Greens - $10</li>\n  `;\n  title.innerText = 'Menu';\n\n  // Add class\n  menuFoodUl.classList = 'foods-ul';\n\n  const lis = menuFoodUl.getElementsByTagName('li');\n\n  const menuList = Array.from(lis);\n  menuList.forEach(food => {\n    const image = document.createElement('img');\n    // console.log();\n    switch (food.getAttribute('data-img')) {\n      case 'flower':\n        image.src = _images_flower_jpeg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        break;\n      case 'banana':\n        image.src = _images_banana_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        break;\n      case 'milk':\n        image.src = _images_milk_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n        break;\n      case 'potatoes':\n        image.src = _images_potatoes_jpeg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n        break;\n      case 'crispy':\n        image.src = _images_crispy_jpeg__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n        break;\n      case 'salad':\n        image.src = _images_salad_jpeg__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n        break;\n\n      default:\n        break;\n    }\n\n    food.append(image);\n  });\n  const page = new _page__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, menuFoodUl);\n  return page.createPage();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\nclass Page {\n  constructor(header, body, footer = null) {\n    this.header = header;\n    this.body = body;\n    this.footer = footer;\n  }\n\n\n  createPage() {\n    const div = document.createElement('div');\n    if (!this.footer) {\n      this.footer = document.createElement('footer');\n      this.footer.innerHTML = 'Copyright &copy; 2020. El Chapo restaurant';\n    }\n    div.append(this.header, this.body, this.footer);\n    return div;\n  }\n}\n\n//# sourceURL=webpack:///./src/page.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles/main.css?");

/***/ })

/******/ });