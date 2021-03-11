import i18next from "i18next";

export const globalTranslation = (
  translationPath: string,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  args?: any
): string => {
  return i18next.t(translationPath, args);
};
