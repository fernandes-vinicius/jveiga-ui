import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("renders with the pulse animation class", () => {
    const { container } = render(<Skeleton data-testid="skeleton" />);
    const el = container.querySelector('[data-slot="skeleton"]');
    expect(el).toHaveClass("animate-pulse");
  });

  it("accepts a custom className", () => {
    const { container } = render(<Skeleton className="h-4 w-32" />);
    const el = container.querySelector('[data-slot="skeleton"]');
    expect(el).toHaveClass("h-4", "w-32");
  });
});
