import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { SpeechSettings } from "./SpeechSettings/SpeechSettings";
import { ThemeSettings } from "./ThemeSettings/ThemeSettings";

interface AppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppDrawer(props: AppDrawerProps) {
  const { isOpen, onClose } = props;

  return (
    <Drawer
      separator
      type="overlay"
      open={isOpen}
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
              icon={<Dismiss24Regular />}
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
