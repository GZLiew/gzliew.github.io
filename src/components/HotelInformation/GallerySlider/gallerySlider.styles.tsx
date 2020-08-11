import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

import { animated as renderPropsAnimated } from "react-spring/renderprops.cjs"
import { animated } from "react-spring"

import Carousel, { Dots as BHDots } from "@brainhubeu/react-carousel"

import { rgba } from "polished"

export const dotStyles = {
  innerMargin: 6,
  border: 3
}

export const GalleryWrapper = styled(renderPropsAnimated.div)`
  ${tw`
    z-50
    fixed
    inset-0
  `}
  width: 100%;
  height: 100%;
  background-color: #cccccc;

  .BrainhubCarousel__container {
    ${tw`
      h-full
    `}
  }
`

export const CloseButton = styled.button`
  ${tw`
    z-50
    absolute
    top-0
    left-0
    flex
    items-center
    justify-center
    w-10
    h-10
    rounded-full
    mt-5
    ml-5
  `}

  background: ${rgba("#122232", 0.45)};
`

export const Gallery = styled(Carousel)`
  &,
  .BrainhubCarousel__trackContainer,
  .BrainhubCarousel__track,
  .BrainhubCarouselItem {
    ${tw`
      h-full
    `}
  }

  .BrainhubCarousel__track {
    /* fixes janky transition during first slide */
    transition-duration: 500ms, 500ms;
  }
`

export const Slide = styled.img`
  ${tw`
    w-full
    h-full
    object-cover
  `}
`

export const DotsWrapper = styled(animated.div)`
  ${tw`
    absolute
    bottom-0
    left-0
    w-full
    flex
    overflow-x-auto
 `}
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 0.55) 98%);
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Dots = styled(BHDots)`
  ${tw`
    flex
    p-5
 `}

  li {
    flex: 0 0 auto;
    width: 84px;
    height: 93px;
    margin-right: ${dotStyles.innerMargin}px;
  }

  .BrainhubCarousel__thumbnail {
    ${tw`
      w-full
      h-full
      p-0
      overflow-hidden
      opacity-100
    `}
    border: ${dotStyles.border}px solid transparent;
    border-radius: 10px;

    &--selected {
      border: ${dotStyles.border}px solid white;
    }
  }
`

export const DotThumbnail = styled.img`
  ${tw`
    w-full
    h-full
    object-cover
  `}
`
