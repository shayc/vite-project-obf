import {
  Button,
  Dropdown,
  Label,
  Option,
  Slider,
  Subtitle2,
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
import classes from "./SpeechSettings.module.css";

export function SpeechSettings() {
  const { options, voices, setVolume, setRate, setPitch, speak } = useSpeech();

  const volumeId = useId();
  const rateId = useId();
  const pitchId = useId();
  const voiceId = useId();

  return (
    <div>
      <Subtitle2>Speech</Subtitle2>

      <div className={classes.setting}>
        <Label htmlFor={voiceId}>Voice</Label>
        <Dropdown aria-labelledby={voiceId} placeholder="Select a voice">
          {voices.map((voice) => (
            <Option key={voice.voiceURI}>{voice.name}</Option>
          ))}
        </Dropdown>
      </div>

      <div className={classes.setting}>
        <Label htmlFor={volumeId}>Volume</Label>
        <Slider
          value={options.volume}
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
          value={options.rate}
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
          value={options.pitch}
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