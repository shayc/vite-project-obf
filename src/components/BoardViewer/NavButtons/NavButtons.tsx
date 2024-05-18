import { Button } from "@fluentui/react-components";
import {
  ArrowLeftFilled,
  ArrowRightFilled,
  HomeFilled,
} from "@fluentui/react-icons";
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
      <Button
        title="Go Back"
        aria-label="Back"
        size="large"
        appearance="subtle"
        disabled={backDisabled}
        icon={<ArrowLeftFilled />}
      />

      <Button
        title="Go Forward"
        aria-label="Forward"
        size="large"
        appearance="subtle"
        disabled={forwardDisabled}
        icon={<ArrowRightFilled />}
      />

      <Button
        title="Home"
        aria-label="Home"
        size="large"
        appearance="subtle"
        disabled={homeDisabled}
        icon={<HomeFilled />}
      />
    </nav>
  );
};
