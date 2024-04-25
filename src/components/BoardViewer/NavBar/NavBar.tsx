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
      <Button icon={<ArrowLeftFilled />}></Button>
      <Button icon={<ArrowRightFilled />}></Button>
      <Button icon={<HomeFilled />}></Button>
    </div>
  );
};
