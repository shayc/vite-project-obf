import { Button } from "@fluentui/react-components";
import { HomeRegular } from "@fluentui/react-icons";

export interface HomeButtonProps {
  className?: string;
  disabled?: boolean;
}

export const HomeButton = (props: HomeButtonProps) => {
  const { disabled } = props;

  return (
    <Button
      title="Home"
      aria-label="Home"
      size="large"
      appearance="subtle"
      disabled={disabled}
      icon={<HomeRegular />}
    />
  );
};
