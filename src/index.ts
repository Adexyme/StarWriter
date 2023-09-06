import { HtmlHandler } from "./HtmlHandler";

const htmlHD = new HtmlHandler();
htmlHD.onloadIOElemInit();
htmlHD.TextChangeHandler();
htmlHD.onloadMarkdownTagMenuInit();

console.log(document.getElementById("elemsHolderBtn").children);
