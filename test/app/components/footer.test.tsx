import { render, screen } from "@testing-library/react";

import {
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterDivider,
  FooterSocial,
  FooterSection,
  FooterCopyright,
  Footer,
} from "@/app/components/footer/footer.component";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }: React.PropsWithChildren<{ href: string }>) => (
    <a href={href}>{children}</a>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { alt = "", ...rest } = props;
    return <img alt={alt} {...rest} />;
  },
}));

jest.mock("@/app/components/ui/icon/icon.ui", () => ({
  Icon: ({ type }: { type: string }) => (
    <span data-testid={`icon-${type.toLowerCase()}`}>{type}</span>
  ),
}));

describe("Footer Components", () => {
  it("should render FooterContainer with children", () => {
    // Arrange
    render(
      <FooterContainer data-testid="footer-container">
        <p>Content</p>
      </FooterContainer>,
    );

    // Act
    const container = screen.getByTestId("footer-container");

    // Assert
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Content");
  });

  it("should render FooterLeft with children", () => {
    // Arrange
    render(
      <FooterLeft data-testid="footer-left">
        <span>Left content</span>
      </FooterLeft>,
    );

    // Act
    const left = screen.getByTestId("footer-left");

    // Assert
    expect(left).toBeInTheDocument();
    expect(screen.getByText("Left content")).toBeInTheDocument();
  });

  it("should render FooterRight with children", () => {
    // Arrange
    render(
      <FooterRight data-testid="footer-right">
        <span>Right content</span>
      </FooterRight>,
    );

    // Act
    const right = screen.getByTestId("footer-right");

    // Assert
    expect(right).toBeInTheDocument();
    expect(screen.getByText("Right content")).toBeInTheDocument();
  });

  it("should render FooterDivider", () => {
    // Arrange
    render(<FooterDivider data-testid="footer-divider" />);

    // Act
    const divider = screen.getByTestId("footer-divider");

    // Assert
    expect(divider).toBeInTheDocument();
  });

  it("should render FooterSocial with social links and icons", () => {
    // Arrange
    const socials = [
      { href: "#instagram", icon: "Instagram" as const, label: "Instagram" },
      { href: "#facebook", icon: "Facebook" as const, label: "Facebook" },
    ];

    render(<FooterSocial socials={socials} />);

    // Act
    const instagramLink = screen.getByRole("link", { name: "Instagram" });
    const facebookLink = screen.getByRole("link", { name: "Facebook" });
    const instagramIcon = screen.getByTestId("icon-instagram");
    const facebookIcon = screen.getByTestId("icon-facebook");

    // Assert
    expect(instagramLink).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(facebookIcon).toBeInTheDocument();
  });

  it("should render FooterSection with title and links", () => {
    // Arrange
    const links = [
      { href: "#about", label: "About Us" },
      { href: "#careers", label: "Careers" },
    ];

    render(<FooterSection title="Company" links={links} />);

    // Act
    const title = screen.getByText("Company");
    const aboutLink = screen.getByText("About Us");
    const careersLink = screen.getByText("Careers");

    // Assert
    expect(title).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "#about");
    expect(careersLink).toHaveAttribute("href", "#careers");
  });

  it("should render FooterCopyright with text", () => {
    // Arrange
    render(
      <FooterCopyright data-testid="footer-copyright">
        © 2025 Econverse
      </FooterCopyright>,
    );

    // Act
    const copyright = screen.getByTestId("footer-copyright");

    // Assert
    expect(copyright).toBeInTheDocument();
    expect(screen.getByText(/2025 Econverse/i)).toBeInTheDocument();
  });

  it("should render the complete Footer component", () => {
    // Arrange
    render(<Footer />);

    // Act
    const logo = screen.getByAltText("Logo econverse");
    const sections = ["Institucional", "Ajuda", "Termos"].map((title) =>
      screen.getByText(title),
    );
    const socials = [
      screen.getByRole("link", { name: "Instagram" }),
      screen.getByRole("link", { name: "Facebook" }),
      screen.getByRole("link", { name: "Linkedin" }),
    ];
    const paragraphs = screen.getAllByText(/lorem ipsum dolor sit amet/i);

    // Assert
    expect(logo).toBeInTheDocument();
    expect(paragraphs).toHaveLength(2);
    paragraphs.forEach((p) => expect(p).toBeInTheDocument());
    sections.forEach((section) => expect(section).toBeInTheDocument());
    socials.forEach((social) => expect(social).toBeInTheDocument());
  });
});
