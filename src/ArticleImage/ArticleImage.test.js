import React from "react";
import ArticleImage from "./ArticleImage";
import { fireEvent } from "@testing-library/react";

describe("ArticleImage test", () => {

  it("renders correctly", () => {
    const { container } = render(<ArticleImage url = "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg" title = "The Statue of Liberty's torch heads to new museum"/>);
    expect(container).toMatchSnapshot();
  });
});
