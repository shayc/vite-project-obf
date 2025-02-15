import { useTranslation } from "react-i18next";
import { SpeechProvider } from "./features/speech/speech-context";
import { ThemeProvider } from "./features/theme/theme-context";

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
