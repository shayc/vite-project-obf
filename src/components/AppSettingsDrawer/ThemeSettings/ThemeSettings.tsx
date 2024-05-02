import {
  Label,
  Subtitle2,
  Switch,
  SwitchOnChangeData,
  useId,
} from "@fluentui/react-components";
import { useTheme } from "../../../hooks/theme/theme-context";
import classes from "./ThemeSettings.module.css";

export function ThemeSettings() {
  const themeId = useId();
  const { isDarkMode, setIsDarkMode } = useTheme();

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
