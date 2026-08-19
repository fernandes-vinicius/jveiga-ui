import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./input";

describe("Input", () => {
  it("renders and accepts a placeholder", () => {
    render(<Input placeholder="Buscar..." />);
    expect(screen.getByPlaceholderText("Buscar...")).toBeInTheDocument();
  });

  it("is disabled when the disabled prop is set", () => {
    render(<Input disabled placeholder="Buscar..." />);
    expect(screen.getByPlaceholderText("Buscar...")).toBeDisabled();
  });

  it("forwards the type prop", () => {
    render(<Input type="email" placeholder="E-mail" />);
    expect(screen.getByPlaceholderText("E-mail")).toHaveAttribute(
      "type",
      "email",
    );
  });
});
