import { ElementInserter } from "./ElementInserter";
import { MdParser } from "./MdParser";
import { marked } from "marked";
import { Remarkable } from "remarkable";
import { UndoRedojs } from "./UndoRedo";
import { History } from "stateshot";
import { jsPDF } from "jspdf";
export declare class HtmlHandler {
    private histry;
    private markdownParser;
    private rmkbl;
    private mkd;
    private unrejs;
    private unreHistory;
    private doc;
    private eInserter;
    private markdown;
    private markdownOutput;
    private markdownTagMenuHolder;
    constructor(histry?: {
        history: string;
    }, markdownParser?: MdParser, rmkbl?: Remarkable, mkd?: typeof marked, unrejs?: UndoRedojs, unreHistory?: History<any>, doc?: jsPDF, eInserter?: ElementInserter, markdown?: HTMLTextAreaElement, markdownOutput?: HTMLLabelElement, markdownTagMenuHolder?: HTMLDivElement);
    TextChangeHandler(): void;
    onloadIOElemInit(): void;
    onloadMarkdownTagMenuInit(): void;
}
