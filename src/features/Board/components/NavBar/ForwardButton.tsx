import { Button } from "@fluentui/react-components";
import { ArrowRightFilled } from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";
import { withRTL } from "../../../../utils/withRTL";

const ArrowRightFilledWithRTL = withRTL(ArrowRightFilled);

export interface ForwardButtonProps {
  className?: string;
  disabled?: boolean;
}

export function ForwardButton({ disabled }: ForwardButtonProps) {
  const { t } = useTranslation();

  return (
    <Button
      title={t("board.goForward")}
      aria-label={t("board.goForward")}
      size="large"
      appearance="subtle"
      disabled={disabled}
      icon={<ArrowRightFilledWithRTL />}
    />
  );
}
