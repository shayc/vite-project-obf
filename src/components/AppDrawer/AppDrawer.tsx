import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import { Dismiss24Filled } from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";

interface AppDrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function AppDrawer({ children, isOpen, onClose }: AppDrawerProps) {
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

      <DrawerBody>{children}</DrawerBody>
    </Drawer>
  );
}
