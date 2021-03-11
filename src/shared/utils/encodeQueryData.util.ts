export const encodeQueryData = <T>(data: T): string => {
  return Object.keys(data)
    .map((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return [key, data[key]].map(encodeURIComponent).join("=");
    })
    .join("&");
};
