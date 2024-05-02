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
  const { state, dispatch } = useTheme();

  const isDarkTheme = state.theme === "dark";

  function handleThemeChange(
    _ev: React.ChangeEvent<HTMLInputElement>,
    data: SwitchOnChangeData,
  ) {
    dispatch({ type: "changeTheme", theme: data.checked ? "dark" : "light" });
  }

  return (
    <div>
      <Subtitle2>Appearance</Subtitle2>

      <div className={classes.setting}>
        <Label htmlFor={themeId}>Dark theme</Label>
        <Switch
          id={themeId}
          checked={isDarkTheme}
          onChange={handleThemeChange}
        />
      </div>
    </div>
  );
}
