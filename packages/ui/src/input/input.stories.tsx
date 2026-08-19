import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta = {
  title: "Componentes/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Buscar...",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Invalido: Story = {
  args: { "aria-invalid": true, defaultValue: "valor inválido" },
};

export const Email: Story = {
  args: { type: "email", placeholder: "voce@empresa.com" },
};
