import React from 'react'

import GalleryIcons from '@/assets/icons/GalleryIcons/index'
import { ILayoutNavigationLink } from '@/lib/types/commonLayout'
import { IconContainer, NavItemContainer } from './NavItem.styles'
import BaseLink from '@/components/BaseLink'

type Props = {
  item: ILayoutNavigationLink
}

const NavItem = ({ item }: Props) => {
  const { iconName } = item
  const NavIcon = GalleryIcons[iconName || 'question']

  if (!item) {
    return null
  }

  return (
    <BaseLink storyblokLink={item?.url}>
      <NavItemContainer>
        <IconContainer>
          <NavIcon />
        </IconContainer>
        {item?.title}
      </NavItemContainer>
    </BaseLink>
  )
}

export default NavItem
