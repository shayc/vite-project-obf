import {
  Dropdown,
  Label,
  Option,
  OptionGroup,
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

export function VoiceDropdown() {
  const classes = useStyles();

  const { groupedVoices, setSelectedVoiceURI } = useSpeech();
  const voiceId = useId();

  return (
    <div className={classes.root}>
      <Label htmlFor={voiceId}>Voice</Label>
      <Dropdown id={voiceId} placeholder="Select a voice">
        {Object.entries(groupedVoices).map(([lang, voices]) => (
          <OptionGroup key={lang} label={lang}>
            {voices?.map((voice) => (
              <Option key={voice.name}>{voice.name}</Option>
            ))}
          </OptionGroup>
        ))}
      </Dropdown>
    </div>
  );
}
