import { HtmlHandler } from "./HtmlHandler";
import { UndoRedojs } from "./UndoRedo";
import { ElementInserter } from "./ElementInserter";

const htmlHD = new HtmlHandler();
htmlHD.onloadIOElemInit();
htmlHD.TextChangeHandler();
const eInserter = new ElementInserter();
eInserter.insertAtCursorPosition(" elem: string ");
const myHistory = new UndoRedojs(5);
console.log(document.getElementById("elemsHolderBtn").children);
