import React from 'react'
import GalleryIcons from '@/assets/icons/GalleryIcons/index'

import { IconContainer, IconLabelContainer } from './IconLabel.styles'

type Props = {
  icon: string
  label: string
}

const IconLabel = (props: Props) => {
  const { icon, label } = props
  return (
    <IconLabelContainer>
      <IconContainer>{GalleryIcons[icon] || GalleryIcons.info}</IconContainer>
      {label}
    </IconLabelContainer>
  )
}

export default IconLabel
