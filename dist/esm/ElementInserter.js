import { UtilityCls } from "./UtilityCls";
export class ElementInserter {
    constructor(cursorPosition = (document.getElementById(UtilityCls.inputElement))) {
        this.cursorPosition = cursorPosition;
        this.insertAtCursorPosition = (elem) => {
            var curPos = this.cursorPosition.selectionStart;
            console.log(curPos);
            let x = this.cursorPosition.value;
            this.cursorPosition.value = x.slice(0, curPos) + elem + x.slice(curPos);
        };
    }
}
//# sourceMappingURL=ElementInserter.js.map