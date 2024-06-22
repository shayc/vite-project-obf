import { Button, makeStyles } from "@fluentui/react-components";
import { SettingsFilled } from "@fluentui/react-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppBar } from "../AppBar/AppBar";
import { AppDrawer } from "../AppDrawer/AppDrawer";
import { AppSettings } from "../AppSettings/AppSettings";
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

export function AppLayout(props: AppLayoutProps) {
  const { children } = props;

  const { t } = useTranslation();
  const classes = useStyles();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const appActions = (
    <>
      <FileUploadButton />

      <Button
        title={t("settings.settings")}
        aria-label={t("settings.settings")}
        appearance="subtle"
        icon={<SettingsFilled />}
        onClick={() => setIsSettingsOpen(true)}
      />
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar title={t("title")} actions={appActions} />

      <AppDrawer
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      >
        <AppSettings />
      </AppDrawer>

      <main className={classes.main}>{children}</main>
    </div>
  );
}
