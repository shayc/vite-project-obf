import { makeStyles, tokens } from "@fluentui/react-components";
import clsx from "clsx";

const useStyles = makeStyles({
  pictogram: {
    display: "flex",
    flexDirection: "var(--flex-direction)" as "column" | "column-reverse",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingHorizontalS,
    boxSizing: "border-box",
  },
  imgContainer: {
    flex: "1",
    position: "relative",
  },
  img: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  label: {
    fontSize: tokens.fontSizeBase300,
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

/**
 * Props for the Pictogram component.
 */
interface PictogramProps {
  /**
   * The class name of the pictogram.
   */
  className?: string;

  /**
   * The label text for the pictogram.
   */
  label?: string;

  /**
   * The position of the label relative to the pictogram.
   */
  labelPosition?: "top" | "bottom";

  /**
   * The source URL of the pictogram image.
   */
  src?: string;

  /**
   * The style of the button.
   */
  style?: React.CSSProperties;
}

export const Pictogram = (props: PictogramProps) => {
  const {
    src,
    label,
    labelPosition = "bottom",
    className: classNameProp,
    style: styleProp,
  } = props;

  const classes = useStyles();
  const className = clsx(classes.pictogram, classNameProp);

  const style = {
    ...styleProp,
    "--flex-direction":
      labelPosition === "bottom" ? "column" : "column-reverse",
  } as React.CSSProperties;

  return (
    <div className={className} style={style}>
      <div className={classes.imgContainer}>
        {src && <img className={classes.img} src={src} alt="" />}
      </div>

      {label && <div className={classes.label}>{label}</div>}
    </div>
  );
};