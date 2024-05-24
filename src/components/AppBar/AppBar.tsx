import { Title3, makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    height: "48px",
    paddingInline: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: tokens.colorNeutralBackground3,
  },
});

interface AppBarProps {
  title?: string;
  actions?: React.ReactNode;
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
