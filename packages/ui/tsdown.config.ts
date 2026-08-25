import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  platform: "neutral",
  deps: {
    neverBundle: [
      "react",
      "react-dom",
      /^react\//,
      "@fernandes-vinicius/jveiga-icons",
      "@fernandes-vinicius/jveiga-tokens",
      "@fernandes-vinicius/jveiga-utils",
      "cmdk",
      "date-fns",
      "react-day-picker",
      "sonner",
    ],
  },
  // rolldown não preserva a diretiva "use client" dos módulos de origem ao
  // fazer bundle num único arquivo — todo componente aqui é Radix/client,
  // então forçamos via banner em vez de depender do bundler.
  banner: '"use client";',
  dts: true,
  clean: true,
});
