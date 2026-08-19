import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Combobox } from "./combobox";

const options = [
  { value: "ana", label: "Ana Souza" },
  { value: "bruno", label: "Bruno Lima" },
];

describe("Combobox", () => {
  it("shows the placeholder when no value is selected", () => {
    render(<Combobox options={options} placeholder="Selecione um corretor" />);
    expect(screen.getByText("Selecione um corretor")).toBeInTheDocument();
  });

  it("opens and selects an option", () => {
    const onValueChange = vi.fn();
    render(
      <Combobox
        options={options}
        placeholder="Selecione um corretor"
        onValueChange={onValueChange}
      />,
    );
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Bruno Lima"));
    expect(onValueChange).toHaveBeenCalledWith("bruno");
  });

  it("shows the selected option label on the trigger", () => {
    render(
      <Combobox
        options={options}
        value="ana"
        placeholder="Selecione um corretor"
      />,
    );
    expect(screen.getByRole("combobox")).toHaveTextContent("Ana Souza");
  });
});
