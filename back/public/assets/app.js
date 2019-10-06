/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.sass":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.sass ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/**\\n * Import\\n */\\n/* Colors */\\n/**\\n * Styles\\n */\\n.navbar {\\n  background-color: #714839;\\n  padding: 1rem; }\\n\\n.fa-user-times {\\n  color: #bdccb8;\\n  font-size: 1.5rem; }\\n\\n.subtitle {\\n  margin-left: 43%;\\n  margin-bottom: 5%; }\\n\\nh1 {\\n  font-size: 3.5rem;\\n  font-weight: bold;\\n  color: white; }\\n\\n.button-alert {\\n  margin-bottom: 20%;\\n  font-weight: bold; }\\n\\n.fa-bullhorn {\\n  font-size: 2rem; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/App/app.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Map/map.sass":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Map/map.sass ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".leaflet-container {\\n  height: 600px;\\n  width: 100%;\\n  border-radius: 15px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Map/map.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n/* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 */\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n/* Reset perso */\\na, del, ins {\\n  text-decoration: none; }\\n\\na {\\n  color: inherit; }\\n\\nlabel, button {\\n  cursor: pointer; }\\n\\nhtml {\\n  box-sizing: border-box; }\\n\\n*, *:before, *:after {\\n  box-sizing: inherit; }\\n\\ninput, button {\\n  outline: 0; }\\n\\nbody {\\n  color: #333;\\n  padding: 2rem;\\n  font-family: 'Khula', sans-serif;\\n  background-color: #714839; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/index.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/AlertButton/index.js":
/*!*********************************************!*\
  !*** ./src/components/AlertButton/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar AlertButton = function AlertButton(_ref) {\n  var alertButton = _ref.alertButton,\n      handleClick = _ref.handleClick;\n  // console.log(handleClick);\n  var buttonClass = alertButton ? \"btn btn-secondary btn-lg button-alert\" : \"btn btn-danger btn-lg button-alert\";\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n    onClick: handleClick,\n    type: \"button\",\n    className: buttonClass\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"i\", {\n    className: \"fa fa-bullhorn\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, \"Poster une alerte\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlertButton);\n\n//# sourceURL=webpack:///./src/components/AlertButton/index.js?");

/***/ }),

/***/ "./src/components/App/app.sass":
/*!*************************************!*\
  !*** ./src/components/App/app.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./app.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/App/app.sass?");

/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var src_components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Home */ \"./src/components/Home/index.js\");\n/* harmony import */ var src_components_HeaderDisconnected__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/HeaderDisconnected */ \"./src/components/HeaderDisconnected/index.js\");\n/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Footer */ \"./src/components/Footer/index.js\");\n/* harmony import */ var src_components_Inscription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Inscription */ \"./src/components/Inscription/index.js\");\n/* harmony import */ var src_components_Connexion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/Connexion */ \"./src/components/Connexion/index.js\");\n/* harmony import */ var src_components_HowItWorks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/HowItWorks */ \"./src/components/HowItWorks/index.js\");\n/* harmony import */ var src_components_Legal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/Legal */ \"./src/components/Legal/index.js\");\n/* harmony import */ var src_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/ExternalLinks */ \"./src/components/ExternalLinks/index.js\");\n/* harmony import */ var src_components_Team__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/Team */ \"./src/components/Team/index.js\");\n/* harmony import */ var _app_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.sass */ \"./src/components/App/app.sass\");\n/* harmony import */ var _app_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_app_sass__WEBPACK_IMPORTED_MODULE_13__);\n\n\n/**\n * Import\n */\n\n\n // import PropTypes from 'prop-types';\n\n/**\n * Local import\n */\n// import { updateInputValue } from 'src/store/reducer';\n// Composants enfants éventuels\n\n\n\n\n\n\n\n\n\n // Styles et assets\n\n\n\nvar App = function App(_ref) {\n  var alertButton = _ref.alertButton,\n      handleClick = _ref.handleClick;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"App\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_HeaderDisconnected__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/\",\n    exact: true,\n    render: function render() {\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        alertButton: alertButton,\n        handleClick: handleClick\n      });\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/inscription\",\n    exact: true,\n    render: function render() {\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_Inscription__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null);\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/connexion\",\n    exact: true,\n    render: function render() {\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_Connexion__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null);\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/comment-ca-marche\",\n    exact: true,\n    render: function render() {\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_HowItWorks__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null);\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/mentions-legales\",\n    exact: true,\n    render: function render() {\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_Legal__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null);\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/liens-externes\",\n    exact: true,\n    render: function render() {\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null);\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/equipe\",\n    exact: true,\n    render: function render() {\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_Team__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null);\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null));\n}; // App.propTypes = {\n//   /** Titre de l'application React */\n//   title: PropTypes.string.isRequired\n// };\n\n/**\n * Export\n */\n// Étape 1 : on définit des stratégies de connexion au store de l'app.\n\n\nvar connectionStrategies = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])( // 1er argument : stratégie de lecture (dans le state privé global)\nfunction (state) {\n  return {\n    alertButton: state.alertButton\n  };\n}, // 2d argument : stratégie d'écriture (dans le state privé global)\nfunction (dispatch, ownProps) {\n  return {\n    handleClick: function handleClick() {\n      dispatch({\n        type: 'TOGGLE_ALERT_BUTTON_VALUE'\n      });\n    }\n  };\n}); // Étape 2 : on applique ces stratégies à un composant spécifique.\n\nvar AppContainer = connectionStrategies(App); // Étape 3 : on exporte le composant connecté qui a été généré\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppContainer); // const App = () => (\n// <div>\n//   <Map />\n//   <button className=\"position\" >Ma position</button>\n// </div>\n// );\n// export default App;\n\n//# sourceURL=webpack:///./src/components/App/index.js?");

/***/ }),

/***/ "./src/components/Connexion/index.js":
/*!*******************************************!*\
  !*** ./src/components/Connexion/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Connexion = function Connexion() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"connexion-page\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Todo : page de connexion\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Connexion);\n\n//# sourceURL=webpack:///./src/components/Connexion/index.js?");

/***/ }),

/***/ "./src/components/ExternalLinks/index.js":
/*!***********************************************!*\
  !*** ./src/components/ExternalLinks/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ExternalLinks = function ExternalLinks() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"externallinks-page\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Todo : page Liens externes\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExternalLinks);\n\n//# sourceURL=webpack:///./src/components/ExternalLinks/index.js?");

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\nvar Footer = function Footer() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"nav\", {\n    className: \"navbar fixed-bottom navbar-dark bg-dark mt-4\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/comment-ca-marche\",\n    exact: true,\n    className: \"text-danger\"\n  }, \"Comment \\xE7a marche ?\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/equipe\",\n    exact: true,\n    className: \"text-white\"\n  }, \"L'\\xE9quipe\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/mentions-legales\",\n    exact: true,\n    className: \"text-white\"\n  }, \"Mentions L\\xE9gales\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/liens-externes\",\n    exact: true,\n    className: \"text-white\"\n  }, \"Liens Externes\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer/index.js?");

/***/ }),

/***/ "./src/components/HeaderDisconnected/index.js":
/*!****************************************************!*\
  !*** ./src/components/HeaderDisconnected/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\nvar HeaderDisconnected = function HeaderDisconnected() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"header-disconnected\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"nav\", {\n    className: \"navbar navbar-dark\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"i\", {\n    className: \"fa fa-user-times\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"ml-2 text-white\"\n  }, \"non connect\\xE9\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/\",\n    exact: true,\n    className: \"navbar-brand mx-auto\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    src: \"/docs/4.3/assets/brand/bootstrap-solid.svg\",\n    width: \"30\",\n    height: \"30\",\n    alt: \"\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h1\", null, \"MIA'O\\xF9\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"form\", {\n    className: \"form-inline\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/connexion\",\n    exact: true\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n    className: \"btn btn-info mr-2\",\n    type: \"button\"\n  }, \"Se connecter\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/inscription\",\n    exact: true\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n    className: \"btn btn-info\",\n    type: \"button\"\n  }, \"S'inscrire\")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"subtitle text-white\"\n  }, \"Le site des animaux perdus\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderDisconnected);\n\n//# sourceURL=webpack:///./src/components/HeaderDisconnected/index.js?");

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_components_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Map */ \"./src/components/Map/index.js\");\n/* harmony import */ var src_components_AlertButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/AlertButton */ \"./src/components/AlertButton/index.js\");\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var alertButton = _ref.alertButton,\n      handleClick = _ref.handleClick;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"container-fluid\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"row\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"col\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_Map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    alertButton: alertButton,\n    handleClickMap: handleClick\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"col text-center\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_AlertButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    alertButton: alertButton,\n    handleClick: handleClick\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"btn-group-vertical\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n    type: \"button\",\n    className: \"btn btn-danger btn-lg mb-4\"\n  }, \"Animaux Perdus\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n    type: \"button\",\n    className: \"btn btn-warning btn-lg mb-4\"\n  }, \"Animaux Vus\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", {\n    type: \"button\",\n    className: \"btn btn-info btn-lg\"\n  }, \"Animaux Trouv\\xE9s\"))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/Home/index.js?");

/***/ }),

/***/ "./src/components/HowItWorks/index.js":
/*!********************************************!*\
  !*** ./src/components/HowItWorks/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar HowItWorks = function HowItWorks() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"howitworks-page\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Todo : page Comment \\xE7a marche\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HowItWorks);\n\n//# sourceURL=webpack:///./src/components/HowItWorks/index.js?");

/***/ }),

/***/ "./src/components/Inscription/index.js":
/*!*********************************************!*\
  !*** ./src/components/Inscription/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Inscription = function Inscription() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"inscription-page\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Todo : page d'inscription\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inscription);\n\n//# sourceURL=webpack:///./src/components/Inscription/index.js?");

/***/ }),

/***/ "./src/components/Legal/index.js":
/*!***************************************!*\
  !*** ./src/components/Legal/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Legal = function Legal() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"legal-page\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Todo : page Mentions L\\xE9gales\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Legal);\n\n//# sourceURL=webpack:///./src/components/Legal/index.js?");

/***/ }),

/***/ "./src/components/Map/index.js":
/*!*************************************!*\
  !*** ./src/components/Map/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri-leaflet-geocoder */ \"./node_modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder-debug.js\");\n/* harmony import */ var esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/es/index.js\");\n/* harmony import */ var _map_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.sass */ \"./src/components/Map/map.sass\");\n/* harmony import */ var _map_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_map_sass__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2-react-content */ \"./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js\");\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_7__);\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // import { connect } from 'react-redux';\n\n\n\n\n\nvar MiaouMap =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(MiaouMap, _Component);\n\n  function MiaouMap() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, MiaouMap);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MiaouMap)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      markers: []\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"addMarker\", function (e) {\n      var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_7___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a);\n\n      if (_this.props.alertButton) {\n        MySwal.fire({\n          title: 'Voulez-vous placer une alerte ici ?',\n          text: '(Si oui, le formulaire d\\'alerte s\\'ouvrira)',\n          type: \"question\",\n          showCancelButton: true,\n          confirmButtonText: 'Oui',\n          cancelButtonText: 'Non'\n        }).then(function (result) {\n          if (result.value) {\n            //Ici gérer l'ouverture du formulaire d'alerte\n            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({\n              text: 'L\\'épingle a été placée sur la carte',\n              type: 'success'\n            });\n            var markers = _this.state.markers;\n            markers.push(e.latlng);\n\n            _this.props.handleClickMap();\n\n            _this.setState({\n              markers: markers\n            });\n          } else {\n            _this.props.handleClickMap();\n          }\n        }); // const answer = window.confirm('Voulez-vous placer une alerte ici ?');\n        // if(answer == true) {\n        //   const markers = this.state.markers;\n        //   markers.push(e.latlng);\n        //   this.props.handleClickMap();\n        //   this.setState({\n        //     markers: markers\n        //   })\n        // } else {\n        //   this.props.handleClickMap();\n        // }\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(MiaouMap, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var map = this.leafletMap.leafletElement;\n      var searchControl = new esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_3__[\"Geosearch\"]().addTo(map);\n      var results = new leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.LayerGroup().addTo(map);\n      searchControl.on(\"results\", function (data) {\n        results.clearLayers();\n\n        for (var i = data.results.length - 1; i >= 0; i--) {\n          results.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.marker(data.results[i].latlng));\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var center = [46.227638, 2.213749];\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_4__[\"Map\"], {\n        center: center,\n        onClick: this.addMarker,\n        zoom: \"6\",\n        ref: function ref(m) {\n          _this2.leafletMap = m;\n        }\n      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_4__[\"TileLayer\"], {\n        attribution: \"\\xA9 <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors\",\n        url: \"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      }), this.state.markers.map(function (position, idx) {\n        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_4__[\"Marker\"], {\n          key: \"marker-\".concat(idx),\n          position: position\n        });\n      }));\n    }\n  }]);\n\n  return MiaouMap;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiaouMap);\n\n//# sourceURL=webpack:///./src/components/Map/index.js?");

/***/ }),

/***/ "./src/components/Map/map.sass":
/*!*************************************!*\
  !*** ./src/components/Map/map.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./map.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Map/map.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Map/map.sass?");

/***/ }),

/***/ "./src/components/Team/index.js":
/*!**************************************!*\
  !*** ./src/components/Team/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Team = function Team() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"team-page\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Todo : page Equipe\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Team);\n\n//# sourceURL=webpack:///./src/components/Team/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var src_components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/App */ \"./src/components/App/index.js\");\n/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/store */ \"./src/store/index.js\");\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n\n\n/**\n * NPM import\n */\n\n\n\n\n\n/**\n * Local import\n */\n\n\n\n\n/**\n * Code\n */\n\nvar reactRootElement = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n  store: src_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"BrowserRouter\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n\nvar renderingArea = document.querySelector('#root');\nObject(react_dom__WEBPACK_IMPORTED_MODULE_3__[\"render\"])(reactRootElement, renderingArea); // Exemple d'action interceptée par un middleware.\n\nsrc_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_8__[\"sideEffect\"])());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n/* harmony import */ var src_store_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/middleware */ \"./src/store/middleware.js\");\n// La librairie redux s'occupe de nous fournir un système de\n// gestion d'état (state management). Il n'est pas question ici\n// de React !\n\n\n\nvar composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"]; // On crée LE store de CETTE application. Un castor sympa :)\n\nvar kastore = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(src_store_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])));\n/* harmony default export */ __webpack_exports__[\"default\"] = (kastore);\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/middleware.js":
/*!*********************************!*\
  !*** ./src/store/middleware.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n // On implémente un middleware. Son rôle est d'intercepter des actions\n// dont le but premier n'est pas d'arriver jusqu'au reducer.\n// Un middleware s'occupe avant tout des effets de bord. Il décide si\n// certaines actions doivent être traitées autrement que par une\n// mise-à-jour du state.\n// Il est possible de déclencher à la fois un effet de bord & une màj.\n\nvar middleware = function middleware(store) {\n  return function (next) {\n    return function (action) {\n      console.log('middleware:', action); // La douane examine nos papiers d'identité.\n\n      switch (action.type) {\n        // La douane intercepte spécifiquement les actions de type\n        // 'SIDE_EFFECT'. Ces actions ne doivent pas aller au reducer,\n        // mais déclencher des effets de bord.\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_0__[\"SIDE_EFFECT\"]:\n          {\n            console.log('middleware/SIDE_EFFECT'); // Ici, on peut faire du logging, lancer des requêtes AJAX, etc.\n\n            break;\n          }\n\n        default:\n          {\n            console.log('middleware/default');\n            next(action);\n          }\n      }\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (middleware);\n\n//# sourceURL=webpack:///./src/store/middleware.js?");

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/*! exports provided: SIDE_EFFECT, default, sideEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIDE_EFFECT\", function() { return SIDE_EFFECT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sideEffect\", function() { return sideEffect; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';\nvar SIDE_EFFECT = 'SIDE_EFFECT';\nvar initialState = {\n  alertButton: false\n};\nvar defaultAction = {};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAction;\n\n  switch (action.type) {\n    // case 'UPDATE_LOCATION': {\n    //   const state = { ...state, location: {\n    //     lat: action.location.lat,\n    //     lng: action.location.lng,\n    //     zoom: action.location.zoom\n    //   }}\n    //   return { ...state };\n    // }\n    case 'TOGGLE_ALERT_BUTTON_VALUE':\n      {\n        return _objectSpread({}, state, {\n          alertButton: !state.alertButton\n        });\n      }\n\n    default:\n      {\n        console.log(state); // return state;\n        // Dans le cas où on ne comprend pas quelle est l'action à\n        // effecture (action.type n'est pas reconnu), on retourne\n        // une copie non-altérée du state courant, reçu en paramètre.\n\n        return _objectSpread({}, state);\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer); // export const updateInputValue = value => {\n//   return {\n//     type: UPDATE_INPUT_VALUE,\n//     value\n//   };\n// };\n\nvar sideEffect = function sideEffect() {\n  return {\n    type: SIDE_EFFECT\n  };\n};\n\n//# sourceURL=webpack:///./src/store/reducer.js?");

/***/ }),

/***/ "./src/styles/index.sass":
/*!*******************************!*\
  !*** ./src/styles/index.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/sass-loader/dist/cjs.js!./index.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/index.sass?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/styles/index.sass ./src/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/styles/index.sass */\"./src/styles/index.sass\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/styles/index.sass_./src/index.js?");

/***/ })

/******/ });