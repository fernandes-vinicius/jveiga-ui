import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta = {
  title: "Componentes/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="funil" className="w-96">
      <TabsList>
        <TabsTrigger value="funil">Funil</TabsTrigger>
        <TabsTrigger value="metas">Metas</TabsTrigger>
        <TabsTrigger value="checklist">Checklist</TabsTrigger>
      </TabsList>
      <TabsContent value="funil" className="text-sm">
        128 leads recebidos nos últimos 30 dias.
      </TabsContent>
      <TabsContent value="metas" className="text-sm">
        84% da meta mensal atingida.
      </TabsContent>
      <TabsContent value="checklist" className="text-sm">
        6 de 8 itens concluídos hoje.
      </TabsContent>
    </Tabs>
  ),
};
