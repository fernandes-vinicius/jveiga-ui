import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

const meta = {
  title: "Componentes/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Selecione um corretor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Corretores</SelectLabel>
          <SelectItem value="ana">Ana Souza</SelectItem>
          <SelectItem value="bruno">Bruno Lima</SelectItem>
          <SelectItem value="carla">Carla Nunes</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Desabilitado: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Selecione um corretor" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ana">Ana Souza</SelectItem>
      </SelectContent>
    </Select>
  ),
};
