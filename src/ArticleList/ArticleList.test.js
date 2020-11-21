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
        image: {
          _url: "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg",
        },
      },
      {
        title: "You can take a pie on a plane",
        author: "Cathryn Lindsey",
        displayDate: "November 21st 2018, 2:57 pm",
        shortText: "Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?",
        image: {
          _url: "https://cdn.cnn.com/cnnnext/dam/assets/170321135754-airport-security-line-file-super-169.jpg",
        },
      }
    ]

    const { container } = render(<ArticleList articles={Object.values(test)} />);
    expect(container).toMatchSnapshot();
  });
});
