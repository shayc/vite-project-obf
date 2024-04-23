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
}

export const Pictogram = (props: PictogramProps) => {
  const { src, label, className: classNameProp } = props;

  const className = [classes.pictogram, classNameProp]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className={classes.imgContainer}>
        {src && <img className={classes.img} src={src} alt="" />}
      </div>

      {label && <div className={classes.label}>{label}</div>}
    </div>
  );
};
