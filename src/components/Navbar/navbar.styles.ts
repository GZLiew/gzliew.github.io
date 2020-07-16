import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { rgba } from "polished"

interface Props {
  isOpen: boolean
}

export const NavbarWrapper = styled.div<Props>`
  ${tw`
    z-100
    fixed
    top-0
    left-0
    w-full
    h-screen
    overflow-hidden
    transition-opacity
    duration-300
    ease-in
  `}

  opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
  pointer-events: ${({ isOpen }) => !isOpen && `none`};
  background-color: ${rgba("#000", 0.6)};
`

export const StyledNavbar = styled.div<Props>`
  ${tw`
    z-50
    relative
    top-0
    left-0
    h-screen
    overflow-auto
    transition-transform
    duration-200
    ease-in
  `}

  background: ${({ theme }) => theme.colors.navbarBackground};
  color: ${({ theme }) => theme.colors.text.primary};
  width: calc(84vw);
  max-width: 304px;
  transform: translateX(${(props) => (props.isOpen ? 0 : `-100%`)});
`

export const Nav = styled.nav`
  ${tw`
    flex
    flex-wrap
    px-4
  `}
`
