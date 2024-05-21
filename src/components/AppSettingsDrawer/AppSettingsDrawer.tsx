import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import { Dismiss24Filled } from "@fluentui/react-icons";
import { SpeechSettings } from "./SpeechSettings/SpeechSettings";
import { ThemeSettings } from "./ThemeSettings/ThemeSettings";

interface AppSettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppSettingsDrawer(props: AppSettingsDrawerProps) {
  const { isOpen, onClose } = props;

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
              title="Close"
              aria-label="Close"
              appearance="subtle"
              icon={<Dismiss24Filled />}
              onClick={onClose}
            />
          }
        >
          Settings
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <ThemeSettings />
        <SpeechSettings />
      </DrawerBody>
    </Drawer>
  );
}
