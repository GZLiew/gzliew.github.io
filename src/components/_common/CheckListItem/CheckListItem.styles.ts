import xw from 'xwind'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import TouchableOpacity from '@/components/_common/TouchableOpacity'
import { transparentize } from 'polished'

type BaseProps = {
  selected: boolean
}

type CheckMarkProps = BaseProps

export const Base = styled(TouchableOpacity)<BaseProps>`
  ${xw`px-4 py-3 mb-2 w-full overflow-hidden border flex flex-row items-center relative`}
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.secondary : theme.colors.secondary};
  border-color: ${({ selected, theme }) => (selected ? theme.brandColors.primary : theme.colors.gray)};
`

export const CheckMark = styled.div<CheckMarkProps>`
  ${xw`inline-block border-2 rounded-full w-10 h-10 relative`}
  border-color: ${({ theme }) => theme.colors.gray};
  ${({ selected, theme }) => (!selected ? theme.colors.gray : xw`border-transparent`)}
`

export const CheckMarkHighlight = styled.div<CheckMarkProps>`
  ${xw`w-full h-full absolute rounded-full flex justify-center items-center`}
  z-index: 1;
  transform: scale(0);
  transition: transform 0.2s ease-in;
  background: ${({ theme }) =>
    `linear-gradient(101deg, ${theme.brandColors.secondary} 17%, ${theme.brandColors.primary} 77%)`};
  ${({ selected }) =>
    selected &&
    css`
      transform: scale(1);
      transition: transform 0.2s ease-out;
    `}
`

export const Label = styled.div`
  ${xw`inline-block pl-6`}
  z-index: 1;
  ${({ theme }) => (theme.mode === 'light' ? xw`text-black` : xw`text-white`)}
`

export const HighlightBackground = styled.div<BaseProps>`
  ${xw`w-full h-full absolute top-0 left-0`}
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  ${({ selected, theme }) =>
    selected &&
    css`
      background-color: ${transparentize(0.7, theme.brandColors.primary)};
      border-width: 1px;
      border-style: solid;
      opacity: 1;
      border-color: ${theme.brandColors.primary};
      transition: opacity 0.5s ease-out;
    `}
`
