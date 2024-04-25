import { Title3 } from "@fluentui/react-components";
import classes from "./AppBar.module.css";

interface AppBarProps {
  title?: string;
  actions?: React.ReactNode;
}

export function AppBar({ title, actions }: AppBarProps) {
  return (
    <div className={classes.appBar}>
      <Title3 as="h2">{title}</Title3>

      <div>{actions}</div>
    </div>
  );
}
