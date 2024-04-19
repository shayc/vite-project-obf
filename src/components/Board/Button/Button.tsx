import { getAccessibleTextColor } from "../../../utils/color-utils";
import classes from "./Button.module.css";

export interface ButtonProps {
  /**
   * The background color of the button.
   */
  backgroundColor?: string;

  /**
   * The border color of the button.
   */
  borderColor?: string;

  /**
   * The content of the button.
   */
  children?: React.ReactNode;

  /**
   * The class name of the button.
   */
  className?: string;

  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;

  /**
   * The click event handler for the button.
   */
  onClick?: () => void;

  /**
   * The style of the button.
   */
  style?: React.CSSProperties;
}

export const Button = (props: ButtonProps) => {
  const {
    backgroundColor = "#fff",
    borderColor,
    disabled,
    className: classNameProp,
    style: styleProp,
    children,
    onClick,
    ...restProps
  } = props;

  const color = getAccessibleTextColor(backgroundColor);

  const style = {
    ...styleProp,
    ...(color && { "--color": color }),
    ...(backgroundColor && { "--background-color": backgroundColor }),
    ...(borderColor && { "--border-color": borderColor }),
  } as React.CSSProperties;

  const className = `${classes.button} ${classNameProp ?? ""}`;

  return (
    <button
      className={className}
      style={style}
      disabled={disabled}
      onClick={onClick}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};
