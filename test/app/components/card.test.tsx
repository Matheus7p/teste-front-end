import { render, screen } from "@testing-library/react";
import React from "react";

import { Card, CardImage, CardContent, CardButton, CardProduct } from "@/app/components/card/card.component";
import { formatPriceToBRL } from "@/utils/price-format.utils";


jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img alt={props.alt || ""} {...props} />
  ),
}));

jest.mock("@/app/components/ui/button/button.ui", () => ({
  Button: ({ children, variant }: { children: React.ReactNode; variant: string }) => (
    <button data-variant={variant}>{children}</button>
  ),
}));

jest.mock("@/utils/price-format.utils", () => ({
  formatPriceToBRL: jest.fn((value: number) => value.toLocaleString("pt-BR")),
}));

describe("Card Components", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Card with children", () => {
    // Arrange
    const text = "Content inside card";

    // Act
    render(<Card className="test-class">{text}</Card>);

    // Assert
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveClass("test-class");
  });

  it("renders CardImage with correct attributes", () => {
    // Arrange
    const imageProps = { src: "/image.png", alt: "Product Image", width: 100, height: 100 };

    // Act
    render(<CardImage {...imageProps} />);

    // Assert
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/image.png");
    expect(image).toHaveAttribute("alt", "Product Image");
  });

  it("renders CardContent with children", () => {
    // Arrange
    const text = "Card content";

    // Act
    render(<CardContent>{text}</CardContent>);

    // Assert
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("renders CardButton with children", () => {
    // Arrange
    const text = "Click here";

    // Act
    render(<CardButton>{text}</CardButton>);

    // Assert
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("renders CardProduct with formatted price and button", () => {
    // Arrange
    const product = {
      productName: "Iphone",
      price: 1000,
      descriptionShort: "Iphone é muito caro",
      photo: "/iphone.png",
    };

    // Act
    render(<CardProduct {...product} />);

    // Assert
    expect(screen.getByText(product.productName)).toBeInTheDocument();
    expect(screen.getByText(product.descriptionShort)).toBeInTheDocument();
    expect(formatPriceToBRL).toHaveBeenCalledWith(1000);
    expect(screen.getAllByText(/1\.000/)[0]).toBeInTheDocument();
    expect(screen.getByText(/ou 2x de/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /COMPRAR/i })).toBeInTheDocument();
  });
});
