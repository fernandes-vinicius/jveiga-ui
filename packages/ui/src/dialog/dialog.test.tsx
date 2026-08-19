import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

function renderDialog() {
  return render(
    <Dialog>
      <DialogTrigger>Abrir</DialogTrigger>
      <DialogContent>
        <DialogTitle>Excluir lead</DialogTitle>
        <DialogDescription>Essa ação não pode ser desfeita.</DialogDescription>
        <DialogClose>Cancelar</DialogClose>
      </DialogContent>
    </Dialog>,
  );
}

describe("Dialog", () => {
  it("is closed by default", () => {
    renderDialog();
    expect(screen.queryByText("Excluir lead")).not.toBeInTheDocument();
  });

  it("opens when the trigger is clicked", () => {
    renderDialog();
    fireEvent.click(screen.getByText("Abrir"));
    expect(screen.getByText("Excluir lead")).toBeInTheDocument();
    expect(
      screen.getByText("Essa ação não pode ser desfeita."),
    ).toBeInTheDocument();
  });

  it("closes when the close trigger is clicked", () => {
    renderDialog();
    fireEvent.click(screen.getByText("Abrir"));
    fireEvent.click(screen.getByText("Cancelar"));
    expect(screen.queryByText("Excluir lead")).not.toBeInTheDocument();
  });
});
