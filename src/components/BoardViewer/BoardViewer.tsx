import classes from "./BoardViewer.module.css";
import { Button } from "./Button/Button";
import { Grid } from "./Grid/Grid";
import { Pictogram } from "./Pictogram/Pictogram";
import type { BoardButton, BoardGrid } from "./types";

export interface BoardViewerProps {
  buttons?: BoardButton[];
  grid?: BoardGrid;
  className?: string;
}

export const BoardViewer = (props: BoardViewerProps) => {
  const {
    buttons,
    grid = { rows: 3, columns: 3 },
    className: classNameProp,
  } = props;

  const className = `${classes.board} ${classNameProp}`;

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
