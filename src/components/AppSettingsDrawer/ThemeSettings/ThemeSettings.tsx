import {
  Label,
  Subtitle2,
  Switch,
  SwitchOnChangeData,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import { useTheme } from "../../../hooks/theme/theme-context";

const useStyles = makeStyles({
  setting: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: tokens.spacingVerticalL,
  },
});

export function ThemeSettings() {
  const themeId = useId();
  const { isDarkMode, setIsDarkMode } = useTheme();
  const classes = useStyles();

  function handleThemeChange(
    _ev: React.ChangeEvent<HTMLInputElement>,
    data: SwitchOnChangeData,
  ) {
    setIsDarkMode(data.checked);
  }

  return (
    <div>
      <Subtitle2>Appearance</Subtitle2>

      <div className={classes.setting}>
        <Label htmlFor={themeId}>Dark mode</Label>
        <Switch
          id={themeId}
          checked={isDarkMode}
          onChange={handleThemeChange}
        />
      </div>
    </div>
  );
}
