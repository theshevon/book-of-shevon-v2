export const importAll = (r: { (arg0: any): string; keys: () => any[]; }) => {
  const images: string[] = [];
  r.keys().forEach((item: any, index: any) => { images.push(r(item)); });
  return images;
};
