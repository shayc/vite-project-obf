import * as OBF from "./obf";

export function getMediaReference(media: OBF.Media): string | undefined {
  return media.data ?? media.path ?? media.url;
}
