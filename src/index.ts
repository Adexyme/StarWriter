import { HtmlHandler } from "./HtmlHandler";
import { ElementClassManager } from "./ElementClassManager";

const htmlHD = new HtmlHandler();
htmlHD.onloadIOElemInit();
htmlHD.TextChangeHandler();
htmlHD.onloadMarkdownTagMenuInit();
ElementClassManager.addClass("code", [
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

ElementClassManager.addClass("img", ["mx-auto", "d-block"]);
