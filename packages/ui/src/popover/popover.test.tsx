import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

describe("Popover", () => {
  it("is closed by default", () => {
    render(
      <Popover>
        <PopoverTrigger>Abrir</PopoverTrigger>
        <PopoverContent>Conteúdo do popover</PopoverContent>
      </Popover>,
    );
    expect(screen.queryByText("Conteúdo do popover")).not.toBeInTheDocument();
  });

  it("opens when the trigger is clicked", () => {
    render(
      <Popover>
        <PopoverTrigger>Abrir</PopoverTrigger>
        <PopoverContent>Conteúdo do popover</PopoverContent>
      </Popover>,
    );
    fireEvent.click(screen.getByText("Abrir"));
    expect(screen.getByText("Conteúdo do popover")).toBeInTheDocument();
  });
});
