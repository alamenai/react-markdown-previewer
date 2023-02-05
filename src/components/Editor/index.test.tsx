import { screen, render } from "@testing-library/react";
import { ChangeEvent } from "react";
import { Editor } from ".";

test("should return a textarea with an id = editor", () => {
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {};
  const defaultContent = "# Welcome to React Markdown";

  render(<Editor content={defaultContent} onChange={onChange} />);
  const element = screen.getByDisplayValue(defaultContent);
  expect(element).toHaveAttribute("id", "editor");
  expect(element).toHaveDisplayValue(defaultContent);
});
