import { useArrowNavigationGroup } from "@fluentui/react-tabster";
import clsx from "clsx";
import classes from "./Grid.module.css";
import { GridItem, GridOrder, useGrid } from "./useGrid";

/**
 * Props for the Grid component.
 */
interface GridProps<T extends GridItem> {
  /**
   * The class name of the grid.
   */
  className?: string;

  /**
   * The number of columns in the grid.
   */
  columns?: number;

  /**
   * The gap between grid items.
   */
  gap?: number;

  /**
   * An array of grid items.
   */
  items?: T[];

  /**
   * The order of the grid items.
   */
  order?: GridOrder;

  /**
   * A function that renders a grid item.
   */
  renderItem?: (item: T) => JSX.Element;

  /**
   * The number of rows in the grid.
   */
  rows?: number;

  /**
   * The style of the grid.
   */
  style?: React.CSSProperties;
}

export function Grid<T extends GridItem>(props: GridProps<T>) {
  const {
    columns,
    rows,
    order,
    gap = 16,
    items = [],
    renderItem,
    className: classNameProp,
    style: styleProp,
  } = props;

  const attrs = useArrowNavigationGroup({ axis: "grid" });
  const grid = useGrid(items, { columns, rows, order });

  const style = {
    ...styleProp,
    "--gap": `${gap}px`,
  } as React.CSSProperties;

  const className = clsx(classes.grid, classNameProp);

  return (
    <div
      className={className}
      style={style}
      role="grid"
      aria-label="Board grid"
      {...attrs}
    >
      {grid.map((row, rowIndex) => (
        <div className={classes.row} key={rowIndex}>
          {row.map((item, cellIndex) => (
            <div className={classes.cell} key={cellIndex}>
              {item && renderItem?.(item)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
