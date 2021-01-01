import React from 'react'

import { HotelConfigContent } from '@/lib/types/hotelConfig'
import { HotelInfoContent } from '@/lib/types/roomService'
import PageLayout from '@/components/_common/PageLayout'

import HeaderTitle from '@/components/_common/HeaderTitle'
import { NotFoundContainer } from './RoomServiceItem.styles'
import Content from './Content'

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
  preview?: boolean
  params?: { item: string }
}

const RoomServiceItem = ({ preview, blokConfig, blok }: Props) => {
  const label = blok.roomServiceItem ? blok.roomServiceItem.title : 'Item Not Found'

  return (
    <PageLayout
      preview={preview}
      blokConfig={blokConfig}
      title={({ hasScrolled }) => hasScrolled && <HeaderTitle label={label} />}>
      {!blok.roomServiceItem && <NotFoundContainer>{label}</NotFoundContainer>}
      {blok.roomServiceItem && (
        <Content blokConfig={blokConfig} blok={blok} roomServiceItem={blok.roomServiceItem} />
      )}
    </PageLayout>
  )
}

export default RoomServiceItem
