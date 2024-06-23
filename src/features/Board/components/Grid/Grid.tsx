import { makeStyles } from "@fluentui/react-components";
import { useArrowNavigationGroup } from "@fluentui/react-tabster";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Cell } from "./Cell/Cell";
import { Row } from "./Row/Row";
import { GridItem, GridOrder, useGrid } from "./useGrid";

const useStyles = makeStyles({
  grid: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    padding: "var(--gap)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--gap)",
  },
});

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

export function Grid<T extends GridItem>({
  columns,
  rows,
  order,
  gap = 16,
  items = [],
  renderItem,
  className: classNameProp,
  style: styleProp,
}: GridProps<T>) {
  const { t } = useTranslation();
  const classes = useStyles();
  const className = clsx(classes.grid, classNameProp);
  const attrs = useArrowNavigationGroup({ axis: "grid" });
  const grid = useGrid(items, { columns, rows, order });

  const style = {
    ...styleProp,
    "--gap": `${gap}px`,
  } as React.CSSProperties;

  return (
    <div
      className={className}
      style={style}
      role="grid"
      aria-label={t("board.boardGrid")}
      {...attrs}
    >
      {grid.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((item, cellIndex) => (
            <Cell key={cellIndex}>{item && renderItem?.(item)}</Cell>
          ))}
        </Row>
      ))}
    </div>
  );
}
