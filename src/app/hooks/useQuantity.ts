import { useState } from "react";

export const useQuantity = (initialQuantity: number): {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
} => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = (): void => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = (): void => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity,
  };
};
