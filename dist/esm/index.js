"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HtmlHandler_1 = require("./HtmlHandler");
const ElementClassManager_1 = require("./ElementClassManager");
const FileHandler_1 = require("./FileHandler");
const ElementClass_1 = require("./ElementClass");
const htmlHD = new HtmlHandler_1.HtmlHandler();
htmlHD.onloadIOElemInit();
htmlHD.TextChangeHandler();
htmlHD.onloadMarkdownTagMenuInit();
FileHandler_1.FileHandler.HtmlHandler = htmlHD;
ElementClassManager_1.ElementClassManager.addClass2ManyElems(ElementClass_1.ElementClass.elemClsDetailArr);
//# sourceMappingURL=index.js.map