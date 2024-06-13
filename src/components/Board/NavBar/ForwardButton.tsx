import { Button } from "@fluentui/react-components";
import { ArrowRightFilled } from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";

export interface ForwardButtonProps {
  className?: string;
  disabled?: boolean;
}

export const ForwardButton = (props: ForwardButtonProps) => {
  const { disabled } = props;

  const { t, i18n } = useTranslation();

  const scaleX = i18n.dir() === "ltr" ? 1 : -1;
  const iconStyle = { transform: `scaleX(${scaleX})` };

  return (
    <Button
      title={t("board.goForward")}
      aria-label={t("board.goForward")}
      size="large"
      appearance="subtle"
      disabled={disabled}
      icon={<ArrowRightFilled style={iconStyle} />}
    />
  );
};
