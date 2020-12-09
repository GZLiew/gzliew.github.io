import { useRouter } from 'next/router'

const baseGetLocalizedSlug = (language: string, url: string): string => {
  if (language) {
    const baseRoute = `/${language}`
    if (url === '/') return baseRoute
    return baseRoute + `/${url}`
  }
  return url
}

const getLocalizedSlug = (url: string, language?: string): string => {
  const router = useRouter()
  // Page components have to pass the language by their own as
  // their `router` still doesn't have the language query variable initialized
  if (language) {
    return baseGetLocalizedSlug(language, url)
  }
  return baseGetLocalizedSlug(router?.query?.language as string, url)
}

export default getLocalizedSlug

export const getLocalizedSlugNode = (language: string, url: string): string => {
  return baseGetLocalizedSlug(language, url)
}
