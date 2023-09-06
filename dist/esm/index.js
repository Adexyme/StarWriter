"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HtmlHandler_1 = require("./HtmlHandler");
const UndoRedo_1 = require("./UndoRedo");
const htmlHD = new HtmlHandler_1.HtmlHandler();
htmlHD.onloadIOElemInit();
htmlHD.TextChangeHandler();
htmlHD.onloadMarkdownTagMenuInit();
const myHistory = new UndoRedo_1.UndoRedojs(5);
console.log(document.getElementById("elemsHolderBtn").children);
//# sourceMappingURL=index.js.map