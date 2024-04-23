import { useContext } from "react";
import { SpeechContext } from "./speech-context";

export function useSpeech() {
  const context = useContext(SpeechContext);

  if (context === undefined) {
    throw new Error("useSpeech must be used within a SpeechProvider");
  }
  return context;
}
