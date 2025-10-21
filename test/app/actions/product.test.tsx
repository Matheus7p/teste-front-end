import { getProduct } from "@/app/actions/product.actions";

describe("getProduct", () => {
  const mockProducts = [
    { id: 1, productName: "Produto A", price: 100 },
    { id: 2, productName: "Produto B", price: 200 },
  ];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return products when fetch succeeds", async () => {
    // Arrange
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, products: mockProducts }),
    });

    // Act
    const result = await getProduct();

    // Assert
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ products: mockProducts, error: null });
  });

  it("should return error message when fetch fails (HTTP error)", async () => {
    // Arrange
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    // Act
    const result = await getProduct();

    // Assert
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      products: [],
      error: "Não foi possível carregar os produtos.",
    });
  });

  it("should return error message when fetch throws an exception", async () => {
    // Arrange
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    // Act
    const result = await getProduct();

    // Assert
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      products: [],
      error: "Não foi possível carregar os produtos.",
    });
  });
});
