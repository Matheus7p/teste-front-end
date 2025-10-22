import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import { NewsletterContainer, NewsletterContent, NewsletterHeader, NewsletterForm, NewsletterCheckbox, Newsletter } from "@/app/components/news-lestter/news-letter.component";


describe("Newsletter Components", () => {
  it("should render NewsletterContainer with children", () => {
    // Arrange
    render(
      <NewsletterContainer data-testid="container">
        <p>Content</p>
      </NewsletterContainer>,
    );

    // Act
    const container = screen.getByTestId("container");

    // Assert
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Content");
  });

  it("should render NewsletterContent with children", () => {
    // Arrange
    render(
      <NewsletterContent data-testid="content">
        <span>Test</span>
      </NewsletterContent>,
    );

    // Act
    const content = screen.getByTestId("content");

    // Assert
    expect(content).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should render NewsletterHeader with title and description", () => {
    // Arrange
    render(
      <NewsletterHeader data-testid="header">
        <h5>Title</h5>
        <p>Description</p>
      </NewsletterHeader>,
    );

    // Act
    const header = screen.getByTestId("header");
    const title = screen.getByText("Title");
    const description = screen.getByText("Description");

    // Assert
    expect(header).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should call onSubmit when the form is submitted", () => {
    // Arrange
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(<NewsletterForm onSubmit={handleSubmit} />);

    // Act
    const button = screen.getByRole("button", { name: /inscrever/i });
    fireEvent.click(button);

    // Assert
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("should render inputs correctly inside NewsletterForm", () => {
    // Arrange
    render(<NewsletterForm />);

    // Act
    const nameInput = screen.getByPlaceholderText(/digite seu nome/i);
    const emailInput = screen.getByPlaceholderText(/digite seu e-mail/i);

    // Assert
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it("should render NewsletterCheckbox with label", () => {
    // Arrange
    render(<NewsletterCheckbox label="Accept terms" />);

    // Act
    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByText("Accept terms");

    // Assert
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "newsletter-terms");
  });

  it("should allow clicking the checkbox", () => {
    // Arrange
    render(<NewsletterCheckbox label="Accept terms" />);
    const checkbox = screen.getByRole("checkbox");

    // Act
    fireEvent.click(checkbox);

    // Assert
    expect(checkbox).toBeChecked();
  });

  it("should render the complete Newsletter component", () => {
    // Arrange
    render(<Newsletter />);

    // Act
    const title = screen.getByText(/inscreva-se na nossa newsletter/i);
    const description = screen.getByText(/assine a nossa newsletter e receba as novidades/i);
    const button = screen.getByRole("button", { name: /inscrever/i });
    const checkbox = screen.getByRole("checkbox");

    // Assert
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });
});
