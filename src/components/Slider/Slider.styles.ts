import xw from 'xwind'
import styled from '@emotion/styled'

import { animated } from 'react-spring'

export const dotStyles = {
  innerMargin: 6,
  border: 3
}

export const StyledSlider = animated(styled.div<{ isZooming?: boolean }>`
  ${xw`relative grid grid-flow-col w-full select-none`}
  touch-action: pan-y;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: ${({ isZooming }) => (isZooming ? 20 : 0)};
`)

export const Slide = styled.div`
  ${xw`relative block w-screen h-screen`}
`
