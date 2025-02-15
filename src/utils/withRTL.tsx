import React from "react";
import { useTranslation } from "react-i18next";

export const withRTL = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  return function ComponentWithRTL(props: P) {
    const { i18n } = useTranslation();

    const scaleX = i18n.dir() === "ltr" ? 1 : -1;
    const style = { transform: `scaleX(${scaleX})` };

    return <Component {...props} style={style} />;
  };
};
