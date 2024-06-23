import { Button, Subtitle2 } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { useSpeech } from "../../../features/Speech/use-speech";
import { PitchSlider } from "./PitchSlider";
import { RateSlider } from "./RateSlider";
import { VoiceDropdown } from "./VoiceDropdown";
import { VolumeSlider } from "./VolumeSlider";

export function SpeechSettings() {
  const { t } = useTranslation();
  const { speak } = useSpeech();

  function handlePreviewButtonClick() {
    void speak(t("settings.previewText"));
  }

  return (
    <div>
      <Subtitle2>{t("settings.speech")}</Subtitle2>

      <VoiceDropdown />
      <VolumeSlider />
      <RateSlider />
      <PitchSlider />

      <Button onClick={handlePreviewButtonClick}>
        {t("settings.preview")}
      </Button>
    </div>
  );
}
