import xw from 'xwind'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

import ButtonToggle from '@/components/_common/ButtonToggle'
import { ButtonWrapper, ButtonStyled } from '@/components/_common/Button/Button.styles'
import Down from '@/assets/icons/Down'

type ChevronDownStyledProps = {
  isFocus?: boolean
}

export const ButtonsContainer = styled.div`
  ${xw`flex flex-col`}
`

export const ButtonToggleStyled = styled(ButtonToggle)`
  ${ButtonWrapper} {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    ${ButtonStyled} {
      font-size: 0.7rem;
    }
  }
`

export const ChevronDownStyled = styled(Down, {
  shouldForwardProp: (prop: string) => isPropValid(prop)
})<ChevronDownStyledProps>`
  ${xw`ml-2`}
  width: 1rem;
  height: 1rem;
  fill: ${({ isFocus, theme }) => (isFocus ? 'white' : theme.colors.text.primary)};
`
