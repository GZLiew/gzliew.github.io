import React from 'react'
import { format } from 'date-fns'

import { GuestService } from '@/lib/types/guestService'

import { LighTextStyled, StyledBottomSheet, SubmitButtonStyled } from '../GuestServiceItem.styles'

type Props = {
  blok: GuestService
}

const Now = ({}: Props) => {
  return (
    <StyledBottomSheet>
      <LighTextStyled>Date & Time</LighTextStyled>
      {format(new Date(), 'dd MMM yyyy h:mm a')}
      <SubmitButtonStyled size="medium">Request</SubmitButtonStyled>
    </StyledBottomSheet>
  )
}

export default Now
