# J Veiga UI

Design system dos projetos J Veiga — componentes, tokens, ícones e
utilitários compartilhados, publicados como pacotes npm reais no GitHub
Packages e consumidos via `npm install`/`import`, sem copiar código para
os apps consumidores.

Nome provisório (`jveiga-ui`, escopo `@fernandes-vinicius/*`); ver
histórico de decisões no plano original do projeto.

## Pacotes

| Pacote | Descrição |
|---|---|
| [`@fernandes-vinicius/jveiga-tokens`](./packages/tokens) | Tokens visuais (cores, radius, shadows, tipografia) como CSS `@theme` do Tailwind v4, incluindo dark mode |
| [`@fernandes-vinicius/jveiga-ui`](./packages/ui) | Componentes React (shadcn/ui + Radix + CVA), compilados e publicados como biblioteca |
| [`@fernandes-vinicius/jveiga-icons`](./packages/icons) | Wrapper curado sobre `lucide-react` — apps importam ícones daqui, nunca direto de `lucide-react` |
| [`@fernandes-vinicius/jveiga-utils`](./packages/utils) | `cn()`, hooks e helpers compartilhados |

## Desenvolvimento

```bash
pnpm install
pnpm storybook        # Storybook local em http://localhost:6006
pnpm turbo run build lint test typecheck
```

## Instalar num app consumidor

Os pacotes são privados no GitHub Packages. No app consumidor:

1. Crie/edite o `.npmrc` do projeto:

   ```
   @fernandes-vinicius:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

2. Exporte um `GITHUB_TOKEN` (classic PAT com escopo `read:packages`, ou o
   `GITHUB_TOKEN` automático em CI) no ambiente onde `npm install` roda.

3. Instale e use normalmente:

   ```bash
   npm install @fernandes-vinicius/jveiga-ui @fernandes-vinicius/jveiga-tokens
   ```

   ```tsx
   import { Button } from "@fernandes-vinicius/jveiga-ui";
   import "@fernandes-vinicius/jveiga-tokens/theme.css";
   ```

## Release

Versionamento e publicação via [Changesets](https://changesets.dev/):

```bash
pnpm changeset          # descreve a mudança de um PR
pnpm version-packages   # aplica os bumps de versão (normalmente via CI)
pnpm release            # build + changeset publish (roda no workflow de release)
```

O workflow `.github/workflows/release.yml` versiona/publica automaticamente
a cada push em `main`. O Storybook é publicado no GitHub Pages pelo
workflow `.github/workflows/storybook-pages.yml`.
