import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

import { animated } from "react-spring"

import { rgba } from "polished"

export const dotStyles = {
  innerMargin: 6,
  border: 3
}

export const GalleryWrapper = animated(styled.div`
  ${tw`
  z-50
  fixed
  inset-0
  overflow-hidden
  `}
  width: 100%;
  height: 100%;
  background-color: #cccccc;
`)

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

export const StyledSlider = animated(styled.div<{ isZooming: boolean }>`
  ${tw`relative grid grid-flow-col w-full select-none`}
  touch-action: pan-y;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: ${({ isZooming }) => (isZooming ? 20 : 0)};
`)

export const Slide = styled.div`
  ${tw`block w-screen h-screen`}
`

export const SlideImage = styled.img`
  ${tw`w-full h-full object-contain`}
`

export const DotsWrapper = animated(styled.div`
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
`)

export const Dots = styled.ul`
  ${tw`
     flex
     p-5
  `}
  justify-content: center;
  list-style: none;
  margin: 0;
  font-size: 0;
  line-height: 0;
`

export const DotItem = styled.li`
  flex: 0 0 auto;
  width: 84px;
  height: 93px;
  margin-right: ${dotStyles.innerMargin}px;
`

export const DotButton = styled.button`
  ${tw`
    w-full
    h-full
    p-0
    overflow-hidden
    opacity-100
  `}
  border: ${dotStyles.border}px solid transparent;
  border-radius: 10px;

  &.selected {
    border: ${dotStyles.border}px solid white;
  }

  &:focus, &:active {
    outline: none
  }
`

export const DotThumbnail = styled.img`
  ${tw`
    w-full
    h-full
    object-cover
  `}
`
