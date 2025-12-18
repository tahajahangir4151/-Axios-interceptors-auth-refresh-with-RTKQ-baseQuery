export const getCookies = (name: string) => {
  if (typeof document === undefined) return null;
  // console.log(document);
  const cookies = document.cookie.split("; ");
  // console.log(cookies)
  const cookie = cookies.find((c) => c.startsWith(name + "="));
  // console.log(cookie)
  return cookie ? cookie.split("=")[1] : null;
};
