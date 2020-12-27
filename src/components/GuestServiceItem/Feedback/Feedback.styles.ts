import xw from 'xwind'
import styled from '@emotion/styled'
import Container from '@/components/Container'
import { SubmitButtonStyled } from '../GuestServiceItem.styles'

export const FeedbackContainer = styled(Container)`
  ${xw`flex flex-col items-center`}
`

export const FeedbackSubmitButton = styled(SubmitButtonStyled)`
  margin-top: -1rem;
`

export const ErrorText = styled.p`
  ${xw`text-red-500 text-center text-sm pt-2`}
`
