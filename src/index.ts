import { HtmlHandler } from "./HtmlHandler";
import { UndoRedojs } from "./UndoRedo";

const htmlHD = new HtmlHandler();
htmlHD.onloadIOElemInit();
htmlHD.TextChangeHandler();
htmlHD.onloadMarkdownTagMenuInit();
const myHistory = new UndoRedojs(5);
console.log(document.getElementById("elemsHolderBtn").children);
