import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Alert, AlertDescription, AlertTitle } from "./alert";

describe("Alert", () => {
  it("renders as an alert role with title and description", () => {
    render(
      <Alert>
        <AlertTitle>Atenção</AlertTitle>
        <AlertDescription>Confira os dados antes de salvar.</AlertDescription>
      </Alert>,
    );
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Atenção")).toBeInTheDocument();
    expect(
      screen.getByText("Confira os dados antes de salvar."),
    ).toBeInTheDocument();
  });

  it("defaults to the default variant", () => {
    render(<Alert>conteúdo</Alert>);
    expect(screen.getByRole("alert")).toHaveAttribute(
      "data-variant",
      "default",
    );
  });

  it("applies the variant data attribute when set", () => {
    render(<Alert variant="destructive">conteúdo</Alert>);
    expect(screen.getByRole("alert")).toHaveAttribute(
      "data-variant",
      "destructive",
    );
  });
});
