import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { SpeechSettings } from "./SpeechSettings/SpeechSettings";

interface AppSettingsDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function AppSettingsDrawer(props: AppSettingsDrawerProps) {
  const { isOpen, setIsOpen } = props;

  return (
    <Drawer
      separator
      type="overlay"
      open={isOpen}
      onOpenChange={(_, { open }) => setIsOpen(open)}
    >
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              aria-label="Close"
              icon={<Dismiss24Regular />}
              onClick={() => setIsOpen(false)}
            />
          }
        >
          Settings
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <SpeechSettings />
      </DrawerBody>
    </Drawer>
  );
}
