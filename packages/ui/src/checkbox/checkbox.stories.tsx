import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../label";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Componentes/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { "aria-label": "Aceitar termos" },
};

export const Marcado: Story = {
  args: { "aria-label": "Aceitar termos", defaultChecked: true },
};

export const Desabilitado: Story = {
  args: { "aria-label": "Aceitar termos", disabled: true },
};

export const ComLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms-story" />
      <Label htmlFor="terms-story">Aceito os termos de uso</Label>
    </div>
  ),
};
