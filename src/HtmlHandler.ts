import { UtilityCls } from "./UtilityCls";
import { ElementInserter } from "./ElementInserter";
import { MdParser } from "./MdParser";

export class HtmlHandler {
  constructor(
    private markdownParser: MdParser = new MdParser(),
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
          this.markdownOutput.innerHTML = this.markdownParser.parse(
            this.markdown.value
          );
        } else this.markdownOutput.innerHTML = "<p></p>";
      };
    }
  }
  public onloadIOElemInit(): void {
    this.markdownOutput.innerHTML = this.markdownParser.parse(
      this.markdown.value
    );
  }

  public onloadMarkdownTagMenuInit(): void {
    const elements = this.markdownTagMenuHolder.children;

    for (let i = 0; i < elements.length; i++) {
      console.log(elements[i]);

      elements[i].addEventListener("click", () => {
        this.eInserter.insertAtCursorPosition(
          elements[i].getAttribute("data-tag-string")
        );
        console.log("iteration worked", i);
      });
    }
  }
}
