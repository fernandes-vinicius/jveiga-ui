import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./progress";

const meta = {
  title: "Componentes/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: {
    value: 60,
    "aria-label": "Progresso",
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Progress {...args} className="w-64" />,
};

export const Vazio: Story = {
  args: { value: 0 },
  render: (args) => <Progress {...args} className="w-64" />,
};

export const Completo: Story = {
  args: { value: 100 },
  render: (args) => <Progress {...args} className="w-64" />,
};
