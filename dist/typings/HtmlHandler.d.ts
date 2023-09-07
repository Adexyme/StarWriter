import { ElementInserter } from "./ElementInserter";
import { Remarkable } from "remarkable";
import { History } from "stateshot";
import { jsPDF } from "jspdf";
export declare class HtmlHandler {
    private histry;
    private rmkbl;
    private unreHistory;
    private doc;
    private eInserter;
    private markdown;
    private markdownOutput;
    private markdownTagMenuHolder;
    constructor(histry?: {
        history: string;
    }, rmkbl?: Remarkable, unreHistory?: History<any>, doc?: jsPDF, eInserter?: ElementInserter, markdown?: HTMLTextAreaElement, markdownOutput?: HTMLLabelElement, markdownTagMenuHolder?: HTMLDivElement);
    TextChangeHandler(): void;
    onloadIOElemInit(): void;
    onloadMarkdownTagMenuInit(): void;
}
