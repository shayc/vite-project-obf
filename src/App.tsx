import { useEffect, useState } from "react";
import classes from "./App.module.css";
import { AppBar } from "./components/AppBar/AppBar";
import { AppSettingsDrawer } from "./components/AppSettingsDrawer/AppSettingsDrawer";
import { Board } from "./components/Board";
import { getRootBoard } from "./db/boards-db";
import * as OBF from "./open-board-format/obf";

function App() {
  const [board, setBoard] = useState<OBF.Board | null>(null);

  useEffect(() => {
    void getRootBoard().then((board) => {
      setBoard(board);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function handleSettingsClick() {
    setIsOpen(true);
  }

  return (
    <div className={classes.app}>
      <AppBar title={board?.name ?? ""} onSettingsClick={handleSettingsClick} />
      <AppSettingsDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Board {...board} />
    </div>
  );
}

export default App;
