import { ColorSpace, HSL, contrast, sRGB } from "colorjs.io/fn";

ColorSpace.register(HSL);
ColorSpace.register(sRGB);

export const getAccessibleTextColor = (backgroundColor: string): string => {
  const BLACK = "#000";
  const WHITE = "#fff";
  const AA = 4.5;

  const isBlackAccessible = contrast(backgroundColor, BLACK, "WCAG21") >= AA;

  return isBlackAccessible ? BLACK : WHITE;
};
