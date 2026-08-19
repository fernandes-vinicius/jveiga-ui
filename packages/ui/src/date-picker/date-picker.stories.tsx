import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { DatePicker } from "./date-picker";

const meta = {
  title: "Componentes/Date Picker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return <DatePicker value={date} onValueChange={setDate} />;
  },
};

export const ComValor: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <DatePicker value={date} onValueChange={setDate} />;
  },
};
