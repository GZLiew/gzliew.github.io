import { NavbarWrapper, StyledNavbar, Nav } from "./navbar.styles"

interface Props {
  isOpen: boolean
  handleNavbarClick: () => void
}

const Navbar = ({ isOpen, handleNavbarClick }: Props) => {
  return (
    <NavbarWrapper isOpen={isOpen} onClick={handleNavbarClick}>
      <StyledNavbar isOpen={isOpen}>
        <Nav>
          <a href="#!">Home</a>
          <a href="#!">Food</a>
          <a href="#!">Beverages</a>
          <a href="#!">Guest Directory</a>
          <a href="#!">Hotel Information</a>
          <a href="#!">Guest Services</a>
          <a href="#!">My Orders</a>
          <a href="#!">Facilities</a>
          <a href="#!">Report a problem</a>
          <a href="#!">Feedback</a>
          <a href="#!">Logout</a>
        </Nav>
      </StyledNavbar>
    </NavbarWrapper>
  )
}

export default Navbar
