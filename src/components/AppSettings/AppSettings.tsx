import { AppearanceSettings } from "./AppearanceSettings/AppearanceSettings";
import { LanguageSettings } from "./LanguageSettings/LanguageSettings";
import { SpeechSettings } from "./SpeechSettings/SpeechSettings";

export function AppSettings() {
  return (
    <>
      <AppearanceSettings />
      <LanguageSettings />
      <SpeechSettings />
    </>
  );
}
