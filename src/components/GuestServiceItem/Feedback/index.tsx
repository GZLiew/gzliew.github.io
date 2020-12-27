import React from 'react'
import { useForm } from 'react-hook-form'

import * as Validations from '@/lib/validations'
import TextArea from '@/components/_common/TextArea'
import { GuestService, InputData } from '@/lib/types/guestService'

import { NextIconStyled } from '../GuestServiceItem.styles'
import { ErrorText, FeedbackContainer, FeedbackSubmitButton } from './Feedback.styles'

type Props = {
  blok: GuestService<InputData>
}

const Feedback = ({ blok }: Props) => {
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log({ data })
  }

  return (
    <FeedbackContainer>
      <TextArea
        ref={register({
          ...Validations.required(),
          ...Validations.maxLength(250)
        })}
        name="feedback"
        rows={10}
        placeholder={blok?.data?.placeholder}
      />
      <FeedbackSubmitButton onClick={handleSubmit(onSubmit)} withIcon size="medium">
        Request <NextIconStyled />
      </FeedbackSubmitButton>
      <ErrorText>{errors.feedback?.message}</ErrorText>
    </FeedbackContainer>
  )
}

export default Feedback
