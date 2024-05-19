import clsx from "clsx";
import classes from "./Pictogram.module.css";

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

  const style = {
    ...styleProp,
    "--flex-direction":
      labelPosition === "bottom" ? "column" : "column-reverse",
  } as React.CSSProperties;

  const className = clsx(classes.pictogram, classNameProp);

  return (
    <div className={className} style={style}>
      <div className={classes.imgContainer}>
        {src && <img className={classes.img} src={src} alt="" />}
      </div>

      {label && <div className={classes.label}>{label}</div>}
    </div>
  );
};
