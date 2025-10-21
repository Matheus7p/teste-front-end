import { render, screen } from "@testing-library/react";
import { notFound } from "next/navigation";

import PageProductModal from "@/app/(routes)/product/[id]/page";
import { getProductById } from "@/app/actions/product.actions";

jest.mock("@/app/actions/product.actions");
jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));
jest.mock("@/app/components/modal-product/modal-product.component", () => ({
  ModalProduct: jest.fn(({ product }) => <div data-testid="modal-product">{product.productName}</div>),
}));
jest.mock("@/app/components/ui/modal/modal.ui", () => ({
  Modal: ({ children }: { children: React.ReactNode }) => <div data-testid="modal">{children}</div>,
}));

describe("PageProductModal", () => {
  const mockProduct = {
    id: 1,
    productName: "Iphone",
    price: 350,
    descriptionShort: "Iphone é muito ruim",
    photo: "https://example.com/iphone.jpg",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render Modal and ModalProduct when product is found", async () => {
    // Arrange
    (getProductById as jest.Mock).mockResolvedValue(mockProduct);

    // Act
    const jsx = await PageProductModal({ params: { id: "iphone" } });
    render(jsx);

    // Assert
    expect(getProductById).toHaveBeenCalledWith("iphone");
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByTestId("modal-product")).toHaveTextContent("Iphone");
  });

  it("should call notFound when product is not found", async () => {
    // Arrange
    (getProductById as jest.Mock).mockResolvedValue(undefined);

    // Act
    await PageProductModal({ params: { id: "non-existent" } });

    // Assert
    expect(notFound).toHaveBeenCalledTimes(1);
  });
});
