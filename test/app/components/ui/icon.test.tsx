import { render, screen } from "@testing-library/react";
import React from "react";

import { Icon } from "@/app/components/ui/icon/icon.ui";
import "@testing-library/jest-dom";

describe("Icons Component", () => {

  it("should render an image tag when a valid type is provided", () => {
    // Arrange

    // Act 
    render(<Icon type="Plus" />);
    
    // Assert 
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should render with fallback size when type is invalid", () => {
    // Arrange
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { container } = render(<Icon type={"invalid-type" as any} />);

    // Act
    const svg = container.querySelector("svg");

    // Assert
    expect(svg).toHaveAttribute("width", "16");
    expect(svg).toHaveAttribute("height", "16");
  });

  it("should apply custom color when provided", () => {
  // Arrange
    const { container } = render(<Icon type="Plus" color="red" />);

    // Act
    const svg = container.querySelector("svg");

    // Assert
    expect(svg).toHaveStyle({ stroke: "red" });
  });

});
