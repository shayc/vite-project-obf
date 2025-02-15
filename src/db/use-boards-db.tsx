import { useEffect, useState } from "react";
import type * as BoardType from "../features/board/types";
import lotsOfStuffOBF from "../open-board-format/examples/lots_of_stuff.json";
import * as OBF from "../open-board-format/obf";
import * as boardsDB from "./boards-db";

export function useBoardsDB() {
  const [board, setBoard] = useState<BoardType.Board | null>(null);

  useEffect(() => {
    void boardsDB.getRootBoard().then((obf) => {
      const board = mapOBFToBoard(obf ?? (lotsOfStuffOBF as OBF.Board));
      setBoard(board);
    });
  }, []);

  return { board };
}

export function mapOBFToBoard(obf: OBF.Board): BoardType.Board {
  return {
    id: obf.id,
    name: obf.name,
    buttons: obf.buttons?.map(
      ({
        id,
        label,
        vocalization,
        load_board,
        background_color,
        border_color,
        image_id,
        sound_id,
      }) => {
        const image = obf.images?.find(({ id }) => id === image_id);
        const sound = obf.sounds?.find(({ id }) => id === sound_id);

        const button: BoardType.BoardButton = {
          id: id,
          label: label,
          vocalization: vocalization,
          loadBoardId: load_board?.id,
          backgroundColor: background_color,
          borderColor: border_color,
          imageSrc: image?.data ?? image?.url,
          soundSrc: sound?.data ?? sound?.url,
        };

        return button;
      },
    ),
    grid: {
      rows: obf.grid?.rows ?? 0,
      columns: obf.grid?.columns ?? 0,
      order: obf.grid?.order ?? [],
    },
  };
}
