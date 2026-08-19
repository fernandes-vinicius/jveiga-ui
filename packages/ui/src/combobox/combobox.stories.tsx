import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { Combobox } from "./combobox";

const corretores = [
  { value: "ana", label: "Ana Souza" },
  { value: "bruno", label: "Bruno Lima" },
  { value: "carla", label: "Carla Nunes" },
  { value: "daniel", label: "Daniel Alves" },
];

const meta = {
  title: "Componentes/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  args: {
    options: corretores,
  },
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    return (
      <Combobox
        options={corretores}
        value={value}
        onValueChange={setValue}
        placeholder="Selecione um corretor"
        searchPlaceholder="Buscar corretor..."
        emptyText="Nenhum corretor encontrado."
      />
    );
  },
};
