import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { rgba } from "polished"

export const Tabs = styled.div<{ isOnTop: boolean }>`
  ${tw`z-40 sticky flex overflow-x-auto border-b border-solid`}

  background-color: ${({ isOnTop, theme }) =>
    isOnTop ? (theme.mode === "light" ? `#d6dadd` : `#23272b`) : `transparent`};
  transition: background-color 0.1s ease;
  border-bottom-color: ${({ theme }) =>
    theme.mode === "light" ? `rgba(0,0,0,0.11)` : `rgba(255,255,255,0.04)`};

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Container = styled.div`
  ${tw`container flex px-3 mx-auto`}
`

export const Tab = styled.a`
  ${tw`px-3 text-xs`}
  flex: 0 0 auto;
  color: ${({ theme }) => theme.colors.text.alternate};

  &.active {
    color: ${({ theme }) => theme.colors.pink.primary};

    span {
      border-color: ${({ theme }) => theme.colors.pink.primary};
    }
  }

  &:last-of-type {
    ${tw`pr-6`}
  }

  span {
    ${tw`block py-4 border-b-2 border-solid border-transparent`}
  }
`
