import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../badge";
import { Button } from "../button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "Componentes/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Funil comercial</CardTitle>
        <CardDescription>Últimos 30 dias</CardDescription>
        <CardAction>
          <Badge variant="secondary">Ao vivo</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          128 leads recebidos, 42 convertidos em visita.
        </p>
      </CardContent>
      <CardFooter className="border-t">
        <Button variant="outline" size="sm">
          Ver detalhes
        </Button>
      </CardFooter>
    </Card>
  ),
};
