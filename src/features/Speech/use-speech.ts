import { createContext, useContext } from "react";
import { VoicesByLang } from "./async-speech-synthesis";

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
