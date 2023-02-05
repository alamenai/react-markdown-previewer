import { marked } from "marked";
import { markedConfig } from "../../config/marked.config";
import { Props } from "./@types";
import "./index.css";

export const createMarkup = (htmlStr: string) => {
  return { __html: marked(htmlStr, markedConfig) };
};

export const Previewer = ({ content }: Props) => {
  return (
    <div
      id='preview'
      dangerouslySetInnerHTML={createMarkup(content)}
      role='textbox'
    ></div>
  );
};
