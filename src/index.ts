import { HtmlHandler } from "./HtmlHandler";
import { ElementClassManager } from "./ElementClassManager";
import { FileHandler } from "./FileHandler";
import PageLoad from "@manz/pageload";
import { LoaderSpinner } from "./LoaderSpinner";
import html2pdf from "html2pdf.js";
import { ElementClass } from "./ElementClass";

const htmlHD = new HtmlHandler();
htmlHD.onloadIOElemInit();
htmlHD.TextChangeHandler();
htmlHD.onloadMarkdownTagMenuInit();
FileHandler.HtmlHandler = htmlHD;
ElementClassManager.addClass2ManyElems(ElementClass.elemClsDetailArr);
