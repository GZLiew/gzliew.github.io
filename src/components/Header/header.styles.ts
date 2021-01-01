import xw from 'xwind'
import styled from '@emotion/styled'
import { animated } from 'react-spring'

import Container from '../Container'

import Hamburger from '@/assets/icons/HamburgerMenu'
import GalleryIcons from '@/assets/icons/GalleryIcons'

const CartIcon = GalleryIcons.cart

export const HeaderContainer = styled(Container)`
  ${xw`
    z-40
    sticky
    top-0
    inset-x-0
    mt-6
    grid
    grid-cols-1
    grid-rows-1
    px-0
    w-full
    sm:max-w-full
  `}
  position: -webkit-sticky;
`

// Slide down HeaderBackground when hasScrolled is true
export const HeaderBackground = styled.div<{ hasScrolled: boolean }>`
  ${xw`
    relative
    z-0
  `}

  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  background: ${({ theme }) => theme.colors.header.background};
  box-shadow: ${({ theme }) => theme.colors.header.boxShadow};
  transform: translateY(${({ hasScrolled }) => (hasScrolled ? 0 : `-100%`)});
  opacity: ${({ hasScrolled }) => (hasScrolled ? 1 : 0)};
  transition: transform 0.2s, opacity 0.1s;
  transition-timing-function: ${({ hasScrolled }) => (!hasScrolled ? 'ease-out' : 'ease-in')};
  will-change: transform;
`

export const HeaderCenterContent = styled.div`
  ${xw`flex flex-grow justify-center items-center text-lg font-bold`}
  color: ${({ theme }) => theme.colors.text.primary}
`

export const ContentContainer = styled.header`
  ${xw`
    relative
    z-10
    flex
    justify-between
    items-center
    px-5
    my-3
  `}
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
`

export const Logo = styled(animated.img)`
  ${xw`absolute transform -translate-x-1/2`}
  left: 50%;
  max-width: 45px;
`

export const HamburgerMenuIcon = styled(Hamburger)`
  .first-line {
    fill: ${({ theme }) => theme?.brandColors?.primary};
  }
`

export const CartIconStyled = styled(CartIcon)`
  transform: scale(0.7);
  color: ${({ theme }) => theme?.colors.text.primary};
`
