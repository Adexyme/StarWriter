import { UtilityCls } from "UtilityCls";
import { MarkdownParser } from "MarkdownParser";

export class HtmlHandler {
  constructor(
    private utilityCls = UtilityCls,
    private markdownParser: MarkdownParser = new MarkdownParser()
  ) {}
  public TextChangeHandler(id: string, output: string): void {
    let markdown = <HTMLTextAreaElement>(
      document.getElementById(this.utilityCls.inputElement)
    );
    let markdownOutput = <HTMLLabelElement>(
      document.getElementById(this.utilityCls.outputElement)
    );
    if (markdown !== null) {
      markdown.onkeyup = (e) => {
        if (markdown.value) {
          markdownOutput.innerHTML = MarkdownParser.parse(markdown.value);
        } else markdownOutput.innerHTML = "<p></p>";
      };
    }
  }
}
