import xw from 'xwind'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import isPropValid from '@emotion/is-prop-valid'

import TouchableOpacity from '@/components/_common/TouchableOpacity'

type Props = {
  isFocused?: boolean
}

export const TabContainer = styled(TouchableOpacity, {
  shouldForwardProp: (prop: string) => isPropValid(prop)
})<Props>`
  ${xw`flex flex-1 flex-col justify-start items-center py-4`}
  color: ${({ theme, isFocused }) => (isFocused ? theme.brandColors.primary : theme.colors.text.primary)};
  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-top-width: 2px;
      border-top-color: ${theme.brandColors.primary};
      background-color: rgba(0, 0, 0, 0.3);
    `}
`

export const TabLabel = styled.span`
  ${xw`text-xs break-words text-center pt-2`}
  max-width: 4.5rem;
`

export const IconContainer = styled.div`
  ${xw`flex justify-center items-center`}
  min-width: 3rem;
  min-height: 2rem;
`
