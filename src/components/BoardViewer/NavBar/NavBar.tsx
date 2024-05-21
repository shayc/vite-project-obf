import clsx from "clsx";
import { BackButton } from "./BackButton";
import { BoardMenu } from "./BoardMenu";
import { ForwardButton } from "./ForwardButton";
import classes from "./NavBar.module.css";

interface NavBarProps {
  actions?: React.ReactNode;
  className?: string;
  title?: string;
}

export const NavBar = (props: NavBarProps) => {
  const { className: classNameProp, title, actions } = props;

  const className = clsx(classes.navBar, classNameProp);

  return (
    <nav className={className} aria-label="Board navigation">
      <div className={classes.start}>
        <BackButton disabled={true} />
        <ForwardButton disabled={true} />
        <BoardMenu title={title} />
      </div>

      <div className={classes.end}>{actions}</div>
    </nav>
  );
};
