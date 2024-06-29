import {
  Label,
  Slider,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { MAX_PITCH, MIN_PITCH } from "../async-speech-synthesis";
import { useSpeech } from "../speech-context";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: tokens.spacingVerticalL,
  },
});

export function PitchSlider() {
  const { t } = useTranslation();
  const classes = useStyles();
  const { pitch, setPitch } = useSpeech();
  const pitchId = useId();

  return (
    <div className={classes.root}>
      <Label htmlFor={pitchId}>{t("settings.pitch")}</Label>
      <Slider
        id={pitchId}
        value={pitch}
        min={MIN_PITCH}
        max={MAX_PITCH}
        step={0.2}
        onChange={(_ev, data) => setPitch(data.value)}
      />
    </div>
  );
}
