export class MdParser {
    constructor() {
        /***   Regex Markdown Parser by chalarangelo   ***/
        // Replaces 'regex' with 'replacement' in 'str'
        // Curry function, usage: replaceRegex(regexVar, replacementVar) (strVar)
        this.replaceRegex = function (regex, replacement) {
            return function (str) {
                return str.replace(regex, replacement);
            };
        };
        // Regular expressions for Markdown (a bit strict, but they work)
        this.codeBlockRegex = /((\n\t)(.*))+/g;
        this.inlineCodeRegex = /(`)(.*?)\1/g;
        this.imageRegex = /!\[([^\[]+)\]\(([^\)]+)\)/g;
        this.linkRegex = /\[([^\[]+)\]\(([^\)]+)\)/g;
        this.headingRegex = /\n(#+\s*)(.*)/g;
        this.boldItalicsRegex = /(\*{1,2})(.*?)\1/g;
        this.strikethroughRegex = /(\~\~)(.*?)\1/g;
        this.blockquoteRegex = /\n(&gt;|\>)(.*)/g;
        this.horizontalRuleRegex = /\n((\-{3,})|(={3,}))/g;
        this.unorderedListRegex = /(\n\s*(\-|\+)\s.*)+/g;
        this.orderedListRegex = /(\n\s*([0-9]+\.)\s.*)+/g;
        this.paragraphRegex = /\n+(?!<pre>)(?!<h)(?!<ul>)(?!<blockquote)(?!<hr)(?!\t)([^\n]+)\n/g;
        // Replacer functions for Markdown
        this.codeBlockReplacer = function (fullMatch) {
            return "\n<pre>" + fullMatch + "</pre>";
        };
        this.inlineCodeReplacer = function (fullMatch, tagStart, tagContents) {
            return "<code>" + tagContents + "</code>";
        };
        this.imageReplacer = function (fullMatch, tagTitle, tagURL) {
            return '<img src="' + tagURL + '" alt="' + tagTitle + '" />';
        };
        this.linkReplacer = function (fullMatch, tagTitle, tagURL) {
            return '<a href="' + tagURL + '">' + tagTitle + "</a>";
        };
        this.headingReplacer = function (fullMatch, tagStart, tagContents) {
            return ("\n<h" +
                tagStart.trim().length +
                ">" +
                tagContents +
                "</h" +
                tagStart.trim().length +
                ">");
        };
        this.boldItalicsReplacer = function (fullMatch, tagStart, tagContents) {
            return ("<" +
                (tagStart.trim().length == 1 ? "em" : "strong") +
                ">" +
                tagContents +
                "</" +
                (tagStart.trim().length == 1 ? "em" : "strong") +
                ">");
        };
        this.strikethroughReplacer = function (fullMatch, tagStart, tagContents) {
            return "<del>" + tagContents + "</del>";
        };
        this.blockquoteReplacer = function (fullMatch, tagStart, tagContents) {
            return "\n<blockquote>" + tagContents + "</blockquote>";
        };
        this.horizontalRuleReplacer = function (fullMatch) {
            return "\n<hr />";
        };
        this.unorderedListReplacer = function (fullMatch) {
            let items = "";
            fullMatch
                .trim()
                .split("\n")
                .forEach((item) => {
                items += "<li>" + item.substring(2) + "</li>";
            });
            return "\n<ul>" + items + "</ul>";
        };
        this.orderedListReplacer = function (fullMatch) {
            let items = "";
            fullMatch
                .trim()
                .split("\n")
                .forEach((item) => {
                items += "<li>" + item.substring(item.indexOf(".") + 2) + "</li>";
            });
            return "\n<ol>" + items + "</ol>";
        };
        this.paragraphReplacer = function (fullMatch, tagContents) {
            return "<p>" + tagContents + "</p>";
        };
        // Rules for Markdown parsing (use in order of appearance for best results)
        this.replaceCodeBlocks = this.replaceRegex(this.codeBlockRegex, this.codeBlockReplacer);
        this.replaceInlineCodes = this.replaceRegex(this.inlineCodeRegex, this.inlineCodeReplacer);
        this.replaceImages = this.replaceRegex(this.imageRegex, this.imageReplacer);
        this.replaceLinks = this.replaceRegex(this.linkRegex, this.linkReplacer);
        this.replaceHeadings = this.replaceRegex(this.headingRegex, this.headingReplacer);
        this.replaceBoldItalics = this.replaceRegex(this.boldItalicsRegex, this.boldItalicsReplacer);
        this.replaceceStrikethrough = this.replaceRegex(this.strikethroughRegex, this.strikethroughReplacer);
        this.replaceBlockquotes = this.replaceRegex(this.blockquoteRegex, this.blockquoteReplacer);
        this.replaceHorizontalRules = this.replaceRegex(this.horizontalRuleRegex, this.horizontalRuleReplacer);
        this.replaceUnorderedLists = this.replaceRegex(this.unorderedListRegex, this.unorderedListReplacer);
        this.replaceOrderedLists = this.replaceRegex(this.orderedListRegex, this.orderedListReplacer);
        this.replaceParagraphs = this.replaceRegex(this.paragraphRegex, this.paragraphReplacer);
        // Fix for tab-indexed code blocks
        this.codeBlockFixRegex = /\n(<pre>)((\n|.)*)(<\/pre>)/g;
        this.codeBlockFixer = function (fullMatch, tagStart, tagContents, lastMatch, tagEnd) {
            let lines = "";
            tagContents.split("\n").forEach((line) => {
                lines += line.substring(1) + "\n";
            });
            return tagStart + lines + tagEnd;
        };
        this.fixCodeBlocks = this.replaceRegex(this.codeBlockFixRegex, this.codeBlockFixer);
        // Replacement rule order function for Markdown
        // Do not use as-is, prefer parseMarkdown as seen below
        this.replaceMarkdown = function (str) {
            return this.replaceParagraphs(this.replaceOrderedLists(this.replaceUnorderedLists(this.replaceHorizontalRules(this.replaceBlockquotes(this.replaceceStrikethrough(this.replaceBoldItalics(this.replaceHeadings(this.replaceLinks(this.replaceImages(this.replaceInlineCodes(this.replaceCodeBlocks(str))))))))))));
        };
        // Parser for Markdown (fixes code, adds empty lines around for parsing)
        // Usage: parseMarkdown(strVar)
        this.parse = function (str) {
            return this.fixCodeBlocks(this.replaceMarkdown("\n" + str + "\n")).trim();
        };
    }
}
//# sourceMappingURL=MdParser.js.map