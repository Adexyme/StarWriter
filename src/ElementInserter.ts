import { UtilityCls } from "./UtilityCls";

export class ElementInserter {
  constructor(
    private cursorPosition = <HTMLTextAreaElement>(
      document.getElementById(UtilityCls.inputElement)
    )
  ) {}

  public insertAtCursorPosition = (elem: string) => {
    var curPos = this.cursorPosition.selectionStart;
    console.log(curPos);
    let x = this.cursorPosition.value;
    this.cursorPosition.value = x.slice(0, curPos) + elem + x.slice(curPos);
    const len = curPos + elem.length;
    this.cursorPosition.focus();
    this.cursorPosition.selectionEnd = len;
  };
}
