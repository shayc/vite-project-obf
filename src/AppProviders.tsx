import { useTranslation } from "react-i18next";
import { SpeechProvider } from "./features/Speech/speech-context";
import { ThemeProvider } from "./features/Theme/theme-context";

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  const { i18n } = useTranslation();
  const dir = i18n.dir();

  return (
    <ThemeProvider dir={dir}>
      <SpeechProvider>{children}</SpeechProvider>
    </ThemeProvider>
  );
}
