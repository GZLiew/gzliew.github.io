import React from 'react'

import TextArea from '@/components/_common/TextArea'
import { GuestService, InputData } from '@/lib/types/guestService'

import { NextIconStyled } from '../GuestServiceItem.styles'
import { FeedbackContainer, FeedbackSubmitButton } from './Feedback.styles'

type Props = {
  blok: GuestService<InputData>
}

const Feedback = ({ blok }: Props) => {
  return (
    <FeedbackContainer>
      <TextArea rows={10} placeholder={blok?.data?.placeholder} />
      <FeedbackSubmitButton withIcon size="medium">
        Request <NextIconStyled />
      </FeedbackSubmitButton>
    </FeedbackContainer>
  )
}

export default Feedback
