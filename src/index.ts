import { HtmlHandler } from "HtmlHandler";
import { UndoRedojs } from "UndoRedo";
const htmlHD = new HtmlHandler();
htmlHD.TextChangeHandler("dummy", "dummy");
const myHistory = new UndoRedojs(5);
