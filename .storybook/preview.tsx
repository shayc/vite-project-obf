import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider, Themes } from "../src/hooks/theme/theme-context";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = Themes[context.globals.theme];

      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
