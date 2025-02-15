import {
  Label,
  Slider,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { MAX_VOLUME, MIN_VOLUME } from "../async-speech-synthesis";
import { useSpeech } from "../speech-context";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: tokens.spacingVerticalL,
  },
});

export function VolumeSlider() {
  const { t } = useTranslation();
  const classes = useStyles();
  const { volume, setVolume } = useSpeech();
  const volumeId = useId();

  return (
    <div className={classes.root}>
      <Label htmlFor={volumeId}>{t("settings.volume")}</Label>
      <Slider
        id={volumeId}
        value={volume}
        min={MIN_VOLUME}
        max={MAX_VOLUME}
        step={0.1}
        onChange={(_ev, data) => setVolume(data.value)}
      />
    </div>
  );
}
