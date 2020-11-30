import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { rgba } from "polished"

interface Props {
  isOpen: boolean
}

export const OverlayContainer = styled.div<Props>`
  ${tw`
    z-50
    fixed
    inset-0
    w-full
    overflow-hidden
    transition-opacity
    duration-300
    ease-in
    flex
    flex-col
    justify-center
    items-center
  `}

  opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
  pointer-events: ${({ isOpen }) => !isOpen && `none`};
  background-color: ${rgba("#000", 0.6)};
`
