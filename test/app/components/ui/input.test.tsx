import { render, screen } from "@testing-library/react";
import React from "react";

import { Input } from "@/app/components/ui/input/input.ui";


// Mock do scss module para simular as classes
jest.mock("./input.module.scss", () => ({
  input: "mock-input-base",
  "input--default": "mock-input-default",
}));

describe("Component: Input", () => {
  it("should render correctly with default props and classes", () => {
    // Arrange
    render(<Input data-testid="test-input" />);

    // Act
    const inputElement = screen.getByTestId("test-input");

    // Assert
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe("INPUT");
    expect(inputElement).toHaveClass("mock-input-base");
    expect(inputElement).toHaveClass("mock-input-default");
  });

  it("should apply a custom className", () => {
    // Arrange
    const customClass = "my-extra-class";
    render(<Input data-testid="test-input" className={customClass} />);

    // Act
    const inputElement = screen.getByTestId("test-input");

    // Assert
    expect(inputElement).toHaveClass("mock-input-base");
    expect(inputElement).toHaveClass("mock-input-default");
    expect(inputElement).toHaveClass(customClass);
  });

  it("should spread all other HTMLInputElement props", () => {
    // Arrange
    const placeholderText = "Digite seu e-mail";
    render(
      <Input
        type="email"
        placeholder={placeholderText}
        id="email-input"
        disabled
      />,
    );

    // Act
    const inputElement = screen.getByPlaceholderText(placeholderText);

    // Assert
    expect(inputElement).toHaveAttribute("type", "email");
    expect(inputElement).toHaveAttribute("id", "email-input");
    expect(inputElement).toBeDisabled();
  });

});
