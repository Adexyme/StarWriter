"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HtmlHandler_1 = require("./HtmlHandler");
const htmlHD = new HtmlHandler_1.HtmlHandler();
htmlHD.onloadIOElemInit();
htmlHD.TextChangeHandler();
htmlHD.onloadMarkdownTagMenuInit();
console.log(document.getElementById("elemsHolderBtn").children);
//# sourceMappingURL=index.js.map