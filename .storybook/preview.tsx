import type { Preview } from "@storybook/react";
import React, { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { SpeechProvider } from "../src/features/speech";
import { ThemeProvider, Themes } from "../src/features/theme";
import { i18n } from "../src/i18n/i18n";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const { locale, theme } = context.globals;
      const dir = i18n.dir();

      useEffect(() => {
        i18n.changeLanguage(locale);
      }, [locale]);

      return (
        <Suspense fallback={<div>Loading translations...</div>}>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={Themes[theme]} dir={dir}>
              <SpeechProvider>
                <Story />
              </SpeechProvider>
            </ThemeProvider>
          </I18nextProvider>
        </Suspense>
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
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      description: "Internationalization locale",
      defaultValue: "en",
      toolbar: {
        title: "Locale",
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "he", title: "עברית" },
        ],
        dynamicTitle: true,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
