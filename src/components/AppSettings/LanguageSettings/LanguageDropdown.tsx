import {
  Dropdown,
  Label,
  Option,
  OptionOnSelectData,
  SelectionEvents,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

const languages = [
  { name: "English", langCode: "en" },
  { name: "Hebrew", langCode: "he" },
];

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: tokens.spacingVerticalL,
  },
});

export function LanguageDropdown() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const languageId = useId();

  function handleLanguageChange(
    _event: SelectionEvents,
    data: OptionOnSelectData,
  ): void {
    void i18n.changeLanguage(data.optionValue);
  }

  return (
    <div className={classes.root}>
      <Label htmlFor={languageId}>{t("settings.language")}</Label>
      <Dropdown
        id={languageId}
        placeholder={t("settings.selectALanguage")}
        onOptionSelect={handleLanguageChange}
      >
        {languages.map(({ name, langCode }) => (
          <Option key={langCode} value={langCode}>
            {`${name}`}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
}
