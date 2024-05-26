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

export enum GoossensCrainElder {
  Pink = "Verbs",
  Blue = "Descriptors",
  Green = "Prepositions",
  Yellow = "Nouns",
  Orange = "Questions, negation, pronouns, interjections",
}

export enum ModifiedFitzgeraldKey {
  Blue = "Adjectives",
  Green = "Verbs",
  Yellow = "Pronouns",
  Orange = "Nouns",
  White = "Conjunctions",
  Red = "Important function words, negation, emergency words",
  Pink = "Prepositions, social words",
  Purple = "Questions",
  Brown = "Adverbs",
  Grey = "Determiners",
}
