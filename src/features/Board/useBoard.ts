import * as OBF from "../../open-board-format/obf";

export function useBoard() {
  function onButtonClick(button: OBF.Button) {
    console.log("Button clicked", button);
  }

  return {
    onButtonClick,
  };
}
