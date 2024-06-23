import { Button, Subtitle2 } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import {
  PitchSlider,
  RateSlider,
  VoiceDropdown,
  VolumeSlider,
  useSpeech,
} from "../../../features/speech";

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
