"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HtmlHandler_1 = require("./HtmlHandler");
const ElementClassManager_1 = require("./ElementClassManager");
const htmlHD = new HtmlHandler_1.HtmlHandler();
htmlHD.onloadIOElemInit();
htmlHD.TextChangeHandler();
htmlHD.onloadMarkdownTagMenuInit();
ElementClassManager_1.ElementClassManager.addClass("code", [
    "text-bg-dark",
    "border",
    "border-3",
    "border-primary",
    "rounded-3",
    "p-3",
    "my-auto",
    "mx-1",
    "w-75",
]);
ElementClassManager_1.ElementClassManager.addClass("img", ["mx-auto", "d-block"]);
//# sourceMappingURL=index.js.map