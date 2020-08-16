import { fetchAPI } from "./fetchAPI"

// fetch Storyblok content languages and map them alongside `url` to a path
// Every path represents a localized version of the Storyblok content
// See https://nextjs.org/docs/basic-features/data-fetching#fallback-false for fallback option
const getLocalizedPaths = async (url: string) => {
  const data: { Space?: { languageCodes?: string[] } } = await fetchAPI(`{ Space { languageCodes } }`, {
    preview: false
  })

  const paths = data?.Space?.languageCodes?.map((lang) => `/${lang}/${url}`)
  return { paths, fallback: false }
}

export default getLocalizedPaths
