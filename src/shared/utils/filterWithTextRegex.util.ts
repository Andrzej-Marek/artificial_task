export const filterWithTextRegex = (
  value: string,
  element: string
): true | RegExpExecArray | null => {
  if (!value) {
    return true;
  }
  return RegExp(value, "gi").exec(element);
};
