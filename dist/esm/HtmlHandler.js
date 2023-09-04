import { UtilityCls } from "./UtilityCls";
import { MarkdownParser } from "./MarkdownParser";
export class HtmlHandler {
    constructor(utilityCls = UtilityCls, markdownParser = new MarkdownParser()) {
        this.utilityCls = utilityCls;
        this.markdownParser = markdownParser;
    }
    TextChangeHandler() {
        let markdown = (document.getElementById(this.utilityCls.inputElement));
        let markdownOutput = (document.getElementById(this.utilityCls.outputElement));
        if (markdown !== null) {
            markdown.onkeyup = (e) => {
                if (markdown.value) {
                    markdownOutput.innerHTML = MarkdownParser.parse(markdown.value);
                }
                else
                    markdownOutput.innerHTML = "<p></p>";
            };
        }
    }
}
//# sourceMappingURL=HtmlHandler.js.map