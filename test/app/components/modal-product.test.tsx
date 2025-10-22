import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import { ModalProduct } from "@/app/components/modal-product/modal-product.component";
import { useQuantity } from "@/app/hooks/useQuantity";
import { formatPriceToBRL } from "@/app/utils/price-format.utils";

jest.mock("@/app/hooks/useQuantity");
jest.mock("@/app/utils/price-format.utils");

describe("ModalProduct", () => {
  const mockProduct = {
    id: 1,
    productName: "Iphone",
    price: 350,
    descriptionShort: "Iphone é muito ruim",
    photo: "https://example.com/iphone.jpg",
  };

  const mockIncrease = jest.fn();
  const mockDecrease = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useQuantity as jest.Mock).mockReturnValue({
      quantity: 1,
      increaseQuantity: mockIncrease,
      decreaseQuantity: mockDecrease,
    });
    (formatPriceToBRL as jest.Mock).mockReturnValue("350,00");
  });

  it("should render product data correctly", () => {
    // Arrange
    render(<ModalProduct product={mockProduct} />);

    // Act
    const title = screen.getByText("Iphone");
    const price = screen.getByText("R$ 350,00");
    const shortDesc = screen.getByText("Iphone é muito ruim");
    const productImage = screen.getByAltText("Iphone");

    // Assert
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(shortDesc).toBeInTheDocument();
    expect(productImage).toHaveAttribute("src", mockProduct.photo);
  });

  it("should display quantity from hook", () => {
    // Arrange
    render(<ModalProduct product={mockProduct} />);

    // Act
    const quantityText = screen.getByText("1");

    // Assert
    expect(quantityText).toBeInTheDocument();
  });

  it("should call increaseQuantity when clicking + button", () => {
    // Arrange
    render(<ModalProduct product={mockProduct} />);
    const plusButton = screen.getAllByRole("button")[1];

    // Act
    fireEvent.click(plusButton);

    // Assert
    expect(mockIncrease).toHaveBeenCalledTimes(1);
  });

  it("should call decreaseQuantity when clicking - button", () => {
    // Arrange
    render(<ModalProduct product={mockProduct} />);
    const minusButton = screen.getAllByRole("button")[0];

    // Act
    fireEvent.click(minusButton);

    // Assert
    expect(mockDecrease).toHaveBeenCalledTimes(1);
  });

  it("should render a COMPRAR button", () => {
    // Arrange
    render(<ModalProduct product={mockProduct} />);

    // Act
    const comprar = screen.getByText("COMPRAR");

    // Assert
    expect(comprar).toBeInTheDocument();
  });
});
