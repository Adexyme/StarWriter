export class MdParser {
  /***   Regex Markdown Parser by chalarangelo   ***/
  // Replaces 'regex' with 'replacement' in 'str'
  // Curry function, usage: replaceRegex(regexVar, replacementVar) (strVar)
  private replaceRegex = function (regex, replacement) {
    return function (str) {
      return str.replace(regex, replacement);
    };
  };
  // Regular expressions for Markdown (a bit strict, but they work)
  private codeBlockRegex = /((\n\t)(.*))+/g;
  private inlineCodeRegex = /(`)(.*?)\1/g;
  private imageRegex = /!\[([^\[]+)\]\(([^\)]+)\)/g;
  private linkRegex = /\[([^\[]+)\]\(([^\)]+)\)/g;
  private headingRegex = /\n(#+\s*)(.*)/g;
  private boldItalicsRegex = /(\*{1,2})(.*?)\1/g;
  private strikethroughRegex = /(\~\~)(.*?)\1/g;
  private blockquoteRegex = /\n(&gt;|\>)(.*)/g;
  private horizontalRuleRegex = /\n((\-{3,})|(={3,}))/g;
  private unorderedListRegex = /(\n\s*(\-|\+)\s.*)+/g;
  private orderedListRegex = /(\n\s*([0-9]+\.)\s.*)+/g;
  private paragraphRegex =
    /\n+(?!<pre>)(?!<h)(?!<ul>)(?!<blockquote)(?!<hr)(?!\t)([^\n]+)\n/g;
  // Replacer functions for Markdown
  private codeBlockReplacer = function (fullMatch) {
    return "\n<pre>" + fullMatch + "</pre>";
  };
  private inlineCodeReplacer = function (fullMatch, tagStart, tagContents) {
    return (
      '<div class="row "><div class="col  text-bg-dark border  border-3 border-primary rounded-3 p-3 my-auto  mx-1 "><code  class=" text-white">' +
      tagContents +
      "</code></div></div>"
    );
  };
  private imageReplacer = function (fullMatch, tagTitle, tagURL) {
    return '<img src="' + tagURL + '" alt="' + tagTitle + '" />';
  };
  private linkReplacer = function (fullMatch, tagTitle, tagURL) {
    return '<a href="' + tagURL + '">' + tagTitle + "</a>";
  };
  private headingReplacer = function (fullMatch, tagStart, tagContents) {
    return (
      "\n<h" +
      tagStart.trim().length +
      ">" +
      tagContents +
      "</h" +
      tagStart.trim().length +
      ">"
    );
  };
  private boldItalicsReplacer = function (fullMatch, tagStart, tagContents) {
    return (
      "<" +
      (tagStart.trim().length == 1 ? "em" : "strong") +
      ">" +
      tagContents +
      "</" +
      (tagStart.trim().length == 1 ? "em" : "strong") +
      ">"
    );
  };
  private strikethroughReplacer = function (fullMatch, tagStart, tagContents) {
    return "<del>" + tagContents + "</del>";
  };
  private blockquoteReplacer = function (fullMatch, tagStart, tagContents) {
    return "\n<blockquote>" + tagContents + "</blockquote>";
  };
  private horizontalRuleReplacer = function (fullMatch) {
    return "\n<hr />";
  };
  private unorderedListReplacer = function (fullMatch) {
    let items = "";
    fullMatch
      .trim()
      .split("\n")
      .forEach((item) => {
        items += "<li>" + item.substring(2) + "</li>";
      });
    return "\n<ul>" + items + "</ul>";
  };
  private orderedListReplacer = function (fullMatch) {
    let items = "";
    fullMatch
      .trim()
      .split("\n")
      .forEach((item) => {
        items += "<li>" + item.substring(item.indexOf(".") + 2) + "</li>";
      });
    return "\n<ol>" + items + "</ol>";
  };
  private paragraphReplacer = function (fullMatch, tagContents) {
    return "<p>" + tagContents + "</p>";
  };
  // Rules for Markdown parsing (use in order of appearance for best results)
  private replaceCodeBlocks = this.replaceRegex(
    this.codeBlockRegex,
    this.codeBlockReplacer
  );
  private replaceInlineCodes = this.replaceRegex(
    this.inlineCodeRegex,
    this.inlineCodeReplacer
  );
  private replaceImages = this.replaceRegex(
    this.imageRegex,
    this.imageReplacer
  );
  private replaceLinks = this.replaceRegex(this.linkRegex, this.linkReplacer);
  private replaceHeadings = this.replaceRegex(
    this.headingRegex,
    this.headingReplacer
  );
  private replaceBoldItalics = this.replaceRegex(
    this.boldItalicsRegex,
    this.boldItalicsReplacer
  );
  private replaceceStrikethrough = this.replaceRegex(
    this.strikethroughRegex,
    this.strikethroughReplacer
  );
  private replaceBlockquotes = this.replaceRegex(
    this.blockquoteRegex,
    this.blockquoteReplacer
  );
  private replaceHorizontalRules = this.replaceRegex(
    this.horizontalRuleRegex,
    this.horizontalRuleReplacer
  );
  private replaceUnorderedLists = this.replaceRegex(
    this.unorderedListRegex,
    this.unorderedListReplacer
  );
  private replaceOrderedLists = this.replaceRegex(
    this.orderedListRegex,
    this.orderedListReplacer
  );
  private replaceParagraphs = this.replaceRegex(
    this.paragraphRegex,
    this.paragraphReplacer
  );
  // Fix for tab-indexed code blocks
  private codeBlockFixRegex = /\n(<pre>)((\n|.)*)(<\/pre>)/g;
  private codeBlockFixer = function (
    fullMatch,
    tagStart,
    tagContents,
    lastMatch,
    tagEnd
  ) {
    let lines = "";
    tagContents.split("\n").forEach((line) => {
      lines += line.substring(1) + "\n";
    });
    return tagStart + lines + tagEnd;
  };
  private fixCodeBlocks = this.replaceRegex(
    this.codeBlockFixRegex,
    this.codeBlockFixer
  );
  // Replacement rule order function for Markdown
  // Do not use as-is, prefer parseMarkdown as seen below
  private replaceMarkdown = function (str) {
    return this.replaceParagraphs(
      this.replaceOrderedLists(
        this.replaceUnorderedLists(
          this.replaceHorizontalRules(
            this.replaceBlockquotes(
              this.replaceceStrikethrough(
                this.replaceBoldItalics(
                  this.replaceHeadings(
                    this.replaceLinks(
                      this.replaceImages(
                        this.replaceInlineCodes(this.replaceCodeBlocks(str))
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  };
  // Parser for Markdown (fixes code, adds empty lines around for parsing)
  // Usage: parseMarkdown(strVar)
  public parse = function (str) {
    return this.fixCodeBlocks(this.replaceMarkdown("\n" + str + "\n")).trim();
  };
}
