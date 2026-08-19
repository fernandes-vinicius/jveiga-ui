import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "../input";
import { Label } from "./label";

describe("Label", () => {
  it("renders its text", () => {
    render(<Label>Nome</Label>);
    expect(screen.getByText("Nome")).toBeInTheDocument();
  });

  it("associates with a field via htmlFor", () => {
    render(
      <>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" />
      </>,
    );
    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
  });
});
