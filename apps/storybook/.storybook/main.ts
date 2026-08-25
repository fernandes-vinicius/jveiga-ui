import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
  stories: ["../../../packages/*/src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (viteConfig, options) => {
    viteConfig.plugins = [
      ...(viteConfig.plugins ?? []),
      react(),
      tailwindcss(),
    ];
    // GitHub Pages serve este projeto em /jveiga-ui/, não na raiz do domínio.
    // Só aplica quando o workflow de deploy define STORYBOOK_BASE_PATH — o
    // build usado pelo Test Runner no CI continua servido na raiz.
    if (
      options.configType === "PRODUCTION" &&
      process.env.STORYBOOK_BASE_PATH
    ) {
      viteConfig.base = process.env.STORYBOOK_BASE_PATH;
    }
    return viteConfig;
  },
};

export default config;
