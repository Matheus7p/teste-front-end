import { slugify } from "@/app/utils/slugify.util";

describe("slugify", () => {
  it("should convert text to lowercase and replace spaces with hyphens", () => {
    // Arrange
    const text = "Hello World Test";

    // Act
    const result = slugify(text);

    // Assert
    expect(result).toBe("hello-world-test");
  });

  it("should remove special characters", () => {
    // Arrange
    const text = "Hello@World!#2025";

    // Act
    const result = slugify(text);

    // Assert
    expect(result).toBe("helloworld2025");
  });

  it("should trim spaces at the start and end", () => {
    // Arrange
    const text = "   Slugify This Text   ";

    // Act
    const result = slugify(text);

    // Assert
    expect(result).toBe("slugify-this-text");
  });

  it("should replace multiple consecutive spaces with a single hyphen", () => {
    // Arrange
    const text = "Hello     World     Again";

    // Act
    const result = slugify(text);

    // Assert
    expect(result).toBe("hello-world-again");
  });

  it("should replace multiple consecutive hyphens with a single one", () => {
    // Arrange
    const text = "Hello---World--Test";

    // Act
    const result = slugify(text);

    // Assert
    expect(result).toBe("hello-world-test");
  });
});
