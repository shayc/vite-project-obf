import { Label, Subtitle2, Switch, useId } from "@fluentui/react-components";
import classes from "./ThemeSettings.module.css";

export function ThemeSettings() {
  const themeId = useId();

  return (
    <div>
      <Subtitle2>Appearance</Subtitle2>

      <div className={classes.setting}>
        <Label htmlFor={themeId}>Dark theme</Label>
        <Switch id={themeId} />
      </div>
    </div>
  );
}
