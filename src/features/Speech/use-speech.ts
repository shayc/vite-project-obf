import { createContext, useContext } from "react";

type Lang = string;

export type VoicesByLang = Record<
  Lang,
  { language: string; voices: SpeechSynthesisVoice[] }
>;

export function groupVoicesByLang(
  voices: SpeechSynthesisVoice[],
): VoicesByLang {
  const displayNames = new Intl.DisplayNames(["en"], { type: "language" });

  return voices.reduce((acc, voice) => {
    const lang = voice.lang;

    if (!acc[lang]) {
      acc[lang] = {
        language: displayNames.of(lang) ?? lang,
        voices: [],
      };
    }

    acc[lang].voices.push(voice);

    return acc;
  }, {} as VoicesByLang);
}

export const SpeechContext = createContext<SpeechContextValue | undefined>(
  undefined,
);

export interface SpeechContextValue {
  isSpeaking: boolean;
  volume: number;
  rate: number;
  pitch: number;
  voices: SpeechSynthesisVoice[];
  voicesByLang: VoicesByLang;
  selectedVoiceURI: string;
  speak: (text: string) => Promise<void>;
  setVolume: (volume: number) => void;
  setRate: (rate: number) => void;
  setPitch: (pitch: number) => void;
  setSelectedVoiceURI: (voiceURI: string) => void;
}

export function useSpeech() {
  const context = useContext(SpeechContext);

  if (context === undefined) {
    throw new Error("useSpeech must be used within a SpeechProvider");
  }
  return context;
}
