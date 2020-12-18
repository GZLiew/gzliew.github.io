import React, { ReactNode } from 'react'

import { HotelConfigContent } from '@/lib/types/hotelConfig'
import { GuestService } from '@/lib/types/guestService'
import HeaderTitle from '@/components/_common/HeaderTitle'
import PageLayout from '@/components/_common/PageLayout'

import CustomDates from './CustomDates'
import Now from './Now'
import Later from './Later'
import IconLabel from './IconLabel'
import { Center, PageContainer } from './GuestServiceItem.styles'
import Feedback from './Feedback'

interface Props {
  blok: GuestService
  blokConfig: HotelConfigContent
  preview?: boolean
  category?: string
}

const DEFAULT_LABEL = 'Service Not Found'

const GuestServiceItem = ({ blok, blokConfig, preview }: Props) => {
  let Content: ReactNode = <Center>{DEFAULT_LABEL}</Center>

  switch (blok?.data?.selected) {
    case 'custom':
      Content = <CustomDates blok={blok} />
      break
    case 'now':
      Content = <Now blok={blok} />
      break
    case 'future':
      Content = <Later blok={blok} />
      break
    case 'feedback':
      Content = <Feedback blok={blok} />
      break
    default:
      break
  }

  return (
    <PageLayout
      preview={preview}
      blokConfig={blokConfig}
      title={() => (
        <HeaderTitle label={<IconLabel icon={blok?.icon} label={blok?.label || DEFAULT_LABEL} />} />
      )}>
      <PageContainer>{Content}</PageContainer>
    </PageLayout>
  )
}

export default GuestServiceItem
