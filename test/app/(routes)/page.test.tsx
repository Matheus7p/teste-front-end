import { render, screen } from "@testing-library/react";

import Home from "@/app/(routes)/page";


describe("Page", () => {
  it("should display the text \"Teste Econverse\"", () => {
    render(<Home />);
    expect(screen.getByText("Teste Econverse")).toBeInTheDocument();
  });
});
