import {
  Button,
  Label,
  Select,
  Slider,
  Subtitle2,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import {
  MAX_PITCH,
  MAX_RATE,
  MAX_VOLUME,
  MIN_PITCH,
  MIN_RATE,
  MIN_VOLUME,
} from "../../../hooks/speech/async-speech";
import { useSpeech } from "../../../hooks/speech/use-speech";

const useStyles = makeStyles({
  setting: {
    display: "flex",
    flexDirection: "column",
    marginBottom: tokens.spacingVerticalL,
  },
});

export function SpeechSettings() {
  const {
    volume,
    rate,
    pitch,
    voices,
    setSelectedVoiceURI,
    setVolume,
    setRate,
    setPitch,
    speak,
  } = useSpeech();

  const classes = useStyles();

  const volumeId = useId();
  const rateId = useId();
  const pitchId = useId();
  const voiceId = useId();

  return (
    <div>
      <Subtitle2>Speech</Subtitle2>

      <div className={classes.setting}>
        <Label htmlFor={voiceId}>Voice</Label>
        <Select
          id={voiceId}
          onChange={(_ev, data) => setSelectedVoiceURI(data.value)}
        >
          {voices.map((voice) => (
            <option key={voice.voiceURI}>{voice.name}</option>
          ))}
        </Select>
      </div>

      <div className={classes.setting}>
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

      <div className={classes.setting}>
        <Label htmlFor={rateId}>Rate</Label>
        <Slider
          value={rate}
          min={MIN_RATE}
          max={MAX_RATE}
          step={0.2}
          id={rateId}
          onChange={(_ev, data) => setRate(data.value)}
        />
      </div>

      <div className={classes.setting}>
        <Label htmlFor={pitchId}>Pitch</Label>
        <Slider
          value={pitch}
          min={MIN_PITCH}
          max={MAX_PITCH}
          step={0.2}
          id={pitchId}
          onChange={(_ev, data) => setPitch(data.value)}
        />
      </div>

      <Button onClick={() => void speak("Hi, this is my voice")}>
        Preview
      </Button>
    </div>
  );
}
