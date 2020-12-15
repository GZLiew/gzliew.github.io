import xw from 'xwind'
import styled from '@emotion/styled'

export const StyledSection = styled.div`
  ${xw`relative w-full p-0 flex flex-col`}
  height: 100vh;
`

export const HeroImage = styled.img`
  ${xw`w-full`}
  height: 50%;
`

export const ContentContainer = styled.div`
  ${xw`absolute top-0 left-0 w-full h-full flex flex-col`}
  background: ${({ theme }) => theme.colors.welcomeBackground}
`

export const TopContent = styled.div`
  ${xw`flex flex-1`}
`

export const BottomContent = styled.div`
  ${xw`flex flex-1 px-4 text-white text-center justify-center relative`}
`

export const HotelLogo = styled.img`
  ${xw`w-1/4 absolute`}
  height: 25%;
`
