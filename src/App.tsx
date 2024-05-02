import { Button } from "@fluentui/react-components";
import { SettingsRegular } from "@fluentui/react-icons";
import { useState } from "react";
import classes from "./App.module.css";
import { AppBar } from "./components/AppBar/AppBar";
import { AppSettingsDrawer } from "./components/AppSettingsDrawer/AppSettingsDrawer.tsx";
import { BoardViewer } from "./components/BoardViewer/BoardViewer";
import { useBoardsDB } from "./hooks/boards-db/use-boards-db.tsx";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { board } = useBoardsDB();

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
