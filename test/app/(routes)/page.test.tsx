import { render, screen } from "@testing-library/react";

import Home from "@/app/(routes)/page";


describe("Page", () => {
  it("should render the hero section with its title", () => {
    // Arrange
    render(<Home />);

    // Act
    const headingElement = screen.getByRole("heading", {
      name: /Venha conhecer nossas promoções/i,
    });

    // Assert
    expect(headingElement).toBeInTheDocument();
  });
});
