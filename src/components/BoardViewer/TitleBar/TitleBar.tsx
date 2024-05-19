import clsx from "clsx";
import { BackButton } from "./BackButton";
import { ForwardButton } from "./ForwardButton";
import { HomeButton } from "./HomeButton";
import classes from "./TitleBar.module.css";

interface TitleBarProps {
  className?: string;
}

export const TitleBar = (props: TitleBarProps) => {
  const { className: classNameProp } = props;

  const className = clsx(classes.titleBar, classNameProp);

  return (
    <div className={className}>
      <div className={classes.start}>
        <nav aria-label="Board navigation">
          <BackButton disabled={true} />
          <ForwardButton disabled={true} />
          <HomeButton disabled={true} />
        </nav>
      </div>
      <div className={classes.center}></div>
      <div className={classes.end}></div>
    </div>
  );
};
