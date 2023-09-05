import { MdParser } from "./MdParser";
export declare class HtmlHandler {
    private markdownParser;
    private markdown;
    private markdownOutput;
    constructor(markdownParser?: MdParser, markdown?: HTMLTextAreaElement, markdownOutput?: HTMLLabelElement);
    TextChangeHandler(): void;
    onloadInit(): void;
}
