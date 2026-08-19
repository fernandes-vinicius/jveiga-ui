import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders its text", () => {
    render(<Badge>Novo</Badge>);
    expect(screen.getByText("Novo")).toBeInTheDocument();
  });

  it("defaults to the default variant", () => {
    render(<Badge>Novo</Badge>);
    expect(screen.getByText("Novo")).toHaveAttribute("data-variant", "default");
  });

  it("applies the variant data attribute when set", () => {
    render(<Badge variant="destructive">Erro</Badge>);
    expect(screen.getByText("Erro")).toHaveAttribute(
      "data-variant",
      "destructive",
    );
  });
});
