"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlHandler = void 0;
const UtilityCls_1 = require("./UtilityCls");
const ElementInserter_1 = require("./ElementInserter");
const MdParser_1 = require("./MdParser");
const remarkable_1 = require("remarkable");
class HtmlHandler {
    constructor(markdownParser = new MdParser_1.MdParser(), eInserter = new ElementInserter_1.ElementInserter(), markdown = (document.getElementById(UtilityCls_1.UtilityCls.inputElement)), markdownOutput = (document.getElementById(UtilityCls_1.UtilityCls.outputElement)), markdownTagMenuHolder = (document.getElementById(UtilityCls_1.UtilityCls.markdownTagMenuholderID))) {
        this.markdownParser = markdownParser;
        this.eInserter = eInserter;
        this.markdown = markdown;
        this.markdownOutput = markdownOutput;
        this.markdownTagMenuHolder = markdownTagMenuHolder;
    }
    TextChangeHandler() {
        if (this.markdown !== null) {
            this.markdown.onkeyup = (e) => {
                if (this.markdown.value) {
                    var md = new remarkable_1.Remarkable();
                    this.markdownOutput.innerHTML = md.render(this.markdown.value);
                    //this.markdownOutput.innerHTML = marked.parse(this.markdown.value);
                }
                else
                    this.markdownOutput.innerHTML = "<p></p>";
            };
        }
    }
    onloadIOElemInit() {
        this.markdownOutput.innerHTML = this.markdownParser.parse(this.markdown.value);
    }
    onloadMarkdownTagMenuInit() {
        const elements = this.markdownTagMenuHolder.children;
        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i]);
            elements[i].addEventListener("click", () => {
                this.eInserter.insertAtCursorPosition("\r\n" + elements[i].getAttribute("data-tag-string"));
                var md = new remarkable_1.Remarkable();
                this.markdownOutput.innerHTML = md.render(this.markdown.value);
                //this.markdownOutput.innerHTML = marked.parse(this.markdown.value);
                console.log("iteration worked", i);
            });
        }
    }
}
exports.HtmlHandler = HtmlHandler;
//# sourceMappingURL=HtmlHandler.js.map