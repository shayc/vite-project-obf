import { Button, Subtitle2 } from "@fluentui/react-components";
import { useSpeech } from "../../../hooks/speech/use-speech";
import { PitchSlider } from "./PitchSlider";
import { RateSlider } from "./RateSlider";
import { VoiceDropdown } from "./VoiceDropdown";
import { VolumeSlider } from "./VolumeSlider";

const PREVIEW_TEXT = "Hi, this is my voice";

export function SpeechSettings() {
  const { speak } = useSpeech();

  function handlePreviewButtonClick() {
    void speak(PREVIEW_TEXT);
  }

  return (
    <div>
      <Subtitle2>Speech</Subtitle2>

      <VoiceDropdown />
      <VolumeSlider />
      <RateSlider />
      <PitchSlider />

      <Button onClick={handlePreviewButtonClick}>Preview</Button>
    </div>
  );
}
