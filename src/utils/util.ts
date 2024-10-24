export const getImgUrl = (url: string): string => {
  const returnUrl: string = new URL(`../assets/${url}`, import.meta.url).href;
  //console.log(returnUrl);
  return returnUrl;
};
