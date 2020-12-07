import xw from "xwind"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

import TouchableOpacity from "@/components/_common/TouchableOpacity"
import Ellipses from "@/assets/icons/Ellipses"
import UpDownArrows from "@/assets/icons/UpDownArrows"
import TimeIcon from "@/assets/icons/TimeIcon"

type Props = {
  isFocus?: boolean
}

type TimeModalProps = Props & {
  rect?: DOMRect
}

export const TimeContainer = styled.div`
  ${xw`w-full text-white`}
  max-width: 40rem;
`

export const TitleWrapper = styled.div`
  ${xw`flex flex-row text-sm items-center`}
  ${({ theme }) => (theme.mode === "light" ? xw`text-black` : xw`text-white`)}
`

export const TimeWrapper = styled.div`
  ${xw`flex flex-row py-2 items-center`}
`

export const TimeBlock = styled(TouchableOpacity)`
  ${xw`p-6 rounded-2xl text-center flex flex-row text-xl items-center`}
  background: ${({ theme }) => theme.colors.timeblock};
  ${({ theme }) => (theme.mode === "light" ? xw`text-black` : xw`text-white`)}
`

export const TimeIconStyled = styled(TimeIcon)`
  ${xw`mr-2`}
  fill: ${({ theme }) => (theme.mode === "light" ? "black" : `white`)}
`

export const EllipsesStyled = styled(Ellipses)`
  ${xw`mx-2`}
  fill: ${({ theme }) => (theme.mode === "light" ? "black" : `white`)}
`

export const UpDownStyled = styled(UpDownArrows)`
  ${xw`ml-2`}
  fill: ${({ theme }) => (theme.mode === "light" ? "black" : `white`)}
`

export const AmPmBlock = styled.div`
  ${xw`flex flex-col justify-between ml-4`}
  ${({ theme }) => (theme.mode === "light" ? xw`text-black` : xw`text-white`)}
`

export const AmPmButton = styled(TouchableOpacity)<Props>`
  ${xw`px-5 py-1 rounded-full text-base uppercase mb-2`}
  background: ${({ theme, isFocus }) => isFocus && theme.colors.timeblock};
  &:last-of-type {
    ${xw`mb-0`}
  }
`

export const TimeModal = styled.div<TimeModalProps>`
  ${xw`
    z-50
    fixed
    top-0
    left-0
    overflow-y-scroll
    duration-300
    ease-in
    flex
    flex-col
    rounded-2xl
    max-h-96
  `}
  background: ${({ theme }) => theme.colors.bodyBackground};
  -webkit-overflow-scrolling: touch;
  transform: scale(0);
  transition: transform 0.2s ease-in;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ rect }) =>
    rect &&
    css`
      top: ${rect.y - rect.height * 2}px;
      left: ${rect.x}px;
    `}
  ${({ isFocus }) =>
    isFocus &&
    css`
      transform: scale(1);
      transition: transform 0.2s ease-out;
    `}
`

export const TimeOption = styled(TimeBlock)<Props>`
  ${xw`rounded-none bg-none text-center justify-center px-8`}
  ${({ isFocus }) => isFocus && xw`bg-gray-400`}
`
