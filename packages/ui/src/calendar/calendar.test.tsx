import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Calendar } from "./calendar";

describe("Calendar", () => {
  it("renders a grid of days", () => {
    render(<Calendar mode="single" defaultMonth={new Date(2026, 0, 1)} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("calls onSelect when a day is clicked", () => {
    const onSelect = vi.fn();
    render(
      <Calendar
        mode="single"
        defaultMonth={new Date(2026, 0, 1)}
        onSelect={onSelect}
      />,
    );
    screen
      .getByRole("gridcell", { name: "15" })
      .querySelector("button")
      ?.click();
    expect(onSelect).toHaveBeenCalledOnce();
  });
});
