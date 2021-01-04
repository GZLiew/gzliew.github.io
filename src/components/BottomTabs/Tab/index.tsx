import React from 'react'
import { useRouter } from 'next/router'

import GalleryIcons from '@/assets/icons/GalleryIcons'
import { resolveUrl } from '@/lib/utils/resolveUrl'
import { resolveRoute } from '@/lib/utils/resolveRoute'
import { IStoryblok_Link } from '@/lib/types/storyblok'
import { ILayoutNavigationLink } from '@/lib/types/commonLayout'

import { IconContainer, TabContainer, TabLabel } from './Tab.styles'

type Props = {
  item: ILayoutNavigationLink
}

const Tab = ({ item }: Props) => {
  const router = useRouter()
  const { title = 'Home', iconName = 'question', url } = item
  const TabIcon = GalleryIcons[iconName]

  const isFocused = resolveRoute(router?.asPath) === resolveUrl(url?.cached_url, '', false)

  const onTabClick = (url: IStoryblok_Link) => {
    const resolvedUrl = resolveUrl(url?.cached_url, url?.anchor)
    return router.push(resolvedUrl)
  }

  if (!item) {
    return null
  }

  return (
    <TabContainer isFocused={isFocused} onClick={() => onTabClick(url)}>
      <IconContainer>
        <TabIcon />
      </IconContainer>
      <TabLabel>{title}</TabLabel>
    </TabContainer>
  )
}

export default Tab
