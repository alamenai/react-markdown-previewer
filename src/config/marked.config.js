import hljs from "highlight.js";
import "highlight.js/styles/github.css";

export const markedConfig = {
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  langPrefix: "hljs language-",
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false,
};
