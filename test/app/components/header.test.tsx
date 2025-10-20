import { render, screen } from "@testing-library/react";
import React from "react";

import { HeaderTop, HeaderContent, HeaderNav, Header } from "@/app/components/header/header.component";

jest.mock("./header.module.scss", () => ({
  headerTop: "mock-header-top",
  headerContent: "mock-header-content",
}));

describe("Components: Header suite", () => {
  
  it("should render Header component with its children", () => {
    // Arrange
    render(<Header /> );
    
    // Act
    const headerElement = screen.getByRole("banner");
    
    // Assert
    expect(headerElement).toBeInTheDocument();
    expect(screen.getByAltText("Logo econverse")).toBeInTheDocument();
  });

  it("should render HeaderTop component with children and styles", () => {
    // Arrange
    const childText = "Child of HeaderTop";
    render(
      <HeaderTop data-testid="header-top">
        <p>{childText}</p>
      </HeaderTop>,
    );

    // Act
    const headerTopElement = screen.getByTestId("header-top");

    // Assert
    expect(headerTopElement).toBeInTheDocument();
    expect(headerTopElement.tagName).toBe("DIV");
    expect(screen.getByText(childText)).toBeInTheDocument();
    expect(headerTopElement).toHaveClass("mock-header-top");
  });

  it("should render HeaderContent component with children and styles", () => {
    // Arrange
    const childText = "Child of HeaderContent";
    render(
      <HeaderContent data-testid="header-content">
        <p>{childText}</p>
      </HeaderContent>,
    );

    // Act
    const headerContentElement = screen.getByTestId("header-content");

    // Assert
    expect(headerContentElement).toBeInTheDocument();
    expect(headerContentElement.tagName).toBe("DIV");
    expect(screen.getByText(childText)).toBeInTheDocument();
    expect(headerContentElement).toHaveClass("mock-header-content");
  });

  it("should render HeaderNav component with its children", () => {
    // Arrange
    const childText = "Child of HeaderNav";
    render(
      <HeaderNav>
        <p>{childText}</p>
      </HeaderNav>,
    );

    // Act
    const navElement = screen.getByRole("navigation");

    // Assert
    expect(navElement).toBeInTheDocument();
    expect(navElement.tagName).toBe("NAV");
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render HeaderTop, HeaderContent, and HeaderNav inside Header", () => {
    // Arrange
    render(<Header />);

    // Act
    const headerElement = screen.getByRole("banner");
    const navElement = screen.getByRole("navigation");

    // Assert
    expect(headerElement).toBeInTheDocument();
    expect(navElement).toBeInTheDocument();
    expect(screen.getByAltText("Logo econverse")).toBeInTheDocument();

    const headerTop = headerElement.querySelector(".mock-header-top");
    const headerContent = headerElement.querySelector(".mock-header-content");

    expect(headerTop).toBeInTheDocument();
    expect(headerContent).toBeInTheDocument();
  });
});
