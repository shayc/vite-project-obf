import { Subtitle2 } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { DarkModeSwitch } from "../../../features/Theme/DarkModeSwitch";

export function AppearanceSettings() {
  const { t } = useTranslation();

  return (
    <div>
      <Subtitle2>{t("settings.appearance")}</Subtitle2>

      <DarkModeSwitch />
    </div>
  );
}
