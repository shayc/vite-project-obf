import { Button } from "@fluentui/react-components";
import { ArrowImportFilled } from "@fluentui/react-icons";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

interface FileUploadButtonProps {
  accept?: string;
}

export function FileUploadButton({
  accept = ".obf, .obz",
}: FileUploadButtonProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      // TODO: Handle the file
      console.log(files[0]);
    }
  };

  return (
    <>
      <Button
        title={t("settings.import")}
        aria-label={t("settings.import")}
        appearance="subtle"
        icon={<ArrowImportFilled />}
        onClick={handleButtonClick}
      />

      <input
        type="file"
        accept={accept}
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </>
  );
}
