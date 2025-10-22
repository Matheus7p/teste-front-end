import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import {
  CategoriesDisplayToHome,
  CategoryImage,
} from "@/app/components/categories-display/categories-display.component";

jest.mock("../../../src/app/components/ui/icon/icon.ui", () => ({
  Icon: ({ type }: { type: string }) => <svg data-testid={`icon-${type}`} />,
}));

jest.mock("@/app/components/categories-display/categories-display.module.scss", () => ({
  categoriesDisplayToHome: "categoriesDisplayToHome",
  categoryItem: "categoryItem",
  active: "active",
}));

describe("CategoriesDisplayToHome", () => {
  it("should render all categories", () => {
    // Arrange
    render(<CategoriesDisplayToHome />);

    // Act
    const tecnologia = screen.getByText("tecnologia");
    const supermercado = screen.getByText("supermercado");
    const moda = screen.getByText("Moda");

    // Assert
    expect(tecnologia).toBeInTheDocument();
    expect(supermercado).toBeInTheDocument();
    expect(moda).toBeInTheDocument();
    expect(screen.getAllByRole("heading")).toHaveLength(7);
  });

  it("should set the first category as active by default", () => {
    // Arrange
    render(<CategoriesDisplayToHome />);

    // Act
    const firstCategoryWrapper = screen.getByText("tecnologia").closest(".categoryItem");

    // Assert
    expect(firstCategoryWrapper).toHaveClass("active");
  });

  it("should change the active category on click", () => {
    // Arrange
    render(<CategoriesDisplayToHome />);
    const firstCategoryWrapper = screen.getByText("tecnologia").closest(".categoryItem");
    const secondCategoryWrapper = screen.getByText("supermercado").closest(".categoryItem");

    // Assert
    expect(firstCategoryWrapper).toHaveClass("active");
    expect(secondCategoryWrapper).not.toHaveClass("active");

    // Act
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.click(secondCategoryWrapper!);

    // Assert
    expect(firstCategoryWrapper).not.toHaveClass("active");
    expect(secondCategoryWrapper).toHaveClass("active");
  });

  it("should render icons for categories", () => {
    // Arrange
    render(<CategoriesDisplayToHome />);

    // Act
    const deviceIcon = screen.getByTestId("icon-Device");
    const marketIcon = screen.getByTestId("icon-Market");

    // Assert
    expect(deviceIcon).toBeInTheDocument();
    expect(marketIcon).toBeInTheDocument();
  });
});

describe("CategoryImage", () => {
  it("should render nothing (fragment) if categoryIcon is not provided", () => {
    // Arrange
    const { container } = render(<CategoryImage categoryIcon={undefined} />);

    // Assert
    expect(container.firstChild).toBeNull();
  });

  it("should render the correct icon when categoryIcon is provided", () => {
    // Arrange
    render(<CategoryImage categoryIcon="Device" />);

    // Act
    const icon = screen.getByTestId("icon-Device");

    // Assert
    expect(icon).toBeInTheDocument();
  });
});
