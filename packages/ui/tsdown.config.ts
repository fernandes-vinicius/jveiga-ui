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
  dts: true,
  clean: true,
});
