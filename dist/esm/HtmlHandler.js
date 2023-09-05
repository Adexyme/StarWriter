import { UtilityCls } from "./UtilityCls";
//import { MarkdownParser } from "./MarkdownParser";
import { MdParser } from "./MdParser";
export class HtmlHandler {
    constructor(markdownParser = new MdParser(), markdown = (document.getElementById(UtilityCls.inputElement)), markdownOutput = (document.getElementById(UtilityCls.outputElement))) {
        this.markdownParser = markdownParser;
        this.markdown = markdown;
        this.markdownOutput = markdownOutput;
    }
    TextChangeHandler() {
        if (this.markdown !== null) {
            this.markdown.onkeyup = (e) => {
                if (this.markdown.value) {
                    this.markdownOutput.innerHTML = this.markdownParser.parse(this.markdown.value);
                }
                else
                    this.markdownOutput.innerHTML = "<p></p>";
            };
        }
    }
    onloadInit() {
        this.markdownOutput.innerHTML = this.markdownParser.parse(this.markdown.value);
    }
}
//# sourceMappingURL=HtmlHandler.js.map