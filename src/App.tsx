import { Button, makeStyles } from "@fluentui/react-components";
import { SettingsFilled } from "@fluentui/react-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppBar } from "./components/AppBar/AppBar";
import { AppSettingsDrawer } from "./components/AppSettingsDrawer/AppSettingsDrawer.tsx";
import { Board } from "./components/Board/Board.tsx";
import { useBoardsDB } from "./db/use-boards-db.tsx";

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
  const { t } = useTranslation();
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
      <AppBar title={t("app_title")} actions={appActions} />

      <AppSettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      <Board className={classes.board} board={board} />
    </div>
  );
}

export default App;
