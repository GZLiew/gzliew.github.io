import { IStoryblok_Link } from '../types/storyblok'

const getLink = (link: IStoryblok_Link) => {
  let linkURL = link?.cached_url ? `/${link?.cached_url}` : '#'
  if (link?.anchor !== undefined && link?.anchor !== '') {
    linkURL += `#${link?.anchor}`
  }
  return linkURL
}

export default getLink
