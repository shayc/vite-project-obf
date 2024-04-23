import { Button } from "@fluentui/react-components";
import { SettingsRegular } from "@fluentui/react-icons";
import classes from "./AppBar.module.css";

interface AppBarProps {
  onSettingsClick: () => void;
}

export function AppBar({ onSettingsClick }: AppBarProps) {
  return (
    <div className={classes.appBar}>
      <Button
        appearance="subtle"
        aria-label="Settings"
        icon={<SettingsRegular />}
        onClick={onSettingsClick}
      />
    </div>
  );
}
