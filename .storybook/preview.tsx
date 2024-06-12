import type { Preview } from "@storybook/react";
import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider, Themes } from "../src/hooks/theme/theme-context";
import i18n from "../src/i18n";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = Themes[context.globals.theme];
      const { locale } = context.globals;

      useEffect(() => {
        i18n.changeLanguage(locale);
      }, [locale]);

      return (
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </I18nextProvider>
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
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "he", title: "Hebrew" },
        ],
        showName: true,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
