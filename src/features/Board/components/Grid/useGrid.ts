export interface GridItem {
  id: string;
}

export type Grid<T> = T[][];

export type GridOrder = (string | null)[][];

export interface GridOptions {
  columns?: number;
  rows?: number;
  order?: GridOrder;
}

export function useGrid<T extends GridItem>(
  items: T[],
  { columns = 0, rows = 0 }: GridOptions,
) {
  const grid: Grid<T> = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row: T[] = [];

    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      const itemIndex = rowIndex * columns + columnIndex;
      const item = items[itemIndex];

      row.push(item || null);
    }

    grid.push(row);
  }

  return grid;
}
