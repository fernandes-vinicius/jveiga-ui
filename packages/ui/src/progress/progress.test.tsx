import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "./progress";

describe("Progress", () => {
  it("renders with the given value", () => {
    render(<Progress value={40} aria-label="Progresso" />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "40",
    );
  });

  it("translates the indicator based on value", () => {
    const { container } = render(
      <Progress value={25} aria-label="Progresso" />,
    );
    const indicator = container.querySelector(
      '[data-slot="progress-indicator"]',
    );
    expect(indicator).toHaveStyle({ transform: "translateX(-75%)" });
  });
});
