import React from 'react'
import { useTheme } from '@emotion/react'
import { useRouter } from 'next/router'

import { IStoryblok_Link } from '@/lib/types/storyblok'
import GalleryIcons from '@/assets/icons/GalleryIcons'
import { ILayoutNavigationLink } from '@/lib/types/commonLayout'

import {
  IconContainer,
  QuickButtonContainer,
  quickButtonIconBackgrounds,
  QuickButtonLabel
} from './QuickButton.styles'
import { resolveUrl } from '@/lib/utils/resolveUrl'

type Props = {
  index: number
  item: ILayoutNavigationLink
}

const QuickButton = ({ item, index = 0 }: Props) => {
  const theme = useTheme()
  const router = useRouter()
  const { title = '', iconName = 'question', url } = item
  const QuickButtonIcon = GalleryIcons[iconName]

  const onButtonPress = (url: IStoryblok_Link) => {
    const resolvedLink = resolveUrl(url?.cached_url, url?.anchor)
    return router.push(resolvedLink)
  }

  return (
    <QuickButtonContainer onClick={() => onButtonPress(url)}>
      <IconContainer background={quickButtonIconBackgrounds[index % 3]}>
        <QuickButtonIcon
          style={{ color: theme.mode === 'dark' ? 'white' : undefined, transform: 'scale(2)' }}
        />
      </IconContainer>
      <QuickButtonLabel>{title}</QuickButtonLabel>
    </QuickButtonContainer>
  )
}

export default QuickButton
