import { useState } from "react";

export const useSpeech = () => {
  const [volume, setVolume] = useState(1);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.volume = volume;
    utterance.rate = rate;
    utterance.pitch = pitch;

    speechSynthesis.speak(utterance);
  };

  return { speak, setVolume, setRate, setPitch, volume, rate, pitch };
};
