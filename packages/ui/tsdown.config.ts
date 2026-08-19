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
      "@jveiga-ui/icons",
      "@jveiga-ui/tokens",
      "@jveiga-ui/utils",
      "cmdk",
      "date-fns",
      "react-day-picker",
      "sonner",
    ],
  },
  dts: true,
  clean: true,
});
