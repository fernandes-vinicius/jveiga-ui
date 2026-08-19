import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

function renderTabs() {
  return render(
    <Tabs defaultValue="funil">
      <TabsList>
        <TabsTrigger value="funil">Funil</TabsTrigger>
        <TabsTrigger value="metas">Metas</TabsTrigger>
      </TabsList>
      <TabsContent value="funil">Conteúdo do funil</TabsContent>
      <TabsContent value="metas">Conteúdo de metas</TabsContent>
    </Tabs>,
  );
}

describe("Tabs", () => {
  it("shows the default tab content", () => {
    renderTabs();
    expect(screen.getByText("Conteúdo do funil")).toBeInTheDocument();
    expect(screen.queryByText("Conteúdo de metas")).not.toBeInTheDocument();
  });

  it("switches content when another trigger is clicked", () => {
    renderTabs();
    const trigger = screen.getByText("Metas");
    fireEvent.mouseDown(trigger, { button: 0 });
    fireEvent.mouseUp(trigger, { button: 0 });
    fireEvent.click(trigger, { button: 0 });
    expect(screen.getByText("Conteúdo de metas")).toBeInTheDocument();
    expect(screen.queryByText("Conteúdo do funil")).not.toBeInTheDocument();
  });
});
