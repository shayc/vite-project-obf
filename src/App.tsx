import { useEffect, useState } from "react";
import classes from "./App.module.css";
import { AppBar } from "./components/AppBar/AppBar";
import { AppDrawer } from "./components/AppDrawer/AppDrawer";
import { Board } from "./components/Board";
import { getRootBoard } from "./db/boards-db";
import * as OBF from "./open-board-format/obf";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [board, setBoard] = useState<OBF.Board | null>(null);

  useEffect(() => {
    void getRootBoard().then((board) => {
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

      <Board
        className={classes.board}
        buttons={board?.buttons}
        grid={board?.grid}
        images={board?.images}
        sounds={board?.sounds}
      />
    </div>
  );
}

export default App;
