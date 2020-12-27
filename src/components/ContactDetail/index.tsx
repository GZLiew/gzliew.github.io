import React from 'react'
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
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log({ data })
  }

  return (
    <PageLayout preview={preview} blokConfig={blokConfig} title={() => <HeaderTitle label={DEFAULT_LABEL} />}>
      <StyledSection>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledTextInput
            ref={register({
              ...Validations.required(),
              ...Validations.maxLength(100)
            })}
            name="name"
            type="text"
            placeholder="Enter Name"
          />
          <ErrorText>{errors.name?.message}</ErrorText>
          <StyledTextInput
            ref={register({
              ...Validations.required(),
              ...Validations.maxLength(10, 'Room number has too many characters')
            })}
            name="roomNumber"
            type="text"
            placeholder="Enter Room Number"
          />
          <ErrorText>{errors.roomNumber?.message}</ErrorText>
          <StyledButton onClick={handleSubmit(onSubmit)} type="submit" size="large">
            Place Order
          </StyledButton>
        </form>
      </StyledSection>
    </PageLayout>
  )
}

export default ContactDetail
