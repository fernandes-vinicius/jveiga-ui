import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar, AvatarFallback } from "./avatar";

describe("Avatar", () => {
  it("renders fallback initials", () => {
    render(
      <Avatar>
        <AvatarFallback>VF</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("VF")).toBeInTheDocument();
  });

  it("applies the size data attribute", () => {
    const { container } = render(
      <Avatar size="lg">
        <AvatarFallback>VF</AvatarFallback>
      </Avatar>,
    );
    expect(container.querySelector('[data-slot="avatar"]')).toHaveAttribute(
      "data-size",
      "lg",
    );
  });
});
