import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Separator } from "./separator";

describe("Separator", () => {
  it("renders with horizontal orientation by default", () => {
    const { container } = render(<Separator />);
    const el = container.querySelector('[data-slot="separator"]');
    expect(el).toHaveAttribute("data-orientation", "horizontal");
  });

  it("renders with vertical orientation when set", () => {
    const { container } = render(<Separator orientation="vertical" />);
    const el = container.querySelector('[data-slot="separator"]');
    expect(el).toHaveAttribute("data-orientation", "vertical");
  });
});
