import { ElementInserter } from "./ElementInserter";
import { MdParser } from "./MdParser";
export declare class HtmlHandler {
    private markdownParser;
    private eInserter;
    private markdown;
    private markdownOutput;
    private markdownTagMenuHolder;
    constructor(markdownParser?: MdParser, eInserter?: ElementInserter, markdown?: HTMLTextAreaElement, markdownOutput?: HTMLLabelElement, markdownTagMenuHolder?: HTMLDivElement);
    TextChangeHandler(): void;
    onloadIOElemInit(): void;
    onloadMarkdownTagMenuInit(): void;
}
