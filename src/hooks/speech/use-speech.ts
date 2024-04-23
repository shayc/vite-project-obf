import { useEffect, useState } from "react";
import {
  DEFAULT_PITCH,
  DEFAULT_RATE,
  DEFAULT_VOLUME,
  asyncSpeechSynthesis,
} from "./async-speech-synth";

export const useSpeech = () => {
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [pitch, setPitch] = useState(DEFAULT_PITCH);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  async function speak(text: string) {
    await asyncSpeechSynthesis.speak(text, { volume, rate, pitch });
  }

  useEffect(() => {
    async function initSpeech() {
      const voices = await asyncSpeechSynthesis.getVoices();
      setVoices(voices);
    }

    void initSpeech();
  }, []);

  return { speak, voices, setVolume, setRate, setPitch, volume, rate, pitch };
};
