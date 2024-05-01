import { Button } from "@fluentui/react-components";
import {
  ArrowLeftFilled,
  ArrowRightFilled,
  HomeFilled,
} from "@fluentui/react-icons";
import classes from "./NavBar.module.css";

export interface NavBarProps {
  backDisabled?: boolean;
  className?: string;
  forwardDisabled?: boolean;
  homeDisabled?: boolean;
}

export const NavBar = (props: NavBarProps) => {
  const {
    backDisabled,
    forwardDisabled,
    homeDisabled,
    className: classNameProp,
  } = props;

  const className = `${classes.navBar} ${classNameProp ?? ""}`;

  return (
    <div className={className}>
      <Button
        title="Back"
        aria-label="Back"
        size="large"
        appearance="subtle"
        disabled={backDisabled}
        icon={<ArrowLeftFilled />}
      />

      <Button
        title="Forward"
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
    </div>
  );
};
