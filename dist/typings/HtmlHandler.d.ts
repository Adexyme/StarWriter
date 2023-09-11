import { ElementInserter } from "./ElementInserter";
import { Remarkable } from "remarkable";
import { History } from "stateshot";
import { jsPDF } from "jspdf";
import { FileHandler } from "./FileHandler";
export declare class HtmlHandler {
    private histry;
    private fHandler;
    private rmkbl;
    private unreHistory;
    private doc;
    private eInserter;
    private markdown;
    private markdownOutput;
    private markdownTagMenuHolder;
    constructor(histry?: {
        history: string;
    }, fHandler?: typeof FileHandler, rmkbl?: Remarkable, unreHistory?: History<any>, doc?: jsPDF, eInserter?: ElementInserter, markdown?: HTMLTextAreaElement, markdownOutput?: HTMLLabelElement, markdownTagMenuHolder?: HTMLDivElement);
    setMarkdown: (mkd: string) => void;
    setMarkdownOutput: (mkd: string) => void;
    getMarkdown(): string;
    getMarkdownOutput(): string;
    TextChangeHandler(): void;
    onloadIOElemInit(): void;
    onloadMarkdownTagMenuInit(): void;
}
