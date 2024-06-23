import { Button, Subtitle2 } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { PitchSlider } from "../../../features/Speech/components/PitchSlider";
import { RateSlider } from "../../../features/Speech/components/RateSlider";
import { VoiceDropdown } from "../../../features/Speech/components/VoiceDropdown";
import { VolumeSlider } from "../../../features/Speech/components/VolumeSlider";
import { useSpeech } from "../../../features/Speech/use-speech";

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
