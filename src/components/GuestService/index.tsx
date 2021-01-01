import React from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@emotion/react'
import SbEditable from 'storyblok-react'

import { HotelConfigContent } from '@/lib/types/hotelConfig'
import { ICommonLayout } from '@/lib/types/commonLayout'

import PageLayout from '@/components/_common/PageLayout'
import { GuestServiceContent } from '@/lib/types/guestService'
import {
  GSButton,
  IconContainer,
  ListContainer,
  StretchedContent,
  StyledHeaderTitle
} from './GuestService.styles'
import GalleryIcons from '@/assets/icons/GalleryIcons/index'
import Right from '@/assets/icons/Right'

interface Props {
  blok: GuestServiceContent
  layoutNavigation?: ICommonLayout
  blokConfig: HotelConfigContent
  preview?: boolean
  category?: string
}

const DEFAULT_LABEL = 'Guest Services'

const GuestService = ({ blok, blokConfig, preview, layoutNavigation }: Props) => {
  const router = useRouter()
  const { button } = useTheme()

  return (
    <SbEditable content={blok}>
      <PageLayout navLinks={layoutNavigation?.links} preview={preview} blokConfig={blokConfig}>
        <StyledHeaderTitle label={blok?.headerTitle || DEFAULT_LABEL} />
        <ListContainer>
          {blok &&
            blok.services &&
            Array.isArray(blok.services) &&
            blok.services.map((s) => {
              const ListItemIcon = GalleryIcons[s.icon] || GalleryIcons.question
              return (
                <SbEditable key={s._uid} content={s}>
                  <GSButton
                    raised={false}
                    variant="flat"
                    key={s._uid}
                    withIcon
                    size="large"
                    onClick={() => router.push(`guest-service/${s._uid}`)}
                    bgColor={button.guestService}>
                    <IconContainer>
                      <ListItemIcon />
                    </IconContainer>
                    <StretchedContent>{s.label || 'Service'}</StretchedContent>
                    <Right />
                  </GSButton>
                </SbEditable>
              )
            })}
        </ListContainer>
      </PageLayout>
    </SbEditable>
  )
}

export default GuestService
