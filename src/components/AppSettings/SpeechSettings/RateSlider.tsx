import {
  Label,
  Slider,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { MAX_RATE, MIN_RATE } from "../../../hooks/speech/async-speech";
import { useSpeech } from "../../../hooks/speech/use-speech";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: tokens.spacingVerticalL,
  },
});

export function RateSlider() {
  const { t } = useTranslation();
  const classes = useStyles();
  const { rate, setRate } = useSpeech();
  const rateId = useId();

  return (
    <div className={classes.root}>
      <Label htmlFor={rateId}>{t("settings.rate")}</Label>
      <Slider
        value={rate}
        min={MIN_RATE}
        max={MAX_RATE}
        step={0.2}
        id={rateId}
        onChange={(_ev, data) => setRate(data.value)}
      />
    </div>
  );
}
