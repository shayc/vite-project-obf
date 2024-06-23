import {
  Label,
  Switch,
  SwitchOnChangeData,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme-context";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: tokens.spacingVerticalL,
  },
});

export function DarkModeSwitch() {
  const { t } = useTranslation();
  const classes = useStyles();
  const { isDarkMode, setIsDarkMode } = useTheme();
  const darkModeSwitchId = useId();

  function handleThemeChange(
    _ev: React.ChangeEvent<HTMLInputElement>,
    data: SwitchOnChangeData,
  ) {
    setIsDarkMode(data.checked);
  }

  return (
    <div className={classes.root}>
      <Label htmlFor={darkModeSwitchId}>{t("settings.darkMode")}</Label>
      <Switch
        id={darkModeSwitchId}
        checked={isDarkMode}
        onChange={handleThemeChange}
      />
    </div>
  );
}
