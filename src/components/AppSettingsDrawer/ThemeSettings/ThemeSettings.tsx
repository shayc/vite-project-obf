import { Subtitle2 } from "@fluentui/react-components";
import { DarkModeSwitch } from "./DarkModeSwitch";

export function ThemeSettings() {
  return (
    <div>
      <Subtitle2>Appearance</Subtitle2>

      <DarkModeSwitch />
    </div>
  );
}
