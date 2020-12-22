import React, { useState } from 'react'

import ButtonTab from '@/components/_common/ButtonTab'
import { DateData, GuestService } from '@/lib/types/guestService'

import { StyledButtonTabsContainer, TabsSection } from '../GuestServiceItem.styles'
import Later from '../Later'
import Now from '../Now'

const OPTIONS = [
  {
    id: 'now',
    title: 'Now'
  },
  {
    id: 'later',
    title: 'Later'
  }
]

type Props = {
  blok: GuestService<DateData>
}

const CustomDates = ({ blok }: Props) => {
  const [option, setOption] = useState('now')

  return (
    <>
      <TabsSection isNow={option === 'now'}>
        {blok?.data?.subtitle}
        <StyledButtonTabsContainer>
          <ButtonTab items={OPTIONS} onChange={(item) => setOption(item.id)} />
        </StyledButtonTabsContainer>
      </TabsSection>
      {option === 'later' && <Later blok={blok} />}
      {option === 'now' && <Now blok={blok} />}
    </>
  )
}

export default CustomDates
