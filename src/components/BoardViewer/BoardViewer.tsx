import clsx from "clsx";
import classes from "./BoardViewer.module.css";
import { Button } from "./Button/Button";
import { Grid } from "./Grid/Grid";
import { Pictogram } from "./Pictogram/Pictogram";
import { SentenceBox } from "./SentenceBox/SentenceBox";
import { TitleBar } from "./TitleBar/TitleBar";
import type { Board, BoardButton } from "./types";

export interface BoardViewerProps {
  board: Board | null;
  onButtonClick?: (button: BoardButton) => void;
  className?: string;
}

export const BoardViewer = (props: BoardViewerProps) => {
  const { board, onButtonClick, className: classNameProp } = props;

  const className = clsx(classes.boardViewer, classNameProp);

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
      <SentenceBox value={[]} />

      <TitleBar />

      <Grid
        rows={board?.grid?.rows}
        columns={board?.grid?.columns}
        items={board?.buttons}
        renderItem={renderButton}
      />
    </div>
  );
};
