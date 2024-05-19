import clsx from "clsx";
import { BackButton } from "./BackButton";
import { ForwardButton } from "./ForwardButton";
import { HomeButton } from "./HomeButton";
import classes from "./NavButtons.module.css";

interface NavButtonsProps {
  className?: string;
}

export const NavButtons = (props: NavButtonsProps) => {
  const { className: classNameProp } = props;

  const className = clsx(classes.navButtons, classNameProp);

  return (
    <nav className={className} aria-label="Board navigation">
      <BackButton disabled={true} />
      <ForwardButton disabled={true} />
      <HomeButton disabled={true} />
    </nav>
  );
};
