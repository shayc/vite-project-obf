import classes from "./BoardViewer.module.css";
import { Button } from "./Button/Button";
import { Grid } from "./Grid/Grid";
import { Pictogram } from "./Pictogram/Pictogram";
import type { Board, BoardButton } from "./types";
import { useBoard } from "./useBoard";

const initialBoard: Board = {
  id: "",
  buttons: [],
  grid: {
    rows: 3,
    columns: 3,
  },
};

export interface BoardProps {
  board: Board;
  className?: string;
}

export const BoardViewer = ({
  board = initialBoard,
  className: classNameProp,
}: BoardProps) => {
  const { buttons, grid = { rows: 3, columns: 3 } } = board;

  const className = `${classes.board} ${classNameProp}`;
  const { onButtonClick } = useBoard();

  function renderButton(button: BoardButton) {
    const { backgroundColor, borderColor, label, imageSrc } = button;

    return (
      <Button
        className={classes.button}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        onClick={() => onButtonClick(button)}
      >
        <Pictogram className={classes.pictogram} label={label} src={imageSrc} />
      </Button>
    );
  }

  return (
    <div className={className}>
      <Grid
        className={classes.grid}
        rows={grid.rows}
        columns={grid.columns}
        items={buttons}
        renderItem={renderButton}
      />
    </div>
  );
};
