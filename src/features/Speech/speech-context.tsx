import { createContext, useContext, useEffect, useState } from "react";
import {
  DEFAULT_PITCH,
  DEFAULT_RATE,
  DEFAULT_VOLUME,
  VoicesByLang,
  asyncSpeechSynthesis,
} from "./async-speech-synthesis";

interface SpeechContextValue {
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

const SpeechContext = createContext<SpeechContextValue | undefined>(
  undefined,
);

interface SpeechProviderProps {
  children: React.ReactNode;
}

export function SpeechProvider({ children }: SpeechProviderProps) {
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [pitch, setPitch] = useState(DEFAULT_PITCH);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const voicesByLang = asyncSpeechSynthesis.groupVoicesByLang(voices);

  async function speak(text: string) {
    const voice = voices.find((voice) => voice.voiceURI === selectedVoiceURI);

    return asyncSpeechSynthesis.speak(text, {
      volume,
      rate,
      pitch,
      voice,
      onstart: () => setIsSpeaking(true),
      onpause: () => setIsSpeaking(false),
      onresume: () => setIsSpeaking(true),
      onend: () => setIsSpeaking(false),
      onerror: () => setIsSpeaking(false),
    });
  }

  const value: SpeechContextValue = {
    isSpeaking,
    volume,
    rate,
    pitch,
    voices,
    voicesByLang,
    selectedVoiceURI,
    speak,
    setVolume,
    setRate,
    setPitch,
    setSelectedVoiceURI,
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

export function useSpeech() {
  const context = useContext(SpeechContext);

  if (context === undefined) {
    throw new Error("useSpeech must be used within a SpeechProvider");
  }
  return context;
}
