export const MIN_VOLUME = 0;
export const MAX_VOLUME = 1;
export const DEFAULT_VOLUME = 1;

export const MIN_RATE = 0;
export const MAX_RATE = 2;
export const DEFAULT_RATE = 1;

export const MIN_PITCH = 0;
export const MAX_PITCH = 2;
export const DEFAULT_PITCH = 1;

const synth = window.speechSynthesis;

async function speak(
  text: string,
  options: Partial<
    Omit<SpeechSynthesisUtterance, "addEventListener" | "removeEventListener">
  > = {
    volume: DEFAULT_VOLUME,
    rate: DEFAULT_RATE,
    pitch: DEFAULT_PITCH,
  },
) {
  return new Promise<void>((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);

    Object.assign(utterance, options, {
      onend: resolve,
      onerror: reject,
    });

    synth.speak(utterance);
  });
}

async function getVoices() {
  return new Promise<SpeechSynthesisVoice[]>((resolve) => {
    synth.onvoiceschanged = () => {
      resolve(synth.getVoices());
    };
  });
}

export const asyncSpeechSynthesis = {
  speak,
  getVoices,
};
