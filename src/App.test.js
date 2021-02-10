import React from "react";
import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";

const dummyData = [
  {
    id: 1,
    url: "url1",
    name: "Episode 1",
    season: 1,
    number: 1,
    summary: "Ep_Summary_1",
    runtime: 1,
    image: { medium: "ep1_med_image" },
  },
  {
    id: 2,
    url: "url2",
    name: "Episode 2",
    season: 1,
    number: 2,
    summary: "Ep_Summary_2",
    runtime: 2,
    image: { medium: "ep2_med_image" },
  },
];

test("Episodes renders", () => {
  render(<App show={dummyData} />);
});

// test("h1", () => {
//   render(<App show={dummyData} />);
//   const h1 = screen.getByRole("h2", { name: "Fetching data..." });
//   expect(h1).toBeInTheDocument();
// });
