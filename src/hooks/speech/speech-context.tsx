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
type LangCode = string;
type GroupedVoices = Record<LangCode, SpeechSynthesisVoice[]>;

interface ContextValue {
  isSpeaking: boolean;
  volume: number;
  rate: number;
  pitch: number;
  groupedVoices: GroupedVoices;
  selectedVoiceURI: string;
  speak: (text: string) => Promise<void>;
  setVolume: (volume: number) => void;
  setRate: (rate: number) => void;
  setPitch: (pitch: number) => void;
  setSelectedVoiceURI: (voiceURI: string) => void;
}

export const SpeechContext = createContext<ContextValue | undefined>(undefined);

export function SpeechProvider({ children }: SpeechProviderProps) {
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [pitch, setPitch] = useState(DEFAULT_PITCH);
  const [groupedVoices, setGroupedVoices] = useState<GroupedVoices>({});
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  async function speak(text: string) {
    const voice = findVoiceInGroupedVoices(groupedVoices, selectedVoiceURI);

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

  const value: ContextValue = {
    isSpeaking,
    volume,
    rate,
    pitch,
    groupedVoices,
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
      const groupedVoices = groupVoicesByLang(voices);
      setGroupedVoices(groupedVoices);
    }

    void initSpeech();
  }, []);

  return (
    <SpeechContext.Provider value={value}>{children}</SpeechContext.Provider>
  );
}

function groupVoicesByLang(voices: SpeechSynthesisVoice[]): GroupedVoices {
  return voices.reduce((acc, voice) => {
    const lang = voice.lang;

    if (!acc[lang]) {
      acc[lang] = [];
    }

    acc[lang].push(voice);

    return acc;
  }, {} as GroupedVoices);
}

function findVoiceInGroupedVoices(
  groupedVoices: GroupedVoices,
  uri: string,
): SpeechSynthesisVoice | undefined {
  for (const lang in groupedVoices) {
    const voices = groupedVoices[lang];
    const foundVoice = voices.find((voice) => voice.voiceURI === uri);
    if (foundVoice) {
      return foundVoice;
    }
  }

  return;
}
