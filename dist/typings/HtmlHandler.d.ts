import { UtilityCls } from "./UtilityCls";
import { MarkdownParser } from "./MarkdownParser";
export declare class HtmlHandler {
    private utilityCls;
    private markdownParser;
    constructor(utilityCls?: typeof UtilityCls, markdownParser?: MarkdownParser);
    TextChangeHandler(): void;
}
