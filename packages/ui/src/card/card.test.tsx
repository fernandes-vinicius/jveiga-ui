import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card", () => {
  it("renders header, title, description and content", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Funil comercial</CardTitle>
          <CardDescription>Últimos 30 dias</CardDescription>
        </CardHeader>
        <CardContent>Conteúdo</CardContent>
      </Card>,
    );
    expect(screen.getByText("Funil comercial")).toBeInTheDocument();
    expect(screen.getByText("Últimos 30 dias")).toBeInTheDocument();
    expect(screen.getByText("Conteúdo")).toBeInTheDocument();
  });
});
