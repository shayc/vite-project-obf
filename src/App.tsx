import { useEffect, useState } from "react";
import classes from "./App.module.css";
import { AppBar } from "./components/AppBar/AppBar";
import { AppDrawer } from "./components/AppDrawer/AppDrawer";
import { BoardViewer } from "./components/BoardViewer/BoardViewer";
import type { Board } from "./components/BoardViewer/types";
import { getRootBoard } from "./db/boards-db";
import type * as OBF from "./open-board-format/obf.d.ts";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    void getRootBoard().then((obf) => {
      function mapOBFToBoard(obf: OBF.Board): Board {
        return {
          id: obf.id,
          name: obf.name,
          buttons: obf.buttons?.map((button) => ({
            id: button.id,
            label: button.label,
            imageSrc: obf.images?.[button.image_id],
            soundSrc: obf.sounds?.[button.sound_id],
            loadBoardId: button.load_board?.id,
            backgroundColor: button.background_color,
            borderColor: button.border_color,
          })),
          grid: {
            rows: obf.grid?.rows ?? 3,
            columns: obf.grid?.columns ?? 3,
          },
        };
      }

      const board = obf ? mapOBFToBoard(obf) : null;
      setBoard(board);
    });
  }, []);

  return (
    <div className={classes.app}>
      <AppBar
        title={board?.name}
        onSettingsClick={() => setIsDrawerOpen(true)}
      />

      <AppDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <BoardViewer className={classes.board} board={board} />
    </div>
  );
}

export default App;
