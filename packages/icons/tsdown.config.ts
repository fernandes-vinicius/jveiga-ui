import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  platform: "neutral",
  deps: {
    neverBundle: ["react", "react-dom", /^react\//, "lucide-react"],
  },
  dts: true,
  clean: true,
});
