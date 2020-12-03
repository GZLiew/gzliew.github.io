export const replaceUrl = (newUrl: string) => window.history.pushState({}, "", newUrl)
