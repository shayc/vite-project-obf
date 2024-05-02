import { Button } from "@fluentui/react-components";
import { SettingsRegular } from "@fluentui/react-icons";
import { useEffect, useState } from "react";
import classes from "./App.module.css";
import { AppBar } from "./components/AppBar/AppBar";
import { AppSettingsDrawer } from "./components/AppSettingsDrawer/AppSettingsDrawer.tsx";
import { BoardViewer } from "./components/BoardViewer/BoardViewer";
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
      rows: obf.grid?.rows ?? 0,
      columns: obf.grid?.columns ?? 0,
      order: obf.grid?.order ?? [],
    },
  };
}

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    void getRootBoard().then((obf) => {
      const board = obf ? mapOBFToBoard(obf) : null;
      setBoard(board);
    });
  }, []);

  const appActions = (
    <Button
      title="Settings"
      aria-label="Settings"
      appearance="subtle"
      icon={<SettingsRegular />}
      onClick={() => setIsSettingsOpen(true)}
    />
  );

  return (
    <div className={classes.app}>
      <AppBar title={board?.name} actions={appActions} />

      <AppSettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      <BoardViewer className={classes.board} board={board} />
    </div>
  );
}

export default App;
