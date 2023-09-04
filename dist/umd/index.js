/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myLibrary"] = factory();
	else
		root["myLibrary"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/esm/HtmlHandler.js":
/*!*********************************!*\
  !*** ./dist/esm/HtmlHandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HtmlHandler: () => (/* binding */ HtmlHandler)\n/* harmony export */ });\n/* harmony import */ var _UtilityCls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UtilityCls */ \"./dist/esm/UtilityCls.js\");\n/* harmony import */ var _MarkdownParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownParser */ \"./dist/esm/MarkdownParser.js\");\n\n\nclass HtmlHandler {\n  constructor(utilityCls = _UtilityCls__WEBPACK_IMPORTED_MODULE_0__.UtilityCls, markdownParser = new _MarkdownParser__WEBPACK_IMPORTED_MODULE_1__.MarkdownParser()) {\n    this.utilityCls = utilityCls;\n    this.markdownParser = markdownParser;\n  }\n  TextChangeHandler() {\n    let markdown = document.getElementById(this.utilityCls.inputElement);\n    let markdownOutput = document.getElementById(this.utilityCls.outputElement);\n    if (markdown !== null) {\n      markdown.onkeyup = e => {\n        if (markdown.value) {\n          markdownOutput.innerHTML = _MarkdownParser__WEBPACK_IMPORTED_MODULE_1__.MarkdownParser.parse(markdown.value);\n        } else markdownOutput.innerHTML = \"<p></p>\";\n      };\n    }\n  }\n}\n\n//# sourceURL=webpack://myLibrary/./dist/esm/HtmlHandler.js?");

/***/ }),

/***/ "./dist/esm/MarkdownParser.js":
/*!************************************!*\
  !*** ./dist/esm/MarkdownParser.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MarkdownParser: () => (/* binding */ MarkdownParser)\n/* harmony export */ });\nclass MarkdownParser {}\n//private utilityCls: UtilityCls;\nMarkdownParser.parse = text => {\n  const toHTML = text.replace(/^### (.*$)/gim, \"<h3>$1</h3>\") // h3 tag\n  .replace(/^## (.*$)/gim, \"<h2>$1</h2>\") // h2 tag\n  .replace(/^# (.*$)/gim, \"<h1>$1</h1>\") // h1 tag\n  .replace(/\\*\\*(.*)\\*\\*/gim, \"<b>$1</b>\") // bold text\n  .replace(/\\*(.*)\\*/gim, \"<i>$1</i>\"); // italic text\n  return toHTML.trim(); // using trim method to remove whitespace\n};\n\n//# sourceURL=webpack://myLibrary/./dist/esm/MarkdownParser.js?");

/***/ }),

/***/ "./dist/esm/UndoRedo.js":
/*!******************************!*\
  !*** ./dist/esm/UndoRedo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UndoRedojs: () => (/* binding */ UndoRedojs)\n/* harmony export */ });\nclass UndoRedojs {\n  constructor(cooldown) {\n    this.cooldown = cooldown;\n    if (!cooldown || isNaN(cooldown) || cooldown <= 0) this.cooldown = 1;else this.cooldown = cooldown;\n    this.stack = [\"\"];\n    this.currentIndex = 0;\n    this.cooldownState = 0;\n  }\n  record(data, force) {\n    if (this.currentIndex === this.stack.length - 1) {\n      //checking for regular history updates\n      if ((this.cooldownState >= this.cooldown || this.cooldownState === 0) && force !== true) {\n        //history updates after a new cooldown\n        this.stack.push(data);\n        this.currentIndex++;\n        this.cooldownState = 1;\n      } else if (this.cooldownState < this.cooldown && force !== true) {\n        //history updates during cooldown\n        this.current(data);\n        this.cooldownState++;\n      } else if (force === true) {\n        //force to record without cooldown\n        this.stack.push(data);\n        this.currentIndex++;\n        this.cooldownState = this.cooldown;\n      }\n    } else if (this.currentIndex < this.stack.length - 1) {\n      //checking for history updates after undo\n      if (force !== true) {\n        //history updates after undo\n        this.stack.length = this.currentIndex + 1;\n        this.stack.push(data);\n        this.currentIndex++;\n        this.cooldownState = 1;\n      } else if (force === true) {\n        ////force to record after undo\n        this.stack.length = this.currentIndex + 1;\n        this.stack.push(data);\n        this.currentIndex++;\n        this.cooldownState = this.cooldown;\n      }\n    }\n  }\n  undo(readOnly) {\n    if (this.currentIndex > 0) {\n      if (readOnly !== true) {\n        this.currentIndex--;\n        return this.stack[this.currentIndex];\n      } else {\n        return this.stack[this.currentIndex - 1];\n      }\n    }\n  }\n  redo(readOnly) {\n    if (this.currentIndex < this.stack.length - 1) {\n      if (readOnly !== true) {\n        this.currentIndex++;\n        return this.stack[this.currentIndex];\n      } else {\n        return this.stack[this.currentIndex + 1];\n      }\n    }\n  }\n  current(data) {\n    if (data) this.stack[this.currentIndex] = data;\n    return this.stack[this.currentIndex];\n  }\n}\n\n//# sourceURL=webpack://myLibrary/./dist/esm/UndoRedo.js?");

/***/ }),

/***/ "./dist/esm/UtilityCls.js":
/*!********************************!*\
  !*** ./dist/esm/UtilityCls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UtilityCls: () => (/* binding */ UtilityCls)\n/* harmony export */ });\nclass UtilityCls {}\nUtilityCls.inputElement = \"iput\";\nUtilityCls.outputElement = \"oput\";\n\n//# sourceURL=webpack://myLibrary/./dist/esm/UtilityCls.js?");

/***/ }),

/***/ "./dist/esm/index.js":
/*!***************************!*\
  !*** ./dist/esm/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HtmlHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlHandler */ \"./dist/esm/HtmlHandler.js\");\n/* harmony import */ var _UndoRedo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UndoRedo */ \"./dist/esm/UndoRedo.js\");\n\n\nconst htmlHD = new _HtmlHandler__WEBPACK_IMPORTED_MODULE_0__.HtmlHandler();\nhtmlHD.TextChangeHandler();\nconst myHistory = new _UndoRedo__WEBPACK_IMPORTED_MODULE_1__.UndoRedojs(5);\n\n//# sourceURL=webpack://myLibrary/./dist/esm/index.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/esm/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});