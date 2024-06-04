import { Button } from "@fluentui/react-components";
import { ArrowLeftFilled } from "@fluentui/react-icons";

export interface BackButtonProps {
  className?: string;
  disabled?: boolean;
}

export const BackButton = (props: BackButtonProps) => {
  const { disabled } = props;

  return (
    <Button
      title="Go Back"
      aria-label="Back"
      size="large"
      appearance="subtle"
      disabled={disabled}
      icon={<ArrowLeftFilled />}
    />
  );
};
