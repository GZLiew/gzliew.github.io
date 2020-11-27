import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { rgba } from "polished"

interface Props {
  isOpen: boolean
}

export const TopNavWrapper = styled.div<Props>`
  ${tw`
    z-50
    fixed
    inset-0
    w-full
    overflow-hidden
    transition-opacity
    duration-300
    ease-in
  `}

  opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
  pointer-events: ${({ isOpen }) => !isOpen && `none`};
  background-color: ${rgba("#000", 0.6)};
`

export const StyledTopNav = styled.div<Props>`
  ${tw`
    z-100
    fixed
    top-0
    left-0
    w-full
    overflow-auto
    transition-transform
    duration-200
    ease-in
  `}

  background: ${({ theme }) => theme.colors.navbarBackground};
  color: ${({ theme }) => theme.colors.text.primary};
  transform: translateY(${(props) => (props.isOpen ? 0 : `-100%`)});
`
