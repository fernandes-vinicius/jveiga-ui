import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

function renderSelect() {
  return render(
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um corretor" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ana">Ana</SelectItem>
        <SelectItem value="bruno">Bruno</SelectItem>
      </SelectContent>
    </Select>,
  );
}

describe("Select", () => {
  it("shows the placeholder when no value is selected", () => {
    renderSelect();
    expect(screen.getByText("Selecione um corretor")).toBeInTheDocument();
  });

  it("opens and selects an item", () => {
    renderSelect();
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Bruno"));
    expect(screen.getByRole("combobox")).toHaveTextContent("Bruno");
  });
});
