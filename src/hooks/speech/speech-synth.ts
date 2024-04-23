export async function speak(text: string) {
  return new Promise<void>((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => resolve();
    utterance.onerror = (error) => reject(error);

    window.speechSynthesis.speak(utterance);
  });
}

export async function getVoices() {
  return new Promise<SpeechSynthesisVoice[]>((resolve) => {
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices());
    };
  });
}
