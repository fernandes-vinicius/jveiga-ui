import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../input";
import { Label } from "./label";

const meta = {
  title: "Componentes/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Nome",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ComInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="nome-story">Nome completo</Label>
      <Input id="nome-story" placeholder="Digite seu nome" />
    </div>
  ),
};
