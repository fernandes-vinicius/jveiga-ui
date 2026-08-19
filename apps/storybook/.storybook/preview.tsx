import { Toaster } from "@jveiga-ui/ui";
import type { Preview } from "@storybook/react-vite";
import "./tailwind.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "app",
      values: [{ name: "app", value: "#eef3fa" }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
