import styled from '@emotion/styled'
import { ButtonWrapper } from '../Button/Button.styles'

export const ButtonToggleWrapper = styled.div`
  ${ButtonWrapper} {
    margin-right: 10px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`
