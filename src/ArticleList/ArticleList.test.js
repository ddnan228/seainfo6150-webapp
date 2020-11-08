import React from "react";
import ArticleList from "./ArticleList";
import { fireEvent } from "@testing-library/react";

describe("ArticleList test", () => {

  it("renders correctly", () => {
    const test = [
      {
        title: "The Statue of Liberty's torch heads to new museum",
        author: "Kate Farley",
        displayDate: "November 22nd 2018, 7:12 am",
        shortText: "The Statue of Liberty's original torch is getting a new home",
      },
      {
        title: "You can take a pie on a plane",
        author: "Cathryn Lindsey",
        displayDate: "November 21st 2018, 2:57 pm",
        shortText: "Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?",
      }
    ]

    const { container } = render(<ArticleList articles={Object.values(test)} />);
    expect(container).toMatchSnapshot();
  });
});
