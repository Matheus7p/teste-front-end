import { render, screen } from "@testing-library/react";
import React from "react";

import { Button } from "@/app/components/ui/button/button.ui";


jest.mock("./button.module.scss", () => ({
  button: "mock-button-base",
  "button--default": "mock-button-default",
  "button--primary": "mock-button-primary",
}));

describe("Component: Button", () => {
  it("should render correctly with default props and classes", () => {
    // Arrange
    const buttonText = "Click Me";
    render(<Button data-testid="test-button">{buttonText}</Button>);

    // Act
    const buttonElement = screen.getByTestId("test-button");

    // Assert
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe("BUTTON");
    expect(buttonElement).toHaveTextContent(buttonText);
    expect(buttonElement).toHaveClass("mock-button-base");
    expect(buttonElement).toHaveClass("mock-button-default");
  });

  it("should apply a custom className", () => {
    // Arrange
    const customClass = "my-extra-class";
    render(
      <Button data-testid="test-button" className={customClass}>
        Test
      </Button>,
    );

    // Act
    const buttonElement = screen.getByTestId("test-button");

    // Assert
    expect(buttonElement).toHaveClass("mock-button-base");
    expect(buttonElement).toHaveClass("mock-button-default");
    expect(buttonElement).toHaveClass(customClass);
  });

  it("should spread all other HTMLButtonElement props", () => {
    // Arrange
    const buttonText = "Submit Form";
    render(
      <Button type="submit" id="submit-btn" disabled>
        {buttonText}
      </Button>,
    );

    // Act
    const buttonElement = screen.getByText(buttonText);

    // Assert
    expect(buttonElement).toHaveAttribute("type", "submit");
    expect(buttonElement).toHaveAttribute("id", "submit-btn");
    expect(buttonElement).toBeDisabled();
  });

  it("should apply the correct variant class", () => {
    // Arrange
    const buttonText = "Primary Action";
    render(<Button variant="primary">{buttonText}</Button>);

    // Act
    const buttonElement = screen.getByText(buttonText);

    // Assert
    expect(buttonElement).toHaveClass("mock-button-base");
    expect(buttonElement).toHaveClass("mock-button-primary");
    expect(buttonElement).not.toHaveClass("mock-button-default");
  });
});
