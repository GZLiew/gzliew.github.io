import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { css } from "@emotion/react"
import TouchableOpacity from "@/components/TouchableOpacity"
import { transparentize } from "polished"

type BaseProps = {
  selected: boolean
}

type CheckMarkProps = BaseProps

export const Base = styled(TouchableOpacity)<BaseProps>`
  ${tw`px-4 py-3 mb-2 w-full overflow-hidden border flex flex-row items-center relative`}
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.colors.secondary : theme.colors.secondary};
`

export const CheckMark = styled.div<CheckMarkProps>`
  ${tw`inline-block border-2 rounded-full w-10 h-10 relative`}
  ${({ selected, theme }) => (!selected ? theme.colors.gray : tw`border-transparent`)}
`

export const CheckMarkHighlight = styled.div<CheckMarkProps>`
  ${tw`w-full h-full absolute rounded-full flex justify-center items-center`}
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
  ${tw`inline-block pl-6`}
  z-index: 1;
  ${({ theme }) => (theme.mode === "light" ? tw`text-black` : tw`text-white`)}
`

export const HighlightBackground = styled.div<BaseProps>`
  ${tw`w-full h-full absolute top-0 left-0`}
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  ${({ selected, theme }) =>
    selected &&
    css`
      background-color: ${transparentize(0.7, theme.brandColors.primary)};
      border-width: 2px;
      border-style: solid;
      opacity: 1;
      border-color: ${theme.brandColors.primary};
      transition: opacity 0.5s ease-out;
    `}
`
