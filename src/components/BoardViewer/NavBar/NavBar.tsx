import { Button } from "@fluentui/react-components";
import {
  ArrowLeftFilled,
  ArrowRightFilled,
  HomeFilled,
} from "@fluentui/react-icons";
import classes from "./NavBar.module.css";

export interface NavBarProps {
  className?: string;
}

export const NavBar = (props: NavBarProps) => {
  const { className: classNameProp } = props;

  const className = `${classes.navBar} ${classNameProp ?? ""}`;

  return (
    <div className={className}>
      <Button
        title="Back"
        aria-label="Back"
        size="large"
        appearance="subtle"
        icon={<ArrowLeftFilled />}
      />

      <Button
        title="Forward"
        aria-label="Forward"
        size="large"
        appearance="subtle"
        icon={<ArrowRightFilled />}
      />

      <Button
        title="Home"
        aria-label="Home"
        size="large"
        appearance="subtle"
        icon={<HomeFilled />}
      />
    </div>
  );
};
