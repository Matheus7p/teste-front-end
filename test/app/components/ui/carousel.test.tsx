import type { EmblaCarouselType } from "embla-carousel";

import { render, screen, fireEvent } from "@testing-library/react";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import { Carousel } from "@/app/components/ui/carousel/carousel.ui";

jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Carousel Component", () => {
  const mockScrollPrev = jest.fn();
  const mockScrollNext = jest.fn();

  const mockedUseEmblaCarousel = useEmblaCarousel as jest.MockedFunction<typeof useEmblaCarousel>;

  beforeEach(() => {
    jest.clearAllMocks();

    const mockEmblaApi: Partial<EmblaCarouselType> = {
      scrollPrev: mockScrollPrev,
      scrollNext: mockScrollNext,
    };

    mockedUseEmblaCarousel.mockReturnValue([
      jest.fn(),
      mockEmblaApi as EmblaCarouselType,
    ]);
  });

  it("renders children inside slides", () => {
    // Arrange
    render(
      <Carousel>
        <div>Product 1</div>
        <div>Product 2</div>
      </Carousel>,
    );

    // Act
    const slide1 = screen.getByText("Product 1");
    const slide2 = screen.getByText("Product 2");

    // Assert
    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
  });

  it("calls scrollPrev when previous button is clicked", () => {
    // Arrange
    render(
      <Carousel>
        <div>Item</div>
      </Carousel>,
    );
    const prevButton = screen.getByRole("button", { name: "<" });

    // Act
    fireEvent.click(prevButton);

    // Assert
    expect(mockScrollPrev).toHaveBeenCalledTimes(1);
  });

  it("calls scrollNext when next button is clicked", () => {
    // Arrange
    render(
      <Carousel>
        <div>Item</div>
      </Carousel>,
    );
    const nextButton = screen.getByRole("button", { name: ">" });

    // Act
    fireEvent.click(nextButton);

    // Assert
    expect(mockScrollNext).toHaveBeenCalledTimes(1);
  });
});
