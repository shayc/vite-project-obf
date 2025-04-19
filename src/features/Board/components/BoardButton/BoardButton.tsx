import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import clsx from "clsx";
import { getAccessibleTextColor } from "../../../../utils/color-utils";

const useStyles = makeStyles({
  button: {
    "--border-width": tokens.strokeWidthThicker,

    position: "relative",
    boxSizing: "border-box",
    height: "100%",
    width: "100%",
    padding: tokens.spacingHorizontalS,
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

    ":active": {
      filter: "brightness(0.8)",
    },
  },
});

export interface BoardButtonProps {
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

export function BoardButton({
  backgroundColor = "#fff",
  borderColor,
  disabled,
  className: classNameProp,
  style: styleProp,
  children,
  onClick,
  ...restProps
}: BoardButtonProps) {
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
}
