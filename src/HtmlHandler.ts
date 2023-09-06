import { UtilityCls } from "./UtilityCls";
import { ElementInserter } from "./ElementInserter";
import { MdParser } from "./MdParser";
import { marked } from "marked";
import { Remarkable } from "remarkable";
import { UndoRedojs } from "./UndoRedo";
import { AddEvtListener } from "./AddEvtListener";
import { History } from "stateshot";
import { jsPDF } from "jspdf";

export class HtmlHandler {
  constructor(
    private histry = { history: "" },
    //private markdownParser: MdParser = new MdParser(),
    private rmkbl = new Remarkable(),
    //private mkd = marked,
    //private unrejs = new UndoRedojs(0),
    private unreHistory = new History(),
    private doc = new jsPDF(),
    private eInserter: ElementInserter = new ElementInserter(),
    private markdown = <HTMLTextAreaElement>(
      document.getElementById(UtilityCls.inputElement)
    ),
    private markdownOutput = <HTMLLabelElement>(
      document.getElementById(UtilityCls.outputElement)
    ),
    private markdownTagMenuHolder = <HTMLDivElement>(
      document.getElementById(UtilityCls.markdownTagMenuholderID)
    )
  ) {}
  public TextChangeHandler(): void {
    if (this.markdown !== null) {
      this.markdown.onkeyup = (e) => {
        if (this.markdown.value) {
          this.markdownOutput.innerHTML = this.rmkbl.render(
            this.markdown.value
          );
          //this.markdownOutput.innerHTML = this.mkd.parse(this.markdown.value);
          this.histry.history = this.markdown.value;
          this.unreHistory.pushSync(this.histry);
          console.log("history lenght: ", this.unreHistory.length);
        } else
          this.markdownOutput.innerHTML = "<h1>Edit This Heading To Star</h1>";
      };
    }
  }
  public onloadIOElemInit(): void {
    AddEvtListener.toElem("undoContainer", "click", () => {
      this.markdown.value = this.unreHistory.undo().get().history;
      console.log("history lenght: ", this.unreHistory.length);
    });
    AddEvtListener.toElem("redoContainer", "click", () => {
      this.markdown.value = this.unreHistory.redo().get().history;
      console.log("history lenght: ", this.unreHistory.length);
    });
    AddEvtListener.toElem("docExporter", "click", () => {
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

    this.markdownOutput.innerHTML = this.rmkbl.render(this.markdown.value);
  }

  public onloadMarkdownTagMenuInit(): void {
    const elements = this.markdownTagMenuHolder.children;

    for (let i = 0; i < elements.length; i++) {
      console.log(elements[i]);

      elements[i].addEventListener("click", () => {
        this.eInserter.insertAtCursorPosition(
          "\r\n" + elements[i].getAttribute("data-tag-string")
        );

        this.markdownOutput.innerHTML = this.rmkbl.render(this.markdown.value);
        //this.markdownOutput.innerHTML = this.mkd.parse(this.markdown.value);
        this.histry.history = this.markdown.value;
        this.unreHistory.pushSync(this.histry);

        console.log("iteration worked", i);
      });
    }
  }
}
