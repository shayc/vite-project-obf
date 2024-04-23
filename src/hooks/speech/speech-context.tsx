import { createContext, useEffect, useState } from "react";
import {
  DEFAULT_PITCH,
  DEFAULT_RATE,
  DEFAULT_VOLUME,
  asyncSpeechSynthesis,
} from "./async-speech";

interface SpeechProviderProps {
  children: React.ReactNode;
}

interface ContextValue {
  options: Pick<SpeechSynthesisUtterance, "volume" | "rate" | "pitch">;
  voices: SpeechSynthesisVoice[];
  speak: (text: string) => Promise<void>;
  setVolume: (volume: number) => void;
  setRate: (rate: number) => void;
  setPitch: (pitch: number) => void;
}

export const SpeechContext = createContext<ContextValue | undefined>(undefined);

export function SpeechProvider({ children }: SpeechProviderProps) {
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [pitch, setPitch] = useState(DEFAULT_PITCH);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  async function speak(text: string) {
    return asyncSpeechSynthesis.speak(text, { volume, rate, pitch });
  }

  const value: ContextValue = {
    options: { volume, rate, pitch },
    voices,
    speak,
    setVolume,
    setRate,
    setPitch,
  };

  useEffect(() => {
    async function initSpeech() {
      const voices = await asyncSpeechSynthesis.getVoices();
      setVoices(voices);
    }

    void initSpeech();
  }, []);

  return (
    <SpeechContext.Provider value={value}>{children}</SpeechContext.Provider>
  );
}
