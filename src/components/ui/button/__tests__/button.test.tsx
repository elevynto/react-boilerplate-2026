import { render, screen } from "@testing-library/react";
import { Button } from "..";
import { Slot } from "@radix-ui/react-slot";

describe("Button Component", () => {
  it("renders a button with default props", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-variant", "default");
    expect(button).toHaveAttribute("data-size", "default");
  });

  it("applies the correct variant class", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole("button", { name: /delete/i });

    expect(button).toHaveAttribute("data-variant", "destructive");
  });

  it("applies the correct size class", () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole("button", { name: /large button/i });

    expect(button).toHaveAttribute("data-size", "lg");
  });

  it("applies additional class names", () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole("button", { name: /custom button/i });

    expect(button).toHaveClass("custom-class");
  });
});
