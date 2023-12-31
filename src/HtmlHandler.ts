import { UtilityCls } from "./UtilityCls";
import { ElementInserter } from "./ElementInserter";
import { MdParser } from "./MdParser";
import { marked } from "marked";
import { Remarkable } from "remarkable";
import { UndoRedojs } from "./UndoRedo";
import { AddEvtListener } from "./AddEvtListener";
import { History } from "stateshot";
import { jsPDF } from "jspdf";
import { FileHandler } from "./FileHandler";
import { ElementClassManager } from "./ElementClassManager";
import { ElementClass } from "./ElementClass";
export class HtmlHandler {
  constructor(
    private histry = { history: "" },
    private fHandler = FileHandler,
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
  public setMarkdown = (mkd: string) => {
    this.markdown.value = mkd;
  };
  public setMarkdownOutput = (mkd: string) => {
    this.markdownOutput.innerHTML = mkd;
  };

  public getMarkdown() {
    return this.markdown.value;
  }
  public getMarkdownOutput() {
    return this.markdownOutput.innerHTML;
  }
  public TextChangeHandler(): void {
    if (this.markdown !== null) {
      this.markdown.onkeyup = (e) => {
        if (this.markdown.value) {
          this.markdownOutput.innerHTML = this.rmkbl.render(
            this.markdown.value
          );

          ElementClassManager.addClass2ManyElems(ElementClass.elemClsDetailArr);

          this.histry.history = this.markdown.value;
          this.unreHistory.pushSync(this.histry);
          console.log("history lenght: ", this.unreHistory.length);
        } else {
          this.markdownOutput.innerHTML = "<h1>Edit This Heading To Star</h1>";

          ElementClassManager.addClass2ManyElems(ElementClass.elemClsDetailArr);
        }
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

    AddEvtListener.toElem("saveFileBTN", "click", () => {
      this.fHandler.saveFile();
    });

    AddEvtListener.toElem("createNewFileBTN", "click", () => {
      this.fHandler.createNewFile();
    });
    //this.setMarkdownOutput(this.getMarkdown());
    this.markdownOutput.innerHTML = this.rmkbl.render(this.markdown.value);

    ElementClassManager.addClass2ManyElems(ElementClass.elemClsDetailArr);
  }

  public onloadMarkdownTagMenuInit(): void {
    const elements = this.markdownTagMenuHolder.children;

    for (let i = 0; i < elements.length; i++) {
      console.log(elements[i]);

      elements[i].addEventListener("click", () => {
        this.eInserter.insertAtCursorPosition(
          "\r\n" + elements[i].getAttribute("data-tag-string")
        );
        //this.setMarkdownOutput(this.getMarkdown());
        this.markdownOutput.innerHTML = this.rmkbl.render(this.markdown.value);

        ElementClassManager.addClass2ManyElems(ElementClass.elemClsDetailArr);

        this.histry.history = this.markdown.value;
        this.unreHistory.pushSync(this.histry);

        console.log("iteration worked", i);
      });
    }
  }
}
