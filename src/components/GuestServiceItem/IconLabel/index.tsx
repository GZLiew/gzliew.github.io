import React from 'react'
import GalleryIcons from '@/assets/icons/GalleryIcons/index'

import { IconContainer, IconLabelContainer } from './IconLabel.styles'

type Props = {
  icon: string
  label: string
}

const IconLabel = (props: Props) => {
  const { icon = 'question', label } = props
  const ListItemIcon = GalleryIcons[icon]
  return (
    <IconLabelContainer>
      <IconContainer>
        <ListItemIcon />
      </IconContainer>
      {label}
    </IconLabelContainer>
  )
}

export default IconLabel
