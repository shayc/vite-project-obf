import classes from "./BoardViewer.module.css";
import { Button } from "./Button/Button";
import { Grid } from "./Grid/Grid";
import { NavBar } from "./NavBar/NavBar";
import { Pictogram } from "./Pictogram/Pictogram";
import type { Board, BoardButton } from "./types";

export interface BoardViewerProps {
  board: Board | null;
  onButtonClick?: (button: BoardButton) => void;
  className?: string;
}

export const BoardViewer = (props: BoardViewerProps) => {
  const { board, onButtonClick, className: classNameProp } = props;

  const className = `${classes.board} ${classNameProp}`;

  function renderButton(button: BoardButton) {
    const { backgroundColor, borderColor, label, imageSrc } = button;

    return (
      <Button
        className={classes.button}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        onClick={() => onButtonClick?.(button)}
      >
        <Pictogram className={classes.pictogram} label={label} src={imageSrc} />
      </Button>
    );
  }

  return (
    <div className={className}>
      <NavBar />

      <Grid
        className={classes.grid}
        rows={board?.grid?.rows}
        columns={board?.grid?.columns}
        items={board?.buttons}
        renderItem={renderButton}
      />
    </div>
  );
};
