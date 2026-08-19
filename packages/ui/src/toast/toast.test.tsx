import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toaster, toast } from "./toast";

describe("Toaster", () => {
  it("renders the notifications region", () => {
    render(<Toaster />);
    expect(
      screen.getByRole("region", { name: /notifications/i }),
    ).toBeInTheDocument();
  });
});

describe("toast", () => {
  it("re-exports the sonner toast function", () => {
    expect(typeof toast).toBe("function");
  });
});
