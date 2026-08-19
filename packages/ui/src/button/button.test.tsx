import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Salvar</Button>);
    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
  });

  it("applies the default variant/size data attributes", () => {
    render(<Button>Salvar</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-variant", "default");
    expect(button).toHaveAttribute("data-size", "default");
  });

  it("applies variant and size data attributes when set", () => {
    render(
      <Button variant="destructive" size="lg">
        Excluir
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-variant", "destructive");
    expect(button).toHaveAttribute("data-size", "lg");
  });

  it("is disabled when the disabled prop is set", () => {
    render(<Button disabled>Salvar</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("fires onClick", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Salvar</Button>);
    screen.getByRole("button").click();
    expect(onClick).toHaveBeenCalledOnce();
  });
});
