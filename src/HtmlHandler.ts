import { UtilityCls } from "./UtilityCls";
import { ElementInserter } from "./ElementInserter";
import { MdParser } from "./MdParser";
import { marked } from "marked";
import { Remarkable } from "remarkable";
export class HtmlHandler {
  constructor(
    private markdownParser: MdParser = new MdParser(),
    private rmkbl = new Remarkable(),
    private mkd = marked,
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
        } else
          this.markdownOutput.innerHTML = "<h1>Edit This Heading To Start</h1>";
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
          "\r\n" + elements[i].getAttribute("data-tag-string")
        );

        this.markdownOutput.innerHTML = this.rmkbl.render(this.markdown.value);
        //this.markdownOutput.innerHTML = this.mkd.parse(this.markdown.value);

        console.log("iteration worked", i);
      });
    }
  }
}
