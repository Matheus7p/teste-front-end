import { render, screen } from "@testing-library/react";
import React from "react";

import { Partner } from "@/app/components/partner/partner.component";

describe("Partner component", () => {
  it("renders the correct number of partner cards", () => {
    // AAA
    render(<Partner />);
    const cards = screen.getAllByTestId("partner-card");
    expect(cards).toHaveLength(2);
  });

  it("renders buttons with correct text", () => {
    // AAA
    render(<Partner />);
    const buttons = screen.getAllByTestId("partner-button");
    buttons.forEach((button) => expect(button).toHaveTextContent("CONFIRA"));
  });

  it("renders the Partner wrapper", () => {
    // AAA
    render(<Partner />);
    const wrapper = screen.getByTestId("partner");
    expect(wrapper).toBeInTheDocument();
  });
});
