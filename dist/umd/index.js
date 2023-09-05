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

/***/ "./dist/esm/ElementInserter.js":
/*!*************************************!*\
  !*** ./dist/esm/ElementInserter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ElementInserter: () => (/* binding */ ElementInserter)\n/* harmony export */ });\n/* harmony import */ var _UtilityCls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UtilityCls */ \"./dist/esm/UtilityCls.js\");\n\nclass ElementInserter {\n  constructor(cursorPosition = document.getElementById(_UtilityCls__WEBPACK_IMPORTED_MODULE_0__.UtilityCls.inputElement)) {\n    this.cursorPosition = cursorPosition;\n    this.insertAtCursorPosition = elem => {\n      var curPos = this.cursorPosition.selectionStart;\n      console.log(curPos);\n      let x = this.cursorPosition.value;\n      this.cursorPosition.value = x.slice(0, curPos) + elem + x.slice(curPos);\n    };\n  }\n}\n\n//# sourceURL=webpack://myLibrary/./dist/esm/ElementInserter.js?");

/***/ }),

/***/ "./dist/esm/HtmlHandler.js":
/*!*********************************!*\
  !*** ./dist/esm/HtmlHandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HtmlHandler: () => (/* binding */ HtmlHandler)\n/* harmony export */ });\n/* harmony import */ var _UtilityCls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UtilityCls */ \"./dist/esm/UtilityCls.js\");\n/* harmony import */ var _MdParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MdParser */ \"./dist/esm/MdParser.js\");\n\n//import { MarkdownParser } from \"./MarkdownParser\";\n\nclass HtmlHandler {\n  constructor(markdownParser = new _MdParser__WEBPACK_IMPORTED_MODULE_1__.MdParser(), markdown = document.getElementById(_UtilityCls__WEBPACK_IMPORTED_MODULE_0__.UtilityCls.inputElement), markdownOutput = document.getElementById(_UtilityCls__WEBPACK_IMPORTED_MODULE_0__.UtilityCls.outputElement)) {\n    this.markdownParser = markdownParser;\n    this.markdown = markdown;\n    this.markdownOutput = markdownOutput;\n  }\n  TextChangeHandler() {\n    if (this.markdown !== null) {\n      this.markdown.onkeyup = e => {\n        if (this.markdown.value) {\n          this.markdownOutput.innerHTML = this.markdownParser.parse(this.markdown.value);\n        } else this.markdownOutput.innerHTML = \"<p></p>\";\n      };\n    }\n  }\n  onloadInit() {\n    this.markdownOutput.innerHTML = this.markdownParser.parse(this.markdown.value);\n  }\n}\n\n//# sourceURL=webpack://myLibrary/./dist/esm/HtmlHandler.js?");

/***/ }),

/***/ "./dist/esm/MdParser.js":
/*!******************************!*\
  !*** ./dist/esm/MdParser.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MdParser: () => (/* binding */ MdParser)\n/* harmony export */ });\nclass MdParser {\n  constructor() {\n    /***   Regex Markdown Parser by chalarangelo   ***/\n    // Replaces 'regex' with 'replacement' in 'str'\n    // Curry function, usage: replaceRegex(regexVar, replacementVar) (strVar)\n    this.replaceRegex = function (regex, replacement) {\n      return function (str) {\n        return str.replace(regex, replacement);\n      };\n    };\n    // Regular expressions for Markdown (a bit strict, but they work)\n    this.codeBlockRegex = /((\\n\\t)(.*))+/g;\n    this.inlineCodeRegex = /(`)(.*?)\\1/g;\n    this.imageRegex = /!\\[([^\\[]+)\\]\\(([^\\)]+)\\)/g;\n    this.linkRegex = /\\[([^\\[]+)\\]\\(([^\\)]+)\\)/g;\n    this.headingRegex = /\\n(#+\\s*)(.*)/g;\n    this.boldItalicsRegex = /(\\*{1,2})(.*?)\\1/g;\n    this.strikethroughRegex = /(\\~\\~)(.*?)\\1/g;\n    this.blockquoteRegex = /\\n(&gt;|\\>)(.*)/g;\n    this.horizontalRuleRegex = /\\n((\\-{3,})|(={3,}))/g;\n    this.unorderedListRegex = /(\\n\\s*(\\-|\\+)\\s.*)+/g;\n    this.orderedListRegex = /(\\n\\s*([0-9]+\\.)\\s.*)+/g;\n    this.paragraphRegex = /\\n+(?!<pre>)(?!<h)(?!<ul>)(?!<blockquote)(?!<hr)(?!\\t)([^\\n]+)\\n/g;\n    // Replacer functions for Markdown\n    this.codeBlockReplacer = function (fullMatch) {\n      return \"\\n<pre>\" + fullMatch + \"</pre>\";\n    };\n    this.inlineCodeReplacer = function (fullMatch, tagStart, tagContents) {\n      return '<div class=\"row \"><div class=\"col  text-bg-dark border  border-3 border-primary rounded-3 p-3 my-auto  mx-1 \"><code  class=\" text-white\">' + tagContents + \"</code></div></div>\";\n    };\n    this.imageReplacer = function (fullMatch, tagTitle, tagURL) {\n      return '<img src=\"' + tagURL + '\" alt=\"' + tagTitle + '\" />';\n    };\n    this.linkReplacer = function (fullMatch, tagTitle, tagURL) {\n      return '<a href=\"' + tagURL + '\">' + tagTitle + \"</a>\";\n    };\n    this.headingReplacer = function (fullMatch, tagStart, tagContents) {\n      return \"\\n<h\" + tagStart.trim().length + \">\" + tagContents + \"</h\" + tagStart.trim().length + \">\";\n    };\n    this.boldItalicsReplacer = function (fullMatch, tagStart, tagContents) {\n      return \"<\" + (tagStart.trim().length == 1 ? \"em\" : \"strong\") + \">\" + tagContents + \"</\" + (tagStart.trim().length == 1 ? \"em\" : \"strong\") + \">\";\n    };\n    this.strikethroughReplacer = function (fullMatch, tagStart, tagContents) {\n      return \"<del>\" + tagContents + \"</del>\";\n    };\n    this.blockquoteReplacer = function (fullMatch, tagStart, tagContents) {\n      return \"\\n<blockquote>\" + tagContents + \"</blockquote>\";\n    };\n    this.horizontalRuleReplacer = function (fullMatch) {\n      return \"\\n<hr />\";\n    };\n    this.unorderedListReplacer = function (fullMatch) {\n      let items = \"\";\n      fullMatch.trim().split(\"\\n\").forEach(item => {\n        items += \"<li>\" + item.substring(2) + \"</li>\";\n      });\n      return \"\\n<ul>\" + items + \"</ul>\";\n    };\n    this.orderedListReplacer = function (fullMatch) {\n      let items = \"\";\n      fullMatch.trim().split(\"\\n\").forEach(item => {\n        items += \"<li>\" + item.substring(item.indexOf(\".\") + 2) + \"</li>\";\n      });\n      return \"\\n<ol>\" + items + \"</ol>\";\n    };\n    this.paragraphReplacer = function (fullMatch, tagContents) {\n      return \"<p>\" + tagContents + \"</p>\";\n    };\n    // Rules for Markdown parsing (use in order of appearance for best results)\n    this.replaceCodeBlocks = this.replaceRegex(this.codeBlockRegex, this.codeBlockReplacer);\n    this.replaceInlineCodes = this.replaceRegex(this.inlineCodeRegex, this.inlineCodeReplacer);\n    this.replaceImages = this.replaceRegex(this.imageRegex, this.imageReplacer);\n    this.replaceLinks = this.replaceRegex(this.linkRegex, this.linkReplacer);\n    this.replaceHeadings = this.replaceRegex(this.headingRegex, this.headingReplacer);\n    this.replaceBoldItalics = this.replaceRegex(this.boldItalicsRegex, this.boldItalicsReplacer);\n    this.replaceceStrikethrough = this.replaceRegex(this.strikethroughRegex, this.strikethroughReplacer);\n    this.replaceBlockquotes = this.replaceRegex(this.blockquoteRegex, this.blockquoteReplacer);\n    this.replaceHorizontalRules = this.replaceRegex(this.horizontalRuleRegex, this.horizontalRuleReplacer);\n    this.replaceUnorderedLists = this.replaceRegex(this.unorderedListRegex, this.unorderedListReplacer);\n    this.replaceOrderedLists = this.replaceRegex(this.orderedListRegex, this.orderedListReplacer);\n    this.replaceParagraphs = this.replaceRegex(this.paragraphRegex, this.paragraphReplacer);\n    // Fix for tab-indexed code blocks\n    this.codeBlockFixRegex = /\\n(<pre>)((\\n|.)*)(<\\/pre>)/g;\n    this.codeBlockFixer = function (fullMatch, tagStart, tagContents, lastMatch, tagEnd) {\n      let lines = \"\";\n      tagContents.split(\"\\n\").forEach(line => {\n        lines += line.substring(1) + \"\\n\";\n      });\n      return tagStart + lines + tagEnd;\n    };\n    this.fixCodeBlocks = this.replaceRegex(this.codeBlockFixRegex, this.codeBlockFixer);\n    // Replacement rule order function for Markdown\n    // Do not use as-is, prefer parseMarkdown as seen below\n    this.replaceMarkdown = function (str) {\n      return this.replaceParagraphs(this.replaceOrderedLists(this.replaceUnorderedLists(this.replaceHorizontalRules(this.replaceBlockquotes(this.replaceceStrikethrough(this.replaceBoldItalics(this.replaceHeadings(this.replaceLinks(this.replaceImages(this.replaceInlineCodes(this.replaceCodeBlocks(str))))))))))));\n    };\n    // Parser for Markdown (fixes code, adds empty lines around for parsing)\n    // Usage: parseMarkdown(strVar)\n    this.parse = function (str) {\n      return this.fixCodeBlocks(this.replaceMarkdown(\"\\n\" + str + \"\\n\")).trim();\n    };\n  }\n}\n\n//# sourceURL=webpack://myLibrary/./dist/esm/MdParser.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HtmlHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlHandler */ \"./dist/esm/HtmlHandler.js\");\n/* harmony import */ var _UndoRedo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UndoRedo */ \"./dist/esm/UndoRedo.js\");\n/* harmony import */ var _ElementInserter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ElementInserter */ \"./dist/esm/ElementInserter.js\");\n\n\n\nconst htmlHD = new _HtmlHandler__WEBPACK_IMPORTED_MODULE_0__.HtmlHandler();\nhtmlHD.onloadInit();\nhtmlHD.TextChangeHandler();\nconst eInserter = new _ElementInserter__WEBPACK_IMPORTED_MODULE_2__.ElementInserter();\neInserter.insertAtCursorPosition(\" elem: string \");\nconst myHistory = new _UndoRedo__WEBPACK_IMPORTED_MODULE_1__.UndoRedojs(5);\nconsole.log(document.getElementById(\"elemsHolderBtn\").children);\n\n//# sourceURL=webpack://myLibrary/./dist/esm/index.js?");

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