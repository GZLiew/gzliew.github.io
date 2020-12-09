import Link from 'next/link'

import { StyledDiv } from './baseLink.styles'

import isExternalURL from '@/lib/utils/isExternalURL'

import { IStoryblok_Link } from '@/lib/types/storyblok'

interface Props {
  storyblokLink: IStoryblok_Link
  passHref?: boolean
}

const BaseLink: React.FC<Props> = ({ storyblokLink, passHref, children }) => {
  if (isExternalURL(storyblokLink?.url)) {
    // is there a more "official" way to handle external links navigation?
    return (
      <StyledDiv onClick={() => global?.window?.open(storyblokLink?.url, undefined, 'noopener, noreferrer')}>
        {children}
      </StyledDiv>
    )
  }

  return (
    <Link href={storyblokLink?.cached_url} passHref={passHref}>
      {children}
    </Link>
  )
}

export default BaseLink
