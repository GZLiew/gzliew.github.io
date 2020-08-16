import { useRouter } from "next/router"

const baseGetLocalizedSlug = (language: string, url: string): string => {
  if (language) {
    const baseRoute = `/${language}/`
    if (url === "/") return baseRoute
    return baseRoute + url
  }
  return url
}

const getLocalizedSlug = (url: string): string => {
  const router = useRouter()
  return baseGetLocalizedSlug(router?.query?.language as string, url)
}

export default getLocalizedSlug

export const getLocalizedSlugNode = (language: string, url: string): string => {
  return baseGetLocalizedSlug(language, url)
}
