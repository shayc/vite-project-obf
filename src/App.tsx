import { Button, makeStyles } from "@fluentui/react-components";
import { SettingsFilled } from "@fluentui/react-icons";
import { useState } from "react";
import { AppBar } from "./components/AppBar/AppBar";
import { AppSettingsDrawer } from "./components/AppSettingsDrawer/AppSettingsDrawer.tsx";
import { BoardViewer } from "./components/BoardViewer/BoardViewer";
import { useBoardsDB } from "./hooks/boards-db/use-boards-db.tsx";

const useStyles = makeStyles({
  app: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  board: {
    flex: "1",
  },
});

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { board } = useBoardsDB();
  const classes = useStyles();

  const appActions = (
    <Button
      title="Settings"
      aria-label="Settings"
      appearance="subtle"
      icon={<SettingsFilled />}
      onClick={() => setIsSettingsOpen(true)}
    />
  );

  return (
    <div className={classes.app}>
      <AppBar actions={appActions} />

      <AppSettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      <BoardViewer className={classes.board} board={board} />
    </div>
  );
}

export default App;
