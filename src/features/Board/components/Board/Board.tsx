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
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

export interface BoardProps {
  board: BoardTypes.Board | null;
  className?: string;
  onButtonClick?: (button: BoardTypes.BoardButton) => void;
}

export function Board({
  board,
  onButtonClick,
  className: classNameProp,
}: BoardProps) {
  const classes = useStyles();
  const className = clsx(classes.board, classNameProp);

  function renderBoardButton(button: BoardTypes.BoardButton) {
    const { backgroundColor, borderColor, label, imageSrc } = button;

    return (
      <BoardButton
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        onClick={() => onButtonClick?.(button)}
      >
        <Pictogram label={label} src={imageSrc} />
      </BoardButton>
    );
  }

  return (
    <div className={className}>
      <SentenceBox
        value={[]}
        onBackspaceClick={() => null}
        onClearClick={() => null}
      />

      <NavBar title={board?.name} />

      <Grid
        rows={board?.grid?.rows}
        columns={board?.grid?.columns}
        items={board?.buttons}
        renderItem={renderBoardButton}
      />
    </div>
  );
}
