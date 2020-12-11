import React from 'react'
import { useTheme } from '@emotion/react'
import SbEditable from 'storyblok-react'

import { HotelConfigContent } from '@/lib/types/hotelConfig'
import HeaderTitle from '@/components/_common/HeaderTitle'

import PageLayout from '@/components/_common/PageLayout'
import { GuestServiceContent } from '@/lib/types/guestService'
import { GSButton, IconContainer, ListContainer, StrechedContent } from './GuestService.styles'
import GalleryIcons from '@/assets/icons/GalleryIcons/index'
import Right from '@/assets/icons/Right'

interface Props {
  blok: GuestServiceContent
  blokConfig: HotelConfigContent
  preview?: boolean
  category?: string
}

const DEFAULT_LABEL = 'Guest Services'

const GuestService = ({ blok, blokConfig, preview }: Props) => {
  const { button } = useTheme()

  return (
    <SbEditable content={blok}>
      <PageLayout
        preview={preview}
        blokConfig={blokConfig}
        title={() => (
          <SbEditable content={blok}>
            <HeaderTitle label={blok?.headerTitle || DEFAULT_LABEL} />
          </SbEditable>
        )}>
        <ListContainer>
          {blok &&
            blok.services &&
            Array.isArray(blok.services) &&
            blok.services.map((s) => (
              <SbEditable key={s._uid} content={s}>
                <GSButton
                  raised={false}
                  variant="flat"
                  key={s._uid}
                  withIcon
                  size="large"
                  bgColor={button.guestService}>
                  <IconContainer>{GalleryIcons[s.icon] || GalleryIcons.info}</IconContainer>
                  <StrechedContent>{s.label || 'Service'}</StrechedContent>
                  <Right />
                </GSButton>
              </SbEditable>
            ))}
        </ListContainer>
      </PageLayout>
    </SbEditable>
  )
}

export default GuestService
