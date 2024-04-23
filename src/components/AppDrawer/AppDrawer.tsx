import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { SpeechSettings } from "./SpeechSettings/SpeechSettings";

interface AppDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function AppDrawer(props: AppDrawerProps) {
  const { isOpen, setIsOpen } = props;

  return (
    <Drawer
      separator
      type="overlay"
      open={isOpen}
      position="end"
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
