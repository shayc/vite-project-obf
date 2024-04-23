import { useSpeech } from "../../hooks/speech/use-speech";
import * as OBF from "../../open-board-format/obf";
import classes from "./Board.module.css";
import { Button } from "./Button/Button";
import { Grid } from "./Grid/Grid";
import { Output } from "./Output/Output";
import { Pictogram } from "./Pictogram/Pictogram";

export interface BoardProps {
  name?: string;
  buttons?: OBF.Button[];
  grid?: OBF.Grid;
  images?: OBF.Image[];
  sounds?: OBF.Sound[];
}

export const Board = (props: BoardProps) => {
  const { name, buttons, grid = { rows: 3, columns: 3 }, images } = props;

  // const {} = useOutput();
  const { speak } = useSpeech();

  function renderButton(button: OBF.Button) {
    const {
      background_color: backgroundColor,
      border_color: borderColor,
      image_id: imageId,
      label,
    } = button;

    const image = images?.find((image) => image.id === imageId);
    const imageSrc = image?.data ?? image?.url;

    function handleButtonClick() {
      if (button.label) {
        void speak(button.label);
      }
    }

    return (
      <Button
        className={classes.button}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        onClick={handleButtonClick}
      >
        <Pictogram className={classes.pictogram} label={label} src={imageSrc} />
      </Button>
    );
  }

  return (
    <div className={classes.board}>
      <Output value={[]} />

      <div className={classes.bar}>{name}</div>

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
