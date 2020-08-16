export const getLocalizedSlugNode = (language: string, url: string): string => {
  if (language) {
    const baseRoute = `/${language}/`
    if (url === "/") return baseRoute
    return baseRoute + url
  }
  return url
}
