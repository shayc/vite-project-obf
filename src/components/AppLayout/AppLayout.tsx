import { Button, makeStyles } from "@fluentui/react-components";
import { SettingsFilled } from "@fluentui/react-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppBar } from "../AppBar/AppBar";
import { AppSettingsDrawer } from "../AppSettingsDrawer/AppSettingsDrawer";
import { FileUploadButton } from "../FileUploadButton/FileUploadButton";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    overflowY: "auto",
  },
});

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsOpen = () => setIsSettingsOpen(true);
  const handleSettingsClose = () => setIsSettingsOpen(false);

  const appActions = (
    <>
      <FileUploadButton />

      <Button
        title={t("settings.settings")}
        aria-label={t("settings.settings")}
        appearance="subtle"
        icon={<SettingsFilled />}
        onClick={handleSettingsOpen}
      />
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar title={t("title")} actions={appActions} />

      <AppSettingsDrawer
        isOpen={isSettingsOpen}
        onClose={handleSettingsClose}
      />

      <main className={classes.main}>{children}</main>
    </div>
  );
}
