"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlHandler = void 0;
const UtilityCls_1 = require("./UtilityCls");
const ElementInserter_1 = require("./ElementInserter");
const MdParser_1 = require("./MdParser");
const marked_1 = require("marked");
const remarkable_1 = require("remarkable");
const UndoRedo_1 = require("./UndoRedo");
const AddEvtListener_1 = require("./AddEvtListener");
const stateshot_1 = require("stateshot");
const jspdf_1 = require("jspdf");
class HtmlHandler {
    constructor(histry = { history: "" }, markdownParser = new MdParser_1.MdParser(), rmkbl = new remarkable_1.Remarkable(), mkd = marked_1.marked, unrejs = new UndoRedo_1.UndoRedojs(0), unreHistory = new stateshot_1.History(), doc = new jspdf_1.jsPDF(), eInserter = new ElementInserter_1.ElementInserter(), markdown = (document.getElementById(UtilityCls_1.UtilityCls.inputElement)), markdownOutput = (document.getElementById(UtilityCls_1.UtilityCls.outputElement)), markdownTagMenuHolder = (document.getElementById(UtilityCls_1.UtilityCls.markdownTagMenuholderID))) {
        this.histry = histry;
        this.markdownParser = markdownParser;
        this.rmkbl = rmkbl;
        this.mkd = mkd;
        this.unrejs = unrejs;
        this.unreHistory = unreHistory;
        this.doc = doc;
        this.eInserter = eInserter;
        this.markdown = markdown;
        this.markdownOutput = markdownOutput;
        this.markdownTagMenuHolder = markdownTagMenuHolder;
    }
    TextChangeHandler() {
        if (this.markdown !== null) {
            this.markdown.onkeyup = (e) => {
                if (this.markdown.value) {
                    this.markdownOutput.innerHTML = this.rmkbl.render(this.markdown.value);
                    //this.markdownOutput.innerHTML = this.mkd.parse(this.markdown.value);
                    this.histry.history = this.markdown.value;
                    this.unreHistory.pushSync(this.histry);
                    console.log("history lenght: ", this.unreHistory.length);
                }
                else
                    this.markdownOutput.innerHTML = "<h1>Edit This Heading To Star</h1>";
            };
        }
    }
    onloadIOElemInit() {
        AddEvtListener_1.AddEvtListener.toElem("undoContainer", "click", () => {
            this.markdown.value = this.unreHistory.undo().get().history;
            console.log("history lenght: ", this.unreHistory.length);
        });
        AddEvtListener_1.AddEvtListener.toElem("redoContainer", "click", () => {
            this.markdown.value = this.unreHistory.redo().get().history;
            console.log("history lenght: ", this.unreHistory.length);
        });
        AddEvtListener_1.AddEvtListener.toElem("docExporter", "click", () => {
            this.doc.html(this.markdownOutput.innerHTML, {
                callback: function (doc) {
                    doc.save();
                },
                autoPaging: "text",
                x: 10,
                y: 10,
                width: 180,
                windowWidth: 1000,
            });
            console.log("PDF is being generated ");
        });
        this.markdownOutput.innerHTML = this.markdownParser.parse(this.markdown.value);
    }
    onloadMarkdownTagMenuInit() {
        const elements = this.markdownTagMenuHolder.children;
        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i]);
            elements[i].addEventListener("click", () => {
                this.eInserter.insertAtCursorPosition("\r\n" + elements[i].getAttribute("data-tag-string"));
                this.markdownOutput.innerHTML = this.rmkbl.render(this.markdown.value);
                //this.markdownOutput.innerHTML = this.mkd.parse(this.markdown.value);
                this.histry.history = this.markdown.value;
                this.unreHistory.pushSync(this.histry);
                console.log("iteration worked", i);
            });
        }
    }
}
exports.HtmlHandler = HtmlHandler;
//# sourceMappingURL=HtmlHandler.js.map