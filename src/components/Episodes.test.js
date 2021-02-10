import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

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

describe("Episode Tests", () => {
  test("Renders without errors", () => {
    render(<Episodes episodes={[]} />);
  });

  test("re-rendering without errors", () => {
    const { rerender } = render(<Episodes episodes={[]} />);
    rerender(<Episodes episodes={[]} />);
  });

  test("Episodes", () => {
    render(<Episodes episodes={dummyData} />);
    const titleEp1 = screen.getByRole("heading", { name: /Episode 1/i });
    const titleEp2 = screen.getByRole("heading", { name: /Episode 2/i });
    const imageEp1 = screen.getByAltText(/Episode 1/i);

    expect(titleEp1).toBeInTheDocument();
    expect(titleEp2).toBeInTheDocument();
    expect(imageEp1).toBeInTheDocument();
  });
});
