import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("renders and accepts a placeholder", () => {
    render(<Textarea placeholder="Observações" />);
    expect(screen.getByPlaceholderText("Observações")).toBeInTheDocument();
  });

  it("is disabled when the disabled prop is set", () => {
    render(<Textarea disabled placeholder="Observações" />);
    expect(screen.getByPlaceholderText("Observações")).toBeDisabled();
  });
});
