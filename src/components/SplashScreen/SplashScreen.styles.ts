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
  ${xw`flex flex-1 flex-col px-8 pb-8 text-white text-center items-center justify-around`}
`

export const HotelLogoWrapper = styled.div`
  ${xw`w-1/4 top-0`}
  height: 25%;
`

export const HotelLogo = styled.img`
  ${xw`m-auto max-h-full max-w-full`}
`

export const InfoWrapper = styled.div`
  ${xw`py-7 px-4`}
`

export const InfoTitle = styled.div`
  ${xw` p-2 text-3xl font-bold`}
`

export const InfoDetail = styled.div`
  ${xw`pt-2 px-4 text-sm`}
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.text.alternate : theme.colors.primary)}
`

export const ButtonWrapper = styled.div`
  ${xw`w-full`}
  max-width: 420px;
`
