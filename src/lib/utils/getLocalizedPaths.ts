import { getLanguageCodes } from '../api'

// fetch Storyblok content languages and map them alongside `url` to a path
// Every path represents a localized version of the Storyblok content
// See https://nextjs.org/docs/basic-features/data-fetching#fallback-false for fallback option

type Path = {
  params: { language: string }
}

type Result = {
  paths: Path[]
  fallback: boolean
}

type GetLocalizedPaths = () => Promise<Result>

const getLocalizedPaths: GetLocalizedPaths = async () => {
  const languageCodes = await getLanguageCodes()

  const paths = languageCodes?.map((lang) => ({ params: { language: lang } }))
  return { paths, fallback: false }
}

export default getLocalizedPaths
