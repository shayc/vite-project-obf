import { Button } from "@fluentui/react-components";
import { ArrowRightFilled } from "@fluentui/react-icons";

export interface ForwardButtonProps {
  className?: string;
  disabled?: boolean;
}

export const ForwardButton = (props: ForwardButtonProps) => {
  const { disabled } = props;

  return (
    <Button
      title="Go Forward"
      aria-label="Forward"
      size="large"
      appearance="subtle"
      disabled={disabled}
      icon={<ArrowRightFilled />}
    />
  );
};
