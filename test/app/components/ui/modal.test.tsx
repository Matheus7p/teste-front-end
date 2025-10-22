import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import React from "react";

import { Modal } from "@/app/components/ui/modal/modal.ui";


jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Modal", () => {
  const mockBack = jest.fn();

  beforeEach(() => {
    // Arrange (global)
    (useRouter as jest.Mock).mockReturnValue({ back: mockBack });
    document.body.classList.remove("active-modal");
    jest.clearAllMocks();
  });

  it("should render children inside the modal", () => {
    // Arrange
    render(
      <Modal>
        <p>Modal content</p>
      </Modal>,
    );

    // Assert
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("should add 'active-modal' class to body when mounted and remove when unmounted", () => {
    // Arrange
    const { unmount } = render(<Modal>Test</Modal>);

    // Assert
    expect(document.body.classList.contains("active-modal")).toBe(true);

    // Act
    unmount();

    // Assert
    expect(document.body.classList.contains("active-modal")).toBe(false);
  });

  it("should call router.back() when close button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Modal>Test</Modal>);
    const closeButton = screen.getByRole("button", { name: /fechar modal/i });

    // Act
    await user.click(closeButton);

    // Assert
    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it("should call router.back() when overlay is clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    const { container } = render(<Modal>Test</Modal>);
    const overlay = container.firstElementChild;

    // Sanity
    expect(overlay).toBeTruthy();

    // Act
    if (overlay) await user.click(overlay);

    // Assert
    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it("should not call router.back() when clicking inside modal content", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Modal>Test</Modal>);
    const innerTextNode = screen.getByText("Test");

    // Act
    await user.click(innerTextNode);

    // Assert
    expect(mockBack).not.toHaveBeenCalled();
  });

  it("should call router.back() when pressing Escape key", () => {
    // Arrange
    render(<Modal>Test</Modal>);

    // Act
    fireEvent.keyDown(document, { key: "Escape" });

    // Assert
    expect(mockBack).toHaveBeenCalledTimes(1);
  });
});
