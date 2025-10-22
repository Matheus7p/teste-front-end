import { formatPriceToBRL } from "@/app/utils/price-format.utils";

describe("formatPriceToBRL", () => {
  it("formats number to BRL locale string correctly", () => {
    // Arrange
    const value = 1234567.89;

    // Act
    const result = formatPriceToBRL(value);

    // Assert
    expect(result).toBe("1.234.567,89");
  });

  it("formats integer numbers correctly", () => {
    // Arrange
    const value = 5000;

    // Act
    const result = formatPriceToBRL(value);

    // Assert
    expect(result).toBe("5.000");
  });

  it("formats small decimal numbers correctly", () => {
    // Arrange
    const value = 12.5;

    // Act
    const result = formatPriceToBRL(value);

    // Assert
    expect(result).toBe("12,5");
  });
});
