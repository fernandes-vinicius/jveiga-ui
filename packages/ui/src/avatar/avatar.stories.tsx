import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta = {
  title: "Componentes/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>VF</AvatarFallback>
    </Avatar>
  ),
};

export const ComImagem: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="Usuário" />
      <AvatarFallback>VF</AvatarFallback>
    </Avatar>
  ),
};

export const Tamanhos: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};
