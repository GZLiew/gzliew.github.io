import xw from 'xwind'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

import Down from '@/assets/icons/Down'

type ChevronDownStyledProps = {
  isFocus?: boolean
}

export const ButtonsContainer = styled.div`
  ${xw`flex flex-col`}
`

export const ChevronDownStyled = styled(Down, {
  shouldForwardProp: (prop: string) => isPropValid(prop)
})<ChevronDownStyledProps>`
  ${xw`ml-2`}
  width: 1rem;
  height: 1rem;
  fill: ${({ isFocus, theme }) => (isFocus ? 'white' : theme.colors.text.primary)};
`
