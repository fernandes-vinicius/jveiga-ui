import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DatePicker } from "./date-picker";

describe("DatePicker", () => {
  it("shows the placeholder when no date is selected", () => {
    render(<DatePicker placeholder="Selecione uma data" />);
    expect(screen.getByText("Selecione uma data")).toBeInTheDocument();
  });

  it("shows the formatted date when a value is provided", () => {
    render(<DatePicker value={new Date(2026, 0, 15)} />);
    expect(screen.getByText("15 de janeiro de 2026")).toBeInTheDocument();
  });

  it("opens the calendar when the trigger is clicked", () => {
    render(<DatePicker />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});
