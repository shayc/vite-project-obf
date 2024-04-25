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
      <Button appearance="transparent" size="large" icon={<ArrowLeftFilled />} title="Back" />
      <Button appearance="transparent" size="large" icon={<ArrowRightFilled />} title="Forward" />
      <Button appearance="transparent" size="large" icon={<HomeFilled />} title="Home" />
    </div>
  );
};
