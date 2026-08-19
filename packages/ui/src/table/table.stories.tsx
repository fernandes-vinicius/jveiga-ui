import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta = {
  title: "Componentes/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

const corretores = [
  { nome: "Ana Souza", leads: 24, status: "Ativo" },
  { nome: "Bruno Lima", leads: 18, status: "Ativo" },
  { nome: "Carla Nunes", leads: 5, status: "Inativo" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption className="sr-only">Lista de corretores</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead className="text-center">Leads</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {corretores.map((c) => (
          <TableRow key={c.nome}>
            <TableCell className="font-medium">{c.nome}</TableCell>
            <TableCell className="text-center tabular-nums">
              {c.leads}
            </TableCell>
            <TableCell>
              <Badge variant={c.status === "Ativo" ? "default" : "secondary"}>
                {c.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
