import { makeStyles, tokens } from "@fluentui/react-components";
import clsx from "clsx";

const useStyles = makeStyles({
  pictogram: {
    boxSizing: "border-box",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "var(--flex-direction)" as "column" | "column-reverse",
    gap: tokens.spacingHorizontalS,
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

export function Pictogram({
  src,
  label,
  labelPosition = "bottom",
  className: classNameProp,
  style: styleProp,
}: PictogramProps) {
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
}
