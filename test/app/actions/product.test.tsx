import { getProduct, getProductById } from "@/app/actions/product.actions";
import { slugify } from "@/app/utils/slugify.util";

jest.mock("@/app/utils/slugify.util", () => ({
  slugify: jest.fn(),
}));

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

describe("getProductById", () => {
  const mockProducts = [
    { id: 1, productName: "Produto A", price: 100 },
    { id: 2, productName: "Produto B", price: 200 },
  ];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return the correct product when found by slugified id", async () => {
    // Arrange
    (slugify as jest.Mock).mockImplementation((name: string) =>
      name.toLowerCase().replace(/\s+/g, "-"),
    );

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          success: true,
          products: mockProducts,
        }),
    });

    const targetId = "produto-a";

    // Act
    const result = await getProductById(targetId);

    // Assert
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(slugify).toHaveBeenCalledWith("Produto A");
    expect(result).toEqual(mockProducts[0]);
  });

  it("should return undefined when product with given id is not found", async () => {
    // Arrange
    (slugify as jest.Mock).mockReturnValue("produto-nao-existe");

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          success: true,
          products: mockProducts,
        }),
    });

    // Act
    const result = await getProductById("produto-x");

    // Assert
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBeUndefined();
  });

  it("should return undefined when fetch fails with HTTP error", async () => {
    // Arrange
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    // Act
    const result = await getProductById("produto-a");

    // Assert
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBeUndefined();
  });

  it("should return undefined when fetch throws an exception", async () => {
    // Arrange
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    // Act
    const result = await getProductById("produto-a");

    // Assert
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBeUndefined();
  });
});
