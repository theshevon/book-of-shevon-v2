// eslint-disable-next-line no-undef
export const importAll = (r: __WebpackModuleApi.RequireContext) => {
  const images: string[] = [];
  r.keys().forEach((item: string) => {
    images.push(r(item).default);
  });
  return images;
};
