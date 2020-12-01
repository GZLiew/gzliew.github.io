import xw from "xwind"
import styled from "@emotion/styled"
import { rgba } from "polished"

interface Props {
  isOpen: boolean
}

export const OverlayContainer = styled.div<Props>`
  ${xw`
    z-40
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
