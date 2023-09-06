"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownParser = void 0;
class MarkdownParser {
}
exports.MarkdownParser = MarkdownParser;
//private utilityCls: UtilityCls;
MarkdownParser.parse = (text) => {
    const toHTML = text
        .replace(/^### (.*$)/gim, "<h3>$1</h3>") // h3 tag
        .replace(/^## (.*$)/gim, "<h2>$1</h2>") // h2 tag
        .replace(/^# (.*$)/gim, "<h1>$1</h1>") // h1 tag
        .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>") // bold text
        .replace(/\*(.*)\*/gim, "<i>$1</i>"); // italic text
    return toHTML.trim(); // using trim method to remove whitespace
};
//# sourceMappingURL=MarkdownParser.js.map