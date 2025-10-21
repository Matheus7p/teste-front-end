import { renderHook, act } from "@testing-library/react";

import { useQuantity } from "@/app/hooks/useQuantity";

describe("useQuantity", () => {
  it("should initialize with the provided initial quantity", () => {
    // Arrange
    const initialQuantity = 5;

    // Act
    const { result } = renderHook(() => useQuantity(initialQuantity));

    // Assert
    expect(result.current.quantity).toBe(initialQuantity);
  });

  it("should increase the quantity when increaseQuantity is called", () => {
    // Arrange
    const initialQuantity = 2;
    const { result } = renderHook(() => useQuantity(initialQuantity));

    // Act
    act(() => {
      result.current.increaseQuantity();
    });

    // Assert
    expect(result.current.quantity).toBe(initialQuantity + 1);
  });

  it("should decrease the quantity when decreaseQuantity is called and quantity > 1", () => {
    // Arrange
    const initialQuantity = 3;
    const { result } = renderHook(() => useQuantity(initialQuantity));

    // Act
    act(() => {
      result.current.decreaseQuantity();
    });

    // Assert
    expect(result.current.quantity).toBe(initialQuantity - 1);
  });

  it("should not decrease the quantity below 1", () => {
    // Arrange
    const initialQuantity = 1;
    const { result } = renderHook(() => useQuantity(initialQuantity));

    // Act
    act(() => {
      result.current.decreaseQuantity();
    });

    // Assert
    expect(result.current.quantity).toBe(1);
  });
});
