interface BoardButton {
  id: string;
  backgroundColor?: string;
  borderColor?: string;
  imageSrc?: string;
  soundSrc?: string;
  loadBoardId?: string;
  label?: string;
  vocalization?: string;
}

interface BoardGrid {
  rows: number;
  columns: number;
  order?: (string | null)[][];
}

interface Board {
  id: string;
  name?: string;
  buttons?: BoardButton[];
  grid?: BoardGrid;
}

export type { Board, BoardButton, BoardGrid };
