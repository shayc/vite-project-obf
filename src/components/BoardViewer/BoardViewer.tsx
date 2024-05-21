import { makeStyles } from "@fluentui/react-components";
import clsx from "clsx";
import { Button } from "./Button/Button";
import { Grid } from "./Grid/Grid";
import { NavBar } from "./NavBar/NavBar";
import { Pictogram } from "./Pictogram/Pictogram";
import { SentenceBox } from "./SentenceBox/SentenceBox";
import type { Board, BoardButton } from "./types";

const useStyles = makeStyles({
  boardViewer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  button: {
    width: "100%",
    height: "100%",
  },
  pictogram: {
    height: "100%",
  },
});

export interface BoardViewerProps {
  board: Board | null;
  onButtonClick?: (button: BoardButton) => void;
  className?: string;
}

export const BoardViewer = (props: BoardViewerProps) => {
  const { board, onButtonClick, className: classNameProp } = props;

  const classes = useStyles();
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

      <NavBar title={board?.name} />

      <Grid
        rows={board?.grid?.rows}
        columns={board?.grid?.columns}
        items={board?.buttons}
        renderItem={renderButton}
      />
    </div>
  );
};
