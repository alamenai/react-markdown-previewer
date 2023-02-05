import { screen, render } from "@testing-library/react";
import { createMarkup, Previewer } from ".";

test("should return a div with an id = preview", () => {
  const defaultContent = "# Welcome to React Markdown";

  render(<Previewer content={defaultContent} />);
  const element = screen.getByRole("textbox");
  expect(element).toHaveAttribute("id", "preview");
});
