import { Button, Title3 } from "@fluentui/react-components";
import { SettingsRegular } from "@fluentui/react-icons";
import classes from "./AppBar.module.css";

interface AppBarProps {
  title?: string;
  onSettingsClick: () => void;
}

export function AppBar({ onSettingsClick, title }: AppBarProps) {
  return (
    <div className={classes.appBar}>
      <Title3 as="h2">{title}</Title3>

      <div>
        <Button
          appearance="subtle"
          aria-label="Settings"
          icon={<SettingsRegular />}
          onClick={onSettingsClick}
        />
      </div>
    </div>
  );
}
