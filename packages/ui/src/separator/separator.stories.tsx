import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./separator";

const meta = {
  title: "Componentes/Separator",
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <div className="text-sm">Seção A</div>
      <Separator className="my-3" />
      <div className="text-sm">Seção B</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-3">
      <span className="text-sm">Item 1</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Item 2</span>
    </div>
  ),
};
