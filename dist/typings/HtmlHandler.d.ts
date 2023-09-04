import { UtilityCls } from "./UtilityCls";
import { MdParser } from "./MdParser";
export declare class HtmlHandler {
    private utilityCls;
    private markdownParser;
    constructor(utilityCls?: typeof UtilityCls, markdownParser?: MdParser);
    TextChangeHandler(): void;
}
