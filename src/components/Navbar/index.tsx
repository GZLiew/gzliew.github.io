import { useRef } from 'react'
import { useSwipeable } from 'react-swipeable'

import { NavbarWrapper, StyledNavbar, Nav } from './navbar.styles'
import NavLink from '../NavLink'
import GuestDetails from '../GuestDetails'

import { HotelLogo } from '@/lib/types/hotelConfig'
import { ILayoutNavigationLink } from '@/lib/types/commonLayout'

import useLockBodyScroll from '@/lib/hooks/useLockBodyScroll'

interface Props {
  isOpen: boolean
  guestPhoto: HotelLogo
  navLinks?: ILayoutNavigationLink[]
  handleNavbarClick: () => void
}

const Navbar = ({ isOpen, guestPhoto, navLinks, handleNavbarClick }: Props) => {
  const ref = useRef(null)
  useLockBodyScroll(isOpen, ref)

  const handlers = useSwipeable({
    trackMouse: false,
    onSwipedLeft: handleNavbarClick
  })

  return (
    <NavbarWrapper isOpen={isOpen} {...handlers} onClick={handleNavbarClick}>
      <StyledNavbar isOpen={isOpen} ref={ref}>
        <GuestDetails guestPhoto={guestPhoto} isNavbarOpen={isOpen} />
        <Nav>
          {navLinks?.map((navLink, index) => (
            <NavLink blok={navLink} key={`${navLink?.title}-${index}`} />
          ))}
        </Nav>
      </StyledNavbar>
    </NavbarWrapper>
  )
}

export default Navbar
