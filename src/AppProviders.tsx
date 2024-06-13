import { I18nextProvider } from "react-i18next";
import { SpeechProvider } from "./hooks/speech/speech-context";
import { ThemeProvider } from "./hooks/theme/theme-context";
import { i18n } from "./i18n";

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <SpeechProvider>{children}</SpeechProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
