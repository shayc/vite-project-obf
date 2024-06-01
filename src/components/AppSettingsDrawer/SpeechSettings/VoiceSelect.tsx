import {
  Label,
  Select,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import { useSpeech } from "../../../hooks/speech/use-speech";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: tokens.spacingVerticalL,
  },
});

export function VoiceSelect() {
  const classes = useStyles();

  const { voices, setSelectedVoiceURI } = useSpeech();
  const voiceId = useId();

  return (
    <div className={classes.root}>
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
  );
}
