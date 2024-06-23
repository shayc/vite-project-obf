import { Title3, makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    height: "48px",
    paddingInline: tokens.spacingHorizontalL,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: tokens.spacingHorizontalL,
    backgroundColor: tokens.colorNeutralBackground3,
  },
});

interface AppBarProps {
  /**
   * The actions to be displayed in the AppBar.
   */
  actions?: React.ReactNode;

  /**
   * The title of the AppBar.
   */
  title?: string;
}

export function AppBar({ title, actions }: AppBarProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>{title && <Title3 as="h2">{title}</Title3>}</div>
      <div>{actions}</div>
    </div>
  );
}
