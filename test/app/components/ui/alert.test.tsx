import { render, screen, act } from "@testing-library/react";
import React from "react";

import { Alert } from "@/app/components/ui/alert/alert.ui";

jest.mock("./alert.module.scss", () => ({
  alert: "alert",
  "alert--success": "alert--success",
  "alert--error": "alert--error",
  alert__content: "alert__content",
  alert__title: "alert__title",
}));

describe("Alert UI Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should render with title and message", () => {
    // Arrange
    const title = "Success!";
    const message = "Product added successfully.";

    // Act
    render(
      <Alert variant="success" title={title}>
        {message}
      </Alert>,
    );

    // Assert
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("should apply correct variant class", () => {
    // Arrange
    const { container } = render(<Alert variant="error">Error occurred!</Alert>);

    // Act
    const alertElement = container.querySelector(".alert--error");

    // Assert
    expect(alertElement).toBeInTheDocument();
  });

  it("should disappear after duration", () => {
    // Arrange
    render(<Alert variant="success" duration={2000}>Timed alert</Alert>);

    // Act
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // Assert
    expect(screen.queryByText("Timed alert")).toBeNull();
  });

  it("should remain visible before duration expires", () => {
    // Arrange
    render(<Alert variant="success" duration={3000}>Still visible</Alert>);

    // Act
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // Assert
    expect(screen.getByText("Still visible")).toBeInTheDocument();
  });

  it("should clear timeout on unmount", () => {
    // Arrange
    const clearTimeoutSpy = jest.spyOn(global, "clearTimeout");

    // Act
    const { unmount } = render(<Alert variant="success">Unmount test</Alert>);
    unmount();

    // Assert
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
  });
});
