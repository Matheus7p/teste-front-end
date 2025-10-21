import { render, screen } from "@testing-library/react";
import React from "react";

import Home from "@/app/(routes)/page";

jest.mock("@/app/components/heroSection/hero-section.component", () => ({
  HeroSection: ({ children }: { children: React.ReactNode }) => (
    <section data-testid="hero-section">{children}</section>
  ),
}));

jest.mock("@/app/components/categories-display/categories-display.component", () => ({
  CategoriesDisplayToHome: () => <div data-testid="categories-display">Categorias</div>,
}));

jest.mock("@/app/components/tab-selector/tab-selector.component", () => ({
  TabSelectorRelatedProduct: () => <div data-testid="tab-selector">Tabs</div>,
}));

jest.mock("@/app/components/ui/button/button.ui", () => ({
  Button: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
}));

jest.mock("@/app/components/ui/carousel/carousel.ui", () => ({
  Carousel: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="carousel">{children}</div>
  ),
}));

jest.mock("@/app/components/ui/divider/divider.ui", () => ({
  Divider: ({ variant }: { variant: string }) => <hr data-variant={variant} />,
}));

jest.mock("@/app/components/card/card.component", () => ({
  CardProduct: ({ productName }: { productName: string }) => (
    <div data-testid="card-product">{productName}</div>
  ),
}));

describe("Home Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render hero section with title, subtitle and button", async () => {
    // Arrange
    render(await Home());

    // Act
    const heading = await screen.findByRole("heading", { name: /Venha conhecer nossas promoções/i });
    const subtext = screen.getByText(/50% Off/i);
    const button = screen.getByRole("button", { name: /Ver Produto/i });

    // Assert
    expect(heading).toBeInTheDocument();
    expect(subtext).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should render 'Produtos Relacionados' section", async () => {
    // Arrange
    render(await Home());

    // Act
    const relatedHeading = await screen.findByRole("heading", { name: /Produtos Relacionados/i });

    // Assert
    expect(relatedHeading).toBeInTheDocument();
  });

  it("should render categories and tab selector", async () => {
    // Arrange
    render(await Home());

    // Act
    const categories = await screen.findByTestId("categories-display");
    const tabs = screen.getByTestId("tab-selector");

    // Assert
    expect(categories).toBeInTheDocument();
    expect(tabs).toBeInTheDocument();
  });
});
