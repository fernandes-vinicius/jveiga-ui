# @fernandes-vinicius/jveiga-ui

## 0.1.1

### Patch Changes

- 0f38f81: Adiciona a diretiva "use client" (via banner do build) no bundle de
  `@fernandes-vinicius/jveiga-ui`. Sem isso o pacote quebrava em qualquer
  app Next.js App Router com `TypeError: createContext only works in
  Client Components` assim que importado num Server Component, já que
  nenhum componente do pacote declarava a diretiva e o bundler não a
  preserva automaticamente ao juntar tudo num único arquivo.
