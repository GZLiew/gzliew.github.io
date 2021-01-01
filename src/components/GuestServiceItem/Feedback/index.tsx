import React from 'react'
import { useIntl } from 'react-intl'
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
  const intl = useIntl()
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log({ data })
  }

  return (
    <FeedbackContainer>
      <TextArea
        ref={register({
          ...Validations.required(
            intl.formatMessage({
              id: 'validations.required'
            })
          ),
          ...Validations.maxLength(
            250,
            intl.formatMessage({
              id: 'validations.maxlength'
            })
          )
        })}
        name="feedback"
        rows={14}
        placeholder={blok?.data?.placeholder}
      />
      <FeedbackSubmitButton onClick={handleSubmit(onSubmit)} withIcon size="medium">
        {intl.formatMessage({ id: 'form.button.request' })} <NextIconStyled />
      </FeedbackSubmitButton>
      <ErrorText>{errors.feedback?.message}</ErrorText>
    </FeedbackContainer>
  )
}

export default Feedback
