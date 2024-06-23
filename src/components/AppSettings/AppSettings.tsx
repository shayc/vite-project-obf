import { AppearanceSettings } from "./components/AppearanceSettings";
import { LanguageSettings } from "./components/LanguageSettings";
import { SpeechSettings } from "./components/SpeechSettings";

export function AppSettings() {
  return (
    <>
      <AppearanceSettings />
      <LanguageSettings />
      <SpeechSettings />
    </>
  );
}
