import {
  Dropdown,
  Label,
  Option,
  OptionGroup,
  OptionOnSelectData,
  SelectionEvents,
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

  function handleVoiceSelect(
    _ev: SelectionEvents,
    data: OptionOnSelectData,
  ): void {
    setSelectedVoiceURI(data.optionValue ?? "");
  }

  return (
    <div className={classes.root}>
      <Label htmlFor={voiceId}>Voice</Label>
      <Dropdown
        id={voiceId}
        placeholder="Select a voice"
        onOptionSelect={handleVoiceSelect}
      >
        {Object.entries(groupedVoices).map(([lang, voices]) => (
          <OptionGroup key={lang} label={lang}>
            {voices.map(({ name, voiceURI }) => (
              <Option key={voiceURI} value={voiceURI}>
                {`${name}`}
              </Option>
            ))}
          </OptionGroup>
        ))}
      </Dropdown>
    </div>
  );
}
