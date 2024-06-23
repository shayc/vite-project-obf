import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import { Dismiss24Filled } from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";
import { AppearanceSettings } from "./components/AppearanceSettings";
import { LanguageSettings } from "./components/LanguageSettings";
import { SpeechSettings } from "./components/SpeechSettings";

interface AppSettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppSettingsDrawer({ isOpen, onClose }: AppSettingsDrawerProps) {
  const { t } = useTranslation();

  return (
    <Drawer
      separator
      open={isOpen}
      type="overlay"
      position="end"
      onOpenChange={onClose}
    >
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              title={t("settings.close")}
              aria-label={t("settings.close")}
              appearance="subtle"
              icon={<Dismiss24Filled />}
              onClick={onClose}
            />
          }
        >
          {t("settings.settings")}
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <AppearanceSettings />
        <LanguageSettings />
        <SpeechSettings />
      </DrawerBody>
    </Drawer>
  );
}
