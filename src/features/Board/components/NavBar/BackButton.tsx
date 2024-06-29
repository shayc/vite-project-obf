import { Button } from "@fluentui/react-components";
import { ArrowLeftFilled } from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";
import { withRTL } from "../../../../utils/withRTL";

const ArrowLeftFilledWithRTL = withRTL(ArrowLeftFilled);

export interface BackButtonProps {
  className?: string;
  disabled?: boolean;
}

export function BackButton({ disabled }: BackButtonProps) {
  const { t } = useTranslation();

  return (
    <Button
      title={t("board.goBack")}
      aria-label={t("board.goBack")}
      size="large"
      appearance="subtle"
      disabled={disabled}
      icon={<ArrowLeftFilledWithRTL />}
    />
  );
}
