import {
  Label,
  Slider,
  makeStyles,
  tokens,
  useId
} from "@fluentui/react-components";
import { MAX_VOLUME, MIN_VOLUME } from "../../../hooks/speech/async-speech";
import { useSpeech } from "../../../hooks/speech/use-speech";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: tokens.spacingVerticalL,
  },
});

export function VolumeSlider() {
  const classes = useStyles();

  const { volume, setVolume } = useSpeech();
  const volumeId = useId();

  return (
    <div className={classes.root}>
      <Label htmlFor={volumeId}>Volume</Label>
      <Slider
        value={volume}
        min={MIN_VOLUME}
        max={MAX_VOLUME}
        step={0.1}
        id={volumeId}
        onChange={(_ev, data) => setVolume(data.value)}
      />
    </div>
  );
}
