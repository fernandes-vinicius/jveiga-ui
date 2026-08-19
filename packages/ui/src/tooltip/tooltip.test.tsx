import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

describe("Tooltip", () => {
  it("does not render the content until triggered", () => {
    render(
      <Tooltip>
        <TooltipTrigger>Ajuda</TooltipTrigger>
        <TooltipContent>Texto de ajuda</TooltipContent>
      </Tooltip>,
    );
    expect(screen.queryByText("Texto de ajuda")).not.toBeInTheDocument();
  });

  it("shows the content when the trigger receives focus", async () => {
    render(
      <Tooltip>
        <TooltipTrigger>Ajuda</TooltipTrigger>
        <TooltipContent>Texto de ajuda</TooltipContent>
      </Tooltip>,
    );
    fireEvent.focus(screen.getByText("Ajuda"));
    expect(await screen.findByText("Texto de ajuda")).toBeInTheDocument();
  });
});
