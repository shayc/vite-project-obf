export const MIN_VOLUME = 0;
export const MAX_VOLUME = 1;
export const DEFAULT_VOLUME = 1;

export const MIN_RATE = 0;
export const MAX_RATE = 2;
export const DEFAULT_RATE = 1;

export const MIN_PITCH = 0;
export const MAX_PITCH = 2;
export const DEFAULT_PITCH = 1;

type Lang = string;

export type VoicesByLang = Record<
  Lang,
  { name: string; voices: SpeechSynthesisVoice[] }
>;

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

    Object.assign(utterance, options);

    utterance.onend = () => {
      resolve();
    };

    utterance.onerror = (event) => {
      reject(event);
    };

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

function groupVoicesByLang(voices: SpeechSynthesisVoice[]): VoicesByLang {
  const displayNames = new Intl.DisplayNames(["en"], { type: "language" });

  return voices.reduce((acc, voice) => {
    const lang = voice.lang;

    if (!acc[lang]) {
      acc[lang] = {
        name: displayNames.of(lang) ?? lang,
        voices: [],
      };
    }

    acc[lang].voices.push(voice);

    return acc;
  }, {} as VoicesByLang);
}

function getLanguages(voices: SpeechSynthesisVoice[]) {
  const langCodes = Array.from(new Set(voices.map((voice) => voice.lang)));

  return langCodes.map((lang) => {
    const name = new Intl.DisplayNames([lang], { type: "language" }).of(lang);

    return {
      lang,
      name: name ?? lang,
    };
  });
}

export const asyncSpeechSynthesis = {
  getLanguages,
  getVoices,
  groupVoicesByLang,
  speak,
};
