import React from 'react'
import SbEditable from 'storyblok-react'

import { HotelConfigContent } from '@/lib/types/hotelConfig'
import { HotelInfoContent } from '@/lib/types/hotelInfo'

import {
  StyledSection,
  StyledContainer,
  SuccessMessage,
  CheckWrapper,
  Note,
  ThinText,
  BoldText,
  Wrapper,
  CheckWrapperInner
} from './OrderSuccess.styles'

import CheckedIcon from '../../assets/icons/ic-checked.svg'
import Button from '../_common/Button'

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
  preview?: boolean
}

const _DEFAULT_LABEL = 'Order Success'

const OrderSuccess = ({ blok }: Props) => {
  return (
    <SbEditable content={blok}>
      <StyledSection>
        <StyledContainer>
          <CheckWrapper>
            <CheckWrapperInner>
              <CheckedIcon />
            </CheckWrapperInner>
          </CheckWrapper>
          <SuccessMessage>
            <ThinText>Your Order has been</ThinText>
            <BoldText>Successfully Placed</BoldText>
          </SuccessMessage>
        </StyledContainer>
        <Wrapper>
          <Note>
            <ThinText>Your Order will be with you in</ThinText>
            <BoldText>approximately 45mins</BoldText>
          </Note>
          <Button size="medium">Home</Button>
        </Wrapper>
      </StyledSection>
    </SbEditable>
  )
}

export default OrderSuccess
