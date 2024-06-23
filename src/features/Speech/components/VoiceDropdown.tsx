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
import { useTranslation } from "react-i18next";
import { useSpeech } from "../speech-context";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: tokens.spacingVerticalL,
  },
});

export function VoiceDropdown() {
  const { t } = useTranslation();
  const classes = useStyles();
  const { voicesByLang, setSelectedVoiceURI } = useSpeech();
  const voiceId = useId();

  function handleVoiceSelect(
    _ev: SelectionEvents,
    data: OptionOnSelectData,
  ): void {
    setSelectedVoiceURI(data.optionValue ?? "");
  }

  return (
    <div className={classes.root}>
      <Label htmlFor={voiceId}>{t("settings.voice")}</Label>
      <Dropdown
        id={voiceId}
        placeholder={t("settings.selectAVoice")}
        onOptionSelect={handleVoiceSelect}
      >
        {Object.entries(voicesByLang).map(
          ([lang, { name: langName, voices }]) => (
            <OptionGroup key={lang} label={langName}>
              {voices.map(({ name, voiceURI }) => (
                <Option key={voiceURI} value={voiceURI}>
                  {`${name}`}
                </Option>
              ))}
            </OptionGroup>
          ),
        )}
      </Dropdown>
    </div>
  );
}
