import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import clsx from "clsx";
import { getAccessibleTextColor } from "../../../utils/color-utils";

const useStyles = makeStyles({
  button: {
    "--border-width": tokens.strokeWidthThick,

    position: "relative",
    padding: "0",
    border: "var(--border-width) solid",
    borderRadius: tokens.borderRadiusXLarge,
    color: "var(--color, inherit)",
    backgroundColor: "var(--background-color, transparent)",
    outlineOffset: "var(--border-width)",
    boxShadow: tokens.shadow2,
    overflow: "hidden",
    cursor: "pointer",
    ...shorthands.borderColor("var(--border-color, transparent)"),

    ":disabled": {
      cursor: "default",
    },

    ":not(:disabled):active::after": {
      content: "' '",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  },
});

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

  const classes = useStyles();
  const color = getAccessibleTextColor(backgroundColor);

  const style = {
    ...styleProp,
    ...(color && { "--color": color }),
    ...(backgroundColor && { "--background-color": backgroundColor }),
    ...(borderColor && { "--border-color": borderColor }),
  } as React.CSSProperties;

  const className = clsx(classes.button, classNameProp);

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
