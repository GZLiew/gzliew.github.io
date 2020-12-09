import xw from 'xwind'
import styled from '@emotion/styled'
import { animated } from 'react-spring'

type TapProps = {
  isFocused: boolean
}

export const Base = styled.div`
  ${xw`relative border-4 rounded-full text-gray-600 text-base inline-flex flex-row`}
  border-color: ${({ theme }) => (theme.mode === 'light' ? theme.colors.primary : theme.colors.primary)};
  background-color: ${({ theme }) => (theme.mode === 'light' ? theme.colors.primary : theme.colors.primary)};
`

export const Tab = styled.div<TapProps>`
  ${xw`py-2 px-2 w-40 break-all text-center select-none flex flex-col items-center justify-center`}
  ${({ isFocused }) => (isFocused ? xw`text-white pointer-events-none` : xw`text-gray-600`)}
  z-index: 1;
`

export const TabOverlay = styled(animated.div)`
  ${xw`absolute h-full w-40 text-white text-center rounded-full`}
  background: ${({ theme }) =>
    `linear-gradient(101deg, ${theme.brandColors.secondary} 17%, ${theme.brandColors.primary} 77%)`}};
`
