import { InfoIcon, OctagonXIcon } from "@jveiga-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertDescription, AlertTitle } from "./alert";

const meta = {
  title: "Componentes/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <AlertTitle>Novidade</AlertTitle>
      <AlertDescription>
        Agora você pode filtrar por corretor no painel de acompanhamento.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert variant="info" className="max-w-md">
      <InfoIcon />
      <AlertTitle>Dica</AlertTitle>
      <AlertDescription>
        Os dados são atualizados automaticamente a cada 5 minutos.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <OctagonXIcon />
      <AlertTitle>Falha ao salvar</AlertTitle>
      <AlertDescription>
        Não foi possível registrar a ação. Tente novamente.
      </AlertDescription>
    </Alert>
  ),
};
