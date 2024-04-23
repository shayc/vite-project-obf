import { Label, Subtitle2, Switch, useId } from "@fluentui/react-components";

export function ThemeSettings() {
  const themeId = useId();

  return (
    <div>
      <Subtitle2>Appearance</Subtitle2>

      <div>
        <Label htmlFor={themeId}>Dark theme</Label>
        <Switch id={themeId} />
      </div>
    </div>
  );
}
