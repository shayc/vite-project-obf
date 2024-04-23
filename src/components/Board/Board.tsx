import * as OBF from "../../open-board-format/obf";
import classes from "./Board.module.css";
import { Button } from "./Button/Button";
import { Grid } from "./Grid/Grid";
import { Pictogram } from "./Pictogram/Pictogram";
import { useBoard } from "./useBoard";

export interface BoardProps {
  buttons?: OBF.Button[];
  grid?: OBF.Grid;
  images?: OBF.Image[];
  sounds?: OBF.Sound[];
  className?: string;
}

export const Board = (props: BoardProps) => {
  const {
    buttons,
    images,
    grid = { rows: 3, columns: 3 },
    className: classNameProp,
  } = props;

  const { onButtonClick } = useBoard();

  const className = `${classes.board} ${classNameProp}`;

  function renderButton(button: OBF.Button) {
    const {
      background_color: backgroundColor,
      border_color: borderColor,
      image_id: imageId,
      label,
    } = button;

    const image = images?.find((image) => image.id === imageId);
    const imageSrc = image?.data ?? image?.url;

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
