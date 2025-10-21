import { render, screen } from "@testing-library/react";
import React from "react";

import { LoadingOverlay } from "@/app/components/ui/loading/loading-overlay.ui";

describe("LoadingOverlay", () => {
  it("should render the overlay and spinner", () => {
    // Arrange & Act
    render(<LoadingOverlay />);

    const overlay = screen.getByTestId("loading-overlay");
    const spinner = screen.getByTestId("loading-spinner");

    // Assert
    expect(overlay).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });
});
