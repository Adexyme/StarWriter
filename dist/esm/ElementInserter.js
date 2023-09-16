"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementInserter = void 0;
const UtilityCls_1 = require("./UtilityCls");
class ElementInserter {
    constructor(cursorPosition = (document.getElementById(UtilityCls_1.UtilityCls.inputElement))) {
        this.cursorPosition = cursorPosition;
        this.insertAtCursorPosition = (elem) => {
            var curPos = this.cursorPosition.selectionStart;
            console.log(curPos);
            let x = this.cursorPosition.value;
            this.cursorPosition.value = x.slice(0, curPos) + elem + x.slice(curPos);
            const len = curPos + elem.length;
            this.cursorPosition.focus();
            this.cursorPosition.selectionEnd = len;
        };
    }
}
exports.ElementInserter = ElementInserter;
//# sourceMappingURL=ElementInserter.js.map