import React from 'react'
import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'

import { HotelConfigContent } from '@/lib/types/hotelConfig'
import { HotelInfoContent } from '@/lib/types/hotelInfo'
import * as Validations from '@/lib/validations'
import PageLayout from '@/components/_common/PageLayout'
import HeaderTitle from '@/components/_common/HeaderTitle'
import { StyledTextInput, StyledButton, StyledSection, ErrorText } from './ContactDetail.styles'

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
  preview?: boolean
}

const DEFAULT_LABEL = 'Contact Details'

const ContactDetail = ({ blokConfig, preview }: Props) => {
  const intl = useIntl()
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log({ data })
  }

  return (
    <PageLayout preview={preview} blokConfig={blokConfig} title={() => <HeaderTitle label={DEFAULT_LABEL} />}>
      <StyledSection>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledTextInput
            ref={register({
              ...Validations.required(intl.formatMessage({ id: 'validations.required' })),
              ...Validations.maxLength(100, intl.formatMessage({ id: 'validations.maxlength' }))
            })}
            name="name"
            type="text"
            placeholder={intl.formatMessage({ id: 'form.placeholder.name' })}
          />
          <ErrorText>{errors.name?.message}</ErrorText>
          <StyledTextInput
            ref={register({
              ...Validations.required(intl.formatMessage({ id: 'validations.required' })),
              ...Validations.maxLength(10, intl.formatMessage({ id: 'validations.required' }))
            })}
            name="roomNumber"
            type="text"
            placeholder={intl.formatMessage({ id: 'form.placeholder.roomNumber' })}
          />
          <ErrorText>{errors.roomNumber?.message}</ErrorText>
          <StyledButton onClick={handleSubmit(onSubmit)} type="submit" size="large">
            {intl.formatMessage({ id: 'form.button.placeOrder' })}
          </StyledButton>
        </form>
      </StyledSection>
    </PageLayout>
  )
}

export default ContactDetail
