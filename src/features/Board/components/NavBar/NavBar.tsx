import { makeStyles, tokens } from "@fluentui/react-components";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { BackButton } from "./BackButton";
import { ForwardButton } from "./ForwardButton";
import { HistoryMenuButton } from "./HistoryMenuButton";

const useStyles = makeStyles({
  navBar: {
    flexShrink: "0",
    height: "48px",
    paddingInline: tokens.spacingHorizontalL,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  start: {
    display: "flex",
  },
  end: {
    display: "flex",
  },
});

interface NavBarProps {
  actions?: React.ReactNode;
  className?: string;
  title?: string;
}

export function NavBar({
  className: classNameProp,
  title,
  actions,
}: NavBarProps) {
  const { t } = useTranslation();
  const classes = useStyles();
  const className = clsx(classes.navBar, classNameProp);

  return (
    <nav className={className} aria-label={t("board.boardNavigation")}>
      <div className={classes.start}>
        <BackButton disabled={true} />
        <ForwardButton disabled={true} />
        <HistoryMenuButton>{title}</HistoryMenuButton>
      </div>

      <div className={classes.end}>{actions}</div>
    </nav>
  );
}
