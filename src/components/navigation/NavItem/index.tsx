import React from 'react'

import GalleryIcons from '@/assets/icons/GalleryIcons/index'
import { ILayoutNavigationLink } from '@/lib/types/commonLayout'
import { IconContainer, NavItemContainer } from './NavItem.styles'
import BaseLink from '@/components/BaseLink'

type Props = {
  item: ILayoutNavigationLink
}

const NavItem = ({ item }: Props) => {
  const { iconName = 'question' } = item
  const NavIcon = GalleryIcons[iconName]
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
