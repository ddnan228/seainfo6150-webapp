import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem test", () => {

  it("renders correctly", () => {
    const test =
      {
        title: "The Statue of Liberty's torch heads to new museum",
        author: "Kate Farley",
        displayDate: "November 22nd 2018, 7:12 am",
        shortText: "The Statue of Liberty's original torch is getting a new home",
        image: {
          _url: "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg",
        },
      }

    const { container } = render(<ArticleListItem article={test} />);
    expect(container).toMatchSnapshot();
  });
});
