import { LanguageSettings } from "./LanguageSettings/LanguageSettings";
import { SpeechSettings } from "./SpeechSettings/SpeechSettings";
import { ThemeSettings } from "./ThemeSettings/ThemeSettings";

export function AppSettings() {
  return (
    <>
      <ThemeSettings />
      <LanguageSettings />
      <SpeechSettings />
    </>
  );
}
