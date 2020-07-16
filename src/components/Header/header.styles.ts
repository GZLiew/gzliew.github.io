import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import Container from "../Container"

export const HeaderContainer = styled(Container)`
  ${tw`
    z-50
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
`

// Slide down HeaderBackground when hasScrolled is true
export const HeaderBackground = styled.div<{ hasScrolled: boolean }>`
  ${tw`
    relative
    z-0
  `}

  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  background: ${({ theme }) => theme.colors.header.background};
  box-shadow: ${({ theme }) => theme.colors.header.boxShadow};
  transform: translateY(${({ hasScrolled }) => (hasScrolled ? 0 : `-100%`)});
  opacity: ${({ hasScrolled }) => (hasScrolled ? 1 : 0)};
  transition: transform 0.2s ease-in, opacity 0.1s ease-in;
  will-change: transform;
`
export const LogoWrapper = styled.header`
  ${tw`
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

  & img {
    max-width: 45px;
  }
`
