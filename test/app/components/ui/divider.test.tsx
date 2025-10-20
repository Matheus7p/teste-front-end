import { render } from "@testing-library/react";
import React from "react";

import { Divider } from "@/app/components/ui/divider/divider.ui";

jest.mock("./divider.module.scss", () => ({
  divider: "mock-divider-class",
}));

describe("Components: Divider", () => {
  it("should render the divider with its correct class", () => {
    const { container } = render(<Divider />);

    const dividerElement = container.querySelector(".mock-divider-class");

    expect(dividerElement).toBeInTheDocument();
    expect(dividerElement!.tagName).toBe("DIV");
  });
});
