import { render, screen } from "@testing-library/react";

import { HeroSection } from "@/app/components/heroSection/hero-section.component";


describe("Component: HeroSection", () => {
  it("should render its children", () => {
    // Arrange
    const testMessage = "Test Child";
    render(
      <HeroSection>
        <p>{testMessage}</p>
      </HeroSection>,
    );

    // Act
    const childElement = screen.getByText(testMessage);

    // Assert
    expect(childElement).toBeInTheDocument();
  });
});
