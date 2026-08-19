import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("renders unchecked by default", () => {
    render(<Checkbox aria-label="Aceitar" />);
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-checked",
      "false",
    );
  });

  it("toggles on click and calls onCheckedChange", () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox aria-label="Aceitar" onCheckedChange={onCheckedChange} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("is disabled when the disabled prop is set", () => {
    render(<Checkbox aria-label="Aceitar" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});
