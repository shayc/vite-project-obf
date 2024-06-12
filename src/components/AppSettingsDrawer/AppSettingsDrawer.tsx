import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import { Dismiss24Filled } from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";
import { LanguageSettings } from "./LanguageSettings/LanguageSettings";
import { SpeechSettings } from "./SpeechSettings/SpeechSettings";
import { ThemeSettings } from "./ThemeSettings/ThemeSettings";

interface AppSettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppSettingsDrawer(props: AppSettingsDrawerProps) {
  const { isOpen, onClose } = props;

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
              title={t("settings.closeSettings")}
              aria-label={t("settings.closeSettings")}
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
        <ThemeSettings />
        <LanguageSettings />
        <SpeechSettings />
      </DrawerBody>
    </Drawer>
  );
}
