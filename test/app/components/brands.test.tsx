import { render, screen } from "@testing-library/react";
import React from "react";

import { Brands } from "@/app/components/brands/brands.component";

jest.mock("@/app/components/card/card.component", () => ({
  Card: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div data-testid="brand-card" className={className}>{children}</div>
  ),
  CardImage: ({ src, alt }: { src: string; alt: string }) => (
    <img data-testid="brand-image" src={src} alt={alt} />
  ),
}));

describe("Brands component", () => {
  it("renders the brands section title", () => {
    // Arrange
    render(<Brands />);

    // Act
    const title = screen.getByRole("heading", { name: /Navegue por marcas/i });

    // Assert
    expect(title).toBeInTheDocument();
  });

  it("renders all brand cards", () => {
    // Arrange
    render(<Brands />);

    // Act
    const cards = screen.getAllByTestId("brand-card");

    // Assert
    expect(cards).toHaveLength(5);
  });

  it("renders the brand images with correct alt text", () => {
    // Arrange
    render(<Brands />);

    // Act
    const images = screen.getAllByTestId("brand-image");

    // Assert
    images.forEach((img) => expect(img).toHaveAttribute("alt", "econverse"));
    images.forEach((img) => expect(img).toHaveAttribute("src", "/images/Logo.svg"));
  });
});
