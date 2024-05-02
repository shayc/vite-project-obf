import { useEffect, useState } from "react";
import { Board } from "../../components/BoardViewer/types";
import lotsOfStuffOBF from "../../open-board-format/examples/lots_of_stuff.json";
import * as OBF from "../../open-board-format/obf";
import * as boardsDB from "./boards-db";

export function useBoardsDB() {
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    void boardsDB.getRootBoard().then((obf) => {
      const board = mapOBFToBoard(obf ?? lotsOfStuffOBF);
      setBoard(board);
    });
  }, []);

  return { board };
}

function mapOBFToBoard(obf: OBF.Board): Board {
  return {
    id: obf.id,
    name: obf.name,
    buttons: obf.buttons?.map((button) => ({
      id: button.id,
      label: button.label,
      vocalization: button.vocalization,
      loadBoardId: button.load_board?.id,
      backgroundColor: button.background_color,
      borderColor: button.border_color,
    })),
    grid: {
      rows: obf.grid?.rows ?? 0,
      columns: obf.grid?.columns ?? 0,
      order: obf.grid?.order ?? [],
    },
  };
}
