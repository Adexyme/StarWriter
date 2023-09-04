import { UtilityCls } from "./UtilityCls";
//import { MarkdownParser } from "./MarkdownParser";
import { MdParser } from "./MdParser";

export class HtmlHandler {
  constructor(
    private utilityCls = UtilityCls,
    private markdownParser: MdParser = new MdParser()
  ) {}
  public TextChangeHandler(): void {
    let markdown = <HTMLTextAreaElement>(
      document.getElementById(this.utilityCls.inputElement)
    );
    let markdownOutput = <HTMLLabelElement>(
      document.getElementById(this.utilityCls.outputElement)
    );
    if (markdown !== null) {
      markdown.onkeyup = (e) => {
        if (markdown.value) {
          markdownOutput.innerHTML = this.markdownParser.parse(markdown.value);
        } else markdownOutput.innerHTML = "<p></p>";
      };
    }
  }
}
