import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { TabSelectorRelatedProduct } from "@/app/components/tab-selector/tab-selector.component";

jest.mock("./tab-selector.module.scss", () => ({
  tabSelector: "tabSelector",
  active: "active",
}));

interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className: string;
}

jest.mock("../../../src/app/components/ui/button/button.ui", () => ({
  Button: ({ children, onClick, className }: IButtonProps) => (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  ),
}));

describe("TabSelectorRelatedProduct", () => {
  it("should render buttons with uppercase labels", () => {
    // Arrange
    render(<TabSelectorRelatedProduct />);

    // Act
    const firstButton = screen.getByRole("button", { name: /celular/i });

    // Assert
    expect(firstButton).toBeInTheDocument();
    expect(firstButton).toHaveTextContent("CELULAR");
    expect(screen.getByText("ACESSÓRIOS")).toBeInTheDocument();
  });

  it("should set button to active on click", () => {
    // Arrange
    render(<TabSelectorRelatedProduct />);
    const initialActiveButton = screen.getByText("CELULAR");
    const buttonToClick = screen.getByText("ACESSÓRIOS");

    // Assert
    expect(initialActiveButton).toHaveClass("active");
    expect(buttonToClick).not.toHaveClass("active");

    // Act
    fireEvent.click(buttonToClick);

    // Assert
    expect(buttonToClick).toHaveClass("active");
    expect(initialActiveButton).not.toHaveClass("active");
  });
});
