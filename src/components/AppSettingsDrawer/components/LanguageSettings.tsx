import { Subtitle2 } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { LanguageDropdown } from "../../LanguageDropdown/LanguageDropdown";

export function LanguageSettings() {
  const { t } = useTranslation();

  return (
    <div>
      <Subtitle2>{t("settings.language")}</Subtitle2>

      <LanguageDropdown />
    </div>
  );
}
