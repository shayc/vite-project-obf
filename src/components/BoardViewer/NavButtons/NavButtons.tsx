import { BackButton } from "./BackButton";
import { ForwardButton } from "./ForwardButton";
import { HomeButton } from "./HomeButton";
import classes from "./NavButtons.module.css";

export interface NavButtonsProps {
  backDisabled?: boolean;
  className?: string;
  forwardDisabled?: boolean;
  homeDisabled?: boolean;
}

export const NavButtons = (props: NavButtonsProps) => {
  const {
    backDisabled,
    forwardDisabled,
    homeDisabled,
    className: classNameProp,
  } = props;

  const className = `${classes.navButtons} ${classNameProp ?? ""}`;

  return (
    <nav className={className} aria-label="Board navigation">
      <BackButton disabled={backDisabled} />
      <ForwardButton disabled={forwardDisabled} />
      <HomeButton disabled={homeDisabled} />
    </nav>
  );
};
