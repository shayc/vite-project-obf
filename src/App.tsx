import { useEffect, useState } from "react";
import classes from "./App.module.css";
import { AppBar } from "./components/AppBar/AppBar";
import { AppDrawer } from "./components/AppDrawer/AppDrawer";
import { BoardViewer } from "./components/BoardViewer/BoardViewer";
import { NavBar } from "./components/BoardViewer/NavBar/NavBar.tsx";
import type { Board } from "./components/BoardViewer/types";
import { getRootBoard } from "./db/boards-db";
import type * as OBF from "./open-board-format/obf.d.ts";

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
      rows: obf.grid?.rows ?? 3,
      columns: obf.grid?.columns ?? 3,
      order: obf.grid?.order ?? [],
    },
  };
}

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    void getRootBoard().then((obf) => {
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

      <NavBar />
      <BoardViewer
        className={classes.board}
        buttons={board?.buttons}
        grid={board?.grid}
      />
    </div>
  );
}

export default App;
