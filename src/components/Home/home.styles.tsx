import xw from 'xwind'
import styled from '@emotion/styled'
import Container from '@/components/Container'
import Slider from '@/components/Slider'
import Button from '@/components/_common/Button'
import { Slide } from '@/components/Slider/Slider.styles'

type DotProps = {
  isFocused?: boolean
}

export const StyledHomeContainer = styled(Container)`
  ${xw`pb-28 pt-4`}
`

export const StyledTitle = styled.h2`
  ${xw`text-xl pb-4 font-semibold`}
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 38px;
`
export const SubHeading = styled.h1`
  ${xw`text-sm pt-4 font-normal`}
  color: ${({ theme }) => theme.colors.text.alternate};
`

export const SlideImage = styled.img`
  ${xw`block w-full h-full`}
`

export const SliderContainer = styled.div`
  ${xw`relative overflow-hidden my-6 rounded-2xl`}
  width: 100%;
`

export const StyledSlider = styled(Slider)`
  ${xw`flex flex-nowrap`}
  ${Slide} {
    ${xw`h-auto w-auto`}
    flex-basis: 100%;
    flex-shrink: 0;
    height: 12rem;
  }
`

export const SlideContentContainer = styled.div`
  ${xw`absolute flex flex-col justify-center items-center w-full inset-0 text-center`}
`

export const BannerPrimaryLabel = styled.span`
  ${xw`text-lg font-thin text-white`}
  text-shadow: 2px 2px 4px #000000;
`

export const BannerSecondaryLabel = styled.span`
  ${xw`text-2xl text-white`}
  text-shadow: 2px 2px 4px #000000;
`

export const StyledBannerButton = styled(Button)`
  ${xw`my-4`}
`

export const PaginationContainer = styled.div`
  ${xw`flex absolute z-20 inset-x-0 bottom-3 justify-center items-center`}
`

export const Dot = styled.div<DotProps>`
  ${xw`rounded-full mx-2`}
  background-color: ${({ isFocused }) => (isFocused ? 'white' : 'gray')};
  width: ${({ isFocused }) => (isFocused ? '2rem' : '0.6rem')};
  height: 0.6rem;
`
