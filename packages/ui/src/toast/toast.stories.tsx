import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { toast } from "./toast";

const meta = {
  title: "Componentes/Toast",
  parameters: {
    docs: {
      description: {
        component:
          "O `<Toaster />` é montado uma vez globalmente (decorator do Storybook). Aqui só disparamos `toast(...)`.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basico: Story = {
  render: () => (
    <Button onClick={() => toast("Lead atualizado com sucesso")}>
      Mostrar toast
    </Button>
  ),
};

export const Sucesso: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.success("Ação registrada", {
          description: "Cadastro salvo no funil comercial.",
        })
      }
    >
      Sucesso
    </Button>
  ),
};

export const Erro: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() =>
        toast.error("Não foi possível salvar", {
          description: "Verifique sua conexão e tente novamente.",
        })
      }
    >
      Erro
    </Button>
  ),
};

export const ComAcao: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Corretor removido", {
          action: {
            label: "Desfazer",
            onClick: () => toast("Ação desfeita"),
          },
        })
      }
    >
      Com ação (desfazer)
    </Button>
  ),
};
