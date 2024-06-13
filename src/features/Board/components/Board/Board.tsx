import { makeStyles } from "@fluentui/react-components";
import clsx from "clsx";
import type * as BoardTypes from "../../types";
import { BoardButton } from "../BoardButton/BoardButton";
import { Grid } from "../Grid/Grid";
import { NavBar } from "../NavBar/NavBar";
import { Pictogram } from "../Pictogram/Pictogram";
import { SentenceBox } from "../SentenceBox/SentenceBox";

const useStyles = makeStyles({
  board: {
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

export interface BoardProps {
  board: BoardTypes.Board | null;
  className?: string;
  onButtonClick?: (button: BoardTypes.BoardButton) => void;
}

export const Board = (props: BoardProps) => {
  const { board, onButtonClick, className: classNameProp } = props;

  const classes = useStyles();
  const className = clsx(classes.board, classNameProp);

  function renderBoardButton(button: BoardTypes.BoardButton) {
    const { backgroundColor, borderColor, label, imageSrc } = button;

    return (
      <BoardButton
        className={classes.button}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        onClick={() => onButtonClick?.(button)}
      >
        <Pictogram className={classes.pictogram} label={label} src={imageSrc} />
      </BoardButton>
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
        renderItem={renderBoardButton}
      />
    </div>
  );
};
