import clsx from "clsx";
import classes from "./TitleBar.module.css";

interface TitleBarProps {
  center?: React.ReactNode;
  className?: string;
  end?: React.ReactNode;
  start?: React.ReactNode;
}

export const TitleBar = (props: TitleBarProps) => {
  const { start, center, end, className: classNameProp } = props;

  const className = clsx(classes.titleBar, classNameProp);

  return (
    <div className={className}>
      <div className={classes.start}>{start}</div>
      <div className={classes.center}>{center}</div>
      <div className={classes.end}>{end}</div>
    </div>
  );
};
