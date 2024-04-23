// Volume ranges from 0 to 1, default is 1
export const MIN_VOLUME = 0;
export const MAX_VOLUME = 1;
export const DEFAULT_VOLUME = 1;

// Rate ranges from 0.1 to 2, default is 1
export const MIN_RATE = 0.1;
export const MAX_RATE = 2;
export const DEFAULT_RATE = 1;

// Pitch ranges from 0 to 2, default is 1
export const MIN_PITCH = 0;
export const MAX_PITCH = 2;
export const DEFAULT_PITCH = 1;

interface SpeakOptions {
  volume: number;
  rate: number;
  pitch: number;
}

async function speak(
  text: string,
  options: SpeakOptions = {
    volume: DEFAULT_VOLUME,
    rate: DEFAULT_RATE,
    pitch: DEFAULT_PITCH,
  },
) {
  return new Promise<void>((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);

    Object.assign(utterance, options);

    utterance.onend = () => resolve();
    utterance.onerror = (error) => reject(error);

    window.speechSynthesis.speak(utterance);
  });
}

async function getVoices() {
  return new Promise<SpeechSynthesisVoice[]>((resolve) => {
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices());
    };
  });
}

export const asyncSpeechSynthesis = {
  speak,
  getVoices,
};
