import { render, screen } from "@testing-library/react";
import React from "react";

import Loading from "@/app/(routes)/product/[id]/loading";


jest.mock("@/app/components/ui/loading/loading-overlay.ui", () => ({
  LoadingOverlay: jest.fn(() => <div data-testid="loading-overlay" />),
}));

describe("Loading page", () => {
  it("should render the LoadingOverlay component", () => {
    // Arrange & Act
    render(<Loading />);

    // Assert
    expect(screen.getByTestId("loading-overlay")).toBeInTheDocument();
  });
});
