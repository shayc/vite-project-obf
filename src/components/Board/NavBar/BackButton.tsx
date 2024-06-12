import { Button } from "@fluentui/react-components";
import { ArrowLeftFilled } from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";

export interface BackButtonProps {
  className?: string;
  disabled?: boolean;
}

export const BackButton = (props: BackButtonProps) => {
  const { disabled } = props;

  const { t } = useTranslation();

  return (
    <Button
      title={t("board.goBack")}
      aria-label={t("board.goBack")}
      size="large"
      appearance="subtle"
      disabled={disabled}
      icon={<ArrowLeftFilled />}
    />
  );
};